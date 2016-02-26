// Compiled by ClojureScript 1.7.170 {}
goog.provide('cards.core');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('mimas.subs');
goog.require('mimas.core');
goog.require('schema.core');
goog.require('reagent.core');
goog.require('mimas.db');
goog.require('mimas.handlers');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"subscription-header","subscription-header",537196912)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscription-header",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),[cljs.core.str("## Subscriptions")].join(''),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscriptions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Tests for re-frame subscriptions");
}),(function (){
var db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"ok","ok",967785236)], null));
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
try{var values__38167__auto___78200 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),schema.core.check.call(null,mimas.db.State,mimas.db.state));
var result__38168__auto___78201 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78200);
if(cljs.core.truth_(result__38168__auto___78201)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"State","State",1487565184,null),new cljs.core.Symbol(null,"state","state",-348086572,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78200),new cljs.core.Keyword(null,"message","message",-406056002),"Validate state schema"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"State","State",1487565184,null),new cljs.core.Symbol(null,"state","state",-348086572,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78200)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Validate state schema"], null));
}

}catch (e78180){var t__38205__auto___78202 = e78180;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"State","State",1487565184,null),new cljs.core.Symbol(null,"state","state",-348086572,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78202,new cljs.core.Keyword(null,"message","message",-406056002),"Validate state schema"], null));
}
try{var values__38167__auto___78203 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ok","ok",967785236)),cljs.core.deref.call(null,mimas.subs.simple_sub.call(null,db,query)));
var result__38168__auto___78204 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78203);
if(cljs.core.truth_(result__38168__auto___78204)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78203),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78203)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}

}catch (e78181){var t__38205__auto___78205 = e78181;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78205,new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}
try{var values__38167__auto___78206 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("app","title","app/title",636408784))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))));
var result__38168__auto___78207 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78206);
if(cljs.core.truth_(result__38168__auto___78207)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("app","title","app/title",636408784))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78206),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("app","title","app/title",636408784))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78206)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78182){var t__38205__auto___78208 = e78182;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("app","title","app/title",636408784))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78208,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto___78209 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,String),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))));
var result__38168__auto___78210 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78209);
if(cljs.core.truth_(result__38168__auto___78210)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))),new cljs.core.Symbol("js","String","js/String",-2070054036,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78209),new cljs.core.Keyword(null,"message","message",-406056002),"Title is a string"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))),new cljs.core.Symbol("js","String","js/String",-2070054036,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78209)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Title is a string"], null));
}

}catch (e78183){var t__38205__auto___78211 = e78183;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))),new cljs.core.Symbol("js","String","js/String",-2070054036,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78211,new cljs.core.Keyword(null,"message","message",-406056002),"Title is a string"], null));
}
try{var values__38167__auto___78212 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("task","list","task/list",761502432))))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))));
var result__38168__auto___78213 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78212);
if(cljs.core.truth_(result__38168__auto___78213)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78212),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78212)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78184){var t__38205__auto___78214 = e78184;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78214,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto___78215 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.KeySeq),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))));
var result__38168__auto___78216 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78215);
if(cljs.core.truth_(result__38168__auto___78216)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))),new cljs.core.Symbol(null,"KeySeq","KeySeq",-1097476739,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78215),new cljs.core.Keyword(null,"message","message",-406056002),"Dropdown list is a Vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))),new cljs.core.Symbol(null,"KeySeq","KeySeq",-1097476739,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78215)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Dropdown list is a Vector"], null));
}

}catch (e78185){var t__38205__auto___78217 = e78185;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))),new cljs.core.Symbol(null,"KeySeq","KeySeq",-1097476739,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78217,new cljs.core.Keyword(null,"message","message",-406056002),"Dropdown list is a Vector"], null));
}
try{var values__38167__auto___78218 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("task","list","task/list",761502432))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))));
var result__38168__auto___78219 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78218);
if(cljs.core.truth_(result__38168__auto___78219)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78218),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78218)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78186){var t__38205__auto___78220 = e78186;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78220,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto___78221 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentVector),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))));
var result__38168__auto___78222 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78221);
if(cljs.core.truth_(result__38168__auto___78222)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78221),new cljs.core.Keyword(null,"message","message",-406056002),"Task list is a Vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78221)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Task list is a Vector"], null));
}

}catch (e78187){var t__38205__auto___78223 = e78187;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78223,new cljs.core.Keyword(null,"message","message",-406056002),"Task list is a Vector"], null));
}
try{var values__38167__auto___78224 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("task","form","task/form",-1627647084))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))));
var result__38168__auto___78225 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78224);
if(cljs.core.truth_(result__38168__auto___78225)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","form","task/form",-1627647084))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78224),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","form","task/form",-1627647084))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78224)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78188){var t__38205__auto___78226 = e78188;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","form","task/form",-1627647084))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78226,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))));
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))),new cljs.core.Symbol(null,"PersistentArrayMap","PersistentArrayMap",-715498343,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Task form is a Map"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))),new cljs.core.Symbol(null,"PersistentArrayMap","PersistentArrayMap",-715498343,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Task form is a Map"], null));
}

return result__38168__auto__;
}catch (e78189){var t__38205__auto__ = e78189;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))),new cljs.core.Symbol(null,"PersistentArrayMap","PersistentArrayMap",-715498343,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Task form is a Map"], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.subscriptions = (function cards$core$subscriptions(){
return cljs.test.test_var.call(null,cards$core$subscriptions.cljs$lang$var);
});
cards.core.subscriptions.cljs$lang$test = (function (){

var db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"ok","ok",967785236)], null));
var query = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null);
try{var values__38167__auto___78227 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),schema.core.check.call(null,mimas.db.State,mimas.db.state));
var result__38168__auto___78228 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78227);
if(cljs.core.truth_(result__38168__auto___78228)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"State","State",1487565184,null),new cljs.core.Symbol(null,"state","state",-348086572,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78227),new cljs.core.Keyword(null,"message","message",-406056002),"Validate state schema"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"State","State",1487565184,null),new cljs.core.Symbol(null,"state","state",-348086572,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78227)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Validate state schema"], null));
}

}catch (e78190){var t__38205__auto___78229 = e78190;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("s","check","s/check",-1428127528,null),new cljs.core.Symbol(null,"State","State",1487565184,null),new cljs.core.Symbol(null,"state","state",-348086572,null)),null),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78229,new cljs.core.Keyword(null,"message","message",-406056002),"Validate state schema"], null));
}
try{var values__38167__auto___78230 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ok","ok",967785236)),cljs.core.deref.call(null,mimas.subs.simple_sub.call(null,db,query)));
var result__38168__auto___78231 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78230);
if(cljs.core.truth_(result__38168__auto___78231)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78230),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78230)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}

}catch (e78191){var t__38205__auto___78232 = e78191;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("subs","simple-sub","subs/simple-sub",-663595947,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"query","query",352022017,null))),new cljs.core.Keyword(null,"ok","ok",967785236)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78232,new cljs.core.Keyword(null,"message","message",-406056002),"Simple subscription"], null));
}
try{var values__38167__auto___78233 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("app","title","app/title",636408784))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))));
var result__38168__auto___78234 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78233);
if(cljs.core.truth_(result__38168__auto___78234)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("app","title","app/title",636408784))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78233),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("app","title","app/title",636408784))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78233)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78192){var t__38205__auto___78235 = e78192;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("app","title","app/title",636408784))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78235,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto___78236 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,String),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))));
var result__38168__auto___78237 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78236);
if(cljs.core.truth_(result__38168__auto___78237)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))),new cljs.core.Symbol("js","String","js/String",-2070054036,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78236),new cljs.core.Keyword(null,"message","message",-406056002),"Title is a string"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))),new cljs.core.Symbol("js","String","js/String",-2070054036,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78236)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Title is a string"], null));
}

}catch (e78193){var t__38205__auto___78238 = e78193;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null)))),new cljs.core.Symbol("js","String","js/String",-2070054036,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78238,new cljs.core.Keyword(null,"message","message",-406056002),"Title is a string"], null));
}
try{var values__38167__auto___78239 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.keys.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("task","list","task/list",761502432))))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))));
var result__38168__auto___78240 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78239);
if(cljs.core.truth_(result__38168__auto___78240)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78239),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78239)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78194){var t__38205__auto___78241 = e78194;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),cljs.core.list(new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Keyword("task","project","task/project",1114584266),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78241,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto___78242 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.KeySeq),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))));
var result__38168__auto___78243 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78242);
if(cljs.core.truth_(result__38168__auto___78243)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))),new cljs.core.Symbol(null,"KeySeq","KeySeq",-1097476739,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78242),new cljs.core.Keyword(null,"message","message",-406056002),"Dropdown list is a Vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))),new cljs.core.Symbol(null,"KeySeq","KeySeq",-1097476739,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78242)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Dropdown list is a Vector"], null));
}

}catch (e78195){var t__38205__auto___78244 = e78195;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null)))),new cljs.core.Symbol(null,"KeySeq","KeySeq",-1097476739,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78244,new cljs.core.Keyword(null,"message","message",-406056002),"Dropdown list is a Vector"], null));
}
try{var values__38167__auto___78245 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("task","list","task/list",761502432))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))));
var result__38168__auto___78246 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78245);
if(cljs.core.truth_(result__38168__auto___78246)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78245),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78245)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78196){var t__38205__auto___78247 = e78196;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","list","task/list",761502432))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78247,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto___78248 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentVector),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))));
var result__38168__auto___78249 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78248);
if(cljs.core.truth_(result__38168__auto___78249)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78248),new cljs.core.Keyword(null,"message","message",-406056002),"Task list is a Vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78248)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Task list is a Vector"], null));
}

}catch (e78197){var t__38205__auto___78250 = e78197;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78250,new cljs.core.Keyword(null,"message","message",-406056002),"Task list is a Vector"], null));
}
try{var values__38167__auto___78251 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.get.call(null,mimas.db.state,new cljs.core.Keyword("task","form","task/form",-1627647084))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))));
var result__38168__auto___78252 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78251);
if(cljs.core.truth_(result__38168__auto___78252)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","form","task/form",-1627647084))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78251),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","form","task/form",-1627647084))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78251)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}

}catch (e78198){var t__38205__auto___78253 = e78198;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Keyword("task","form","task/form",-1627647084))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78253,new cljs.core.Keyword(null,"message","message",-406056002),"Assert subscription path"], null));
}
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.PersistentArrayMap),cljs.core.type.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))));
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))),new cljs.core.Symbol(null,"PersistentArrayMap","PersistentArrayMap",-715498343,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"Task form is a Map"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))),new cljs.core.Symbol(null,"PersistentArrayMap","PersistentArrayMap",-715498343,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"Task form is a Map"], null));
}

return result__38168__auto__;
}catch (e78199){var t__38205__auto__ = e78199;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null)))),new cljs.core.Symbol(null,"PersistentArrayMap","PersistentArrayMap",-715498343,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"Task form is a Map"], null));
}});

cards.core.subscriptions.cljs$lang$var = new cljs.core.Var(function(){return cards.core.subscriptions;},new cljs.core.Symbol("cards.core","subscriptions","cards.core/subscriptions",1272375565,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),"src/cards/core.cljs",23,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.subscriptions)?cards.core.subscriptions.cljs$lang$test:null)]));
cards.core.state_mock = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("app","title","app/title",636408784),"",new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("form","title","form/title",629162795),"",new cljs.core.Keyword("form","project","form/project",1114967447),""], null),new cljs.core.Keyword("task","editing","task/editing",1370614286),null], null);
cards.core.task_mock = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),(0),new cljs.core.Keyword("task","title","task/title",628775788),"task",new cljs.core.Keyword("task","project","task/project",1114584266),"project",new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"subscription-header","subscription-header",537196912)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscription-header",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),[cljs.core.str("## Handlers ")].join(''),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"handlers","handlers",79528781)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"handlers",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Tests form re-frame handlers");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"form update value");

var ret__38225__auto__ = (function (){var new_form = mimas.handlers.form_update_value.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword("form","title","form/title",629162795),"andre"], null));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.assoc_in.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new_form);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-form","new-form",-523376708,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-form","new-form",-523376708,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78254){var t__38205__auto__ = e78254;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-form","new-form",-523376708,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"add task");

var ret__38225__auto__ = (function (){var new_task_list = mimas.handlers.task_add.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cards.core.task_mock], null));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock)),new_task_list);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78255){var t__38205__auto__ = e78255;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"edit task");

var ret__38225__auto__ = (function (){var new_edit_task = mimas.handlers.task_edit.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cards.core.task_mock], null));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.assoc.call(null,cards.core.state_mock,new cljs.core.Keyword("task","editing","task/editing",1370614286),cards.core.task_mock)),new_edit_task);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-edit-task","new-edit-task",2050983456,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","editing","task/editing",1370614286),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-edit-task","new-edit-task",2050983456,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","editing","task/editing",1370614286),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78256){var t__38205__auto__ = e78256;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-edit-task","new-edit-task",2050983456,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","editing","task/editing",1370614286),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"update task");

var ret__38225__auto__ = (function (){var edit_task = cljs.core.assoc.call(null,cards.core.state_mock,new cljs.core.Keyword("task","editing","task/editing",1370614286),cards.core.task_mock);
var new_task_list = mimas.handlers.task_update.call(null,edit_task,null);
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock)),new_task_list);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78257){var t__38205__auto__ = e78257;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"remove task");

var ret__38225__auto__ = (function (){var new_task_list = cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock);
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mimas.handlers.task_remove.call(null,new_task_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(cards.core.task_mock)], null))),cards.core.state_mock);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),cljs.core.list(new cljs.core.Symbol("h","task-remove","h/task-remove",-277836873,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.list(new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),cljs.core.list(new cljs.core.Symbol("h","task-remove","h/task-remove",-277836873,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.list(new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78258){var t__38205__auto__ = e78258;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),cljs.core.list(new cljs.core.Symbol("h","task-remove","h/task-remove",-277836873,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.list(new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"finish task");

var ret__38225__auto__ = (function (){var state_before_task_finish = cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock);
var state_after_task_finish = cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cljs.core.assoc.call(null,cards.core.task_mock,new cljs.core.Keyword("task","done?","task/done?",-1853689835),true));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mimas.handlers.toggle_done.call(null,state_before_task_finish,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cards.core.task_mock], null))),state_after_task_finish);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-after-task-finish","state-after-task-finish",-1330866699,null),cljs.core.list(new cljs.core.Symbol("h","toggle-done","h/toggle-done",1562636445,null),new cljs.core.Symbol(null,"state-before-task-finish","state-before-task-finish",-237922928,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-after-task-finish","state-after-task-finish",-1330866699,null),cljs.core.list(new cljs.core.Symbol("h","toggle-done","h/toggle-done",1562636445,null),new cljs.core.Symbol(null,"state-before-task-finish","state-before-task-finish",-237922928,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78259){var t__38205__auto__ = e78259;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-after-task-finish","state-after-task-finish",-1330866699,null),cljs.core.list(new cljs.core.Symbol("h","toggle-done","h/toggle-done",1562636445,null),new cljs.core.Symbol(null,"state-before-task-finish","state-before-task-finish",-237922928,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.handlers = (function cards$core$handlers(){
return cljs.test.test_var.call(null,cards$core$handlers.cljs$lang$var);
});
cards.core.handlers.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"form update value");

var ret__38225__auto___78266 = (function (){var new_form = mimas.handlers.form_update_value.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword("form","title","form/title",629162795),"andre"], null));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.assoc_in.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new_form);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-form","new-form",-523376708,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-form","new-form",-523376708,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78260){var t__38205__auto__ = e78260;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-form","new-form",-523376708,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.Keyword("form","title","form/title",629162795)], null),"andre")),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"add task");

var ret__38225__auto___78267 = (function (){var new_task_list = mimas.handlers.task_add.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cards.core.task_mock], null));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock)),new_task_list);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78261){var t__38205__auto__ = e78261;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"edit task");

var ret__38225__auto___78268 = (function (){var new_edit_task = mimas.handlers.task_edit.call(null,cards.core.state_mock,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cards.core.task_mock], null));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.assoc.call(null,cards.core.state_mock,new cljs.core.Keyword("task","editing","task/editing",1370614286),cards.core.task_mock)),new_edit_task);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-edit-task","new-edit-task",2050983456,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","editing","task/editing",1370614286),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-edit-task","new-edit-task",2050983456,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","editing","task/editing",1370614286),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78262){var t__38205__auto__ = e78262;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-edit-task","new-edit-task",2050983456,null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","editing","task/editing",1370614286),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"update task");

var ret__38225__auto___78269 = (function (){var edit_task = cljs.core.assoc.call(null,cards.core.state_mock,new cljs.core.Keyword("task","editing","task/editing",1370614286),cards.core.task_mock);
var new_task_list = mimas.handlers.task_update.call(null,edit_task,null);
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock)),new_task_list);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78263){var t__38205__auto__ = e78263;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),cljs.core.list(new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"remove task");

var ret__38225__auto___78270 = (function (){var new_task_list = cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock);
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mimas.handlers.task_remove.call(null,new_task_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(cards.core.task_mock)], null))),cards.core.state_mock);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),cljs.core.list(new cljs.core.Symbol("h","task-remove","h/task-remove",-277836873,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.list(new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),cljs.core.list(new cljs.core.Symbol("h","task-remove","h/task-remove",-277836873,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.list(new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78264){var t__38205__auto__ = e78264;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-mock","state-mock",-360235766,null),cljs.core.list(new cljs.core.Symbol("h","task-remove","h/task-remove",-277836873,null),new cljs.core.Symbol(null,"new-task-list","new-task-list",64752728,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.list(new cljs.core.Keyword("task","id","task/id",-1375673137),new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null))], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"finish task");

var ret__38225__auto__ = (function (){var state_before_task_finish = cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cards.core.task_mock);
var state_after_task_finish = cljs.core.update.call(null,cards.core.state_mock,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,cljs.core.assoc.call(null,cards.core.task_mock,new cljs.core.Keyword("task","done?","task/done?",-1853689835),true));
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mimas.handlers.toggle_done.call(null,state_before_task_finish,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cards.core.task_mock], null))),state_after_task_finish);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-after-task-finish","state-after-task-finish",-1330866699,null),cljs.core.list(new cljs.core.Symbol("h","toggle-done","h/toggle-done",1562636445,null),new cljs.core.Symbol(null,"state-before-task-finish","state-before-task-finish",-237922928,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-after-task-finish","state-after-task-finish",-1330866699,null),cljs.core.list(new cljs.core.Symbol("h","toggle-done","h/toggle-done",1562636445,null),new cljs.core.Symbol(null,"state-before-task-finish","state-before-task-finish",-237922928,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__38168__auto__;
}catch (e78265){var t__38205__auto__ = e78265;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"state-after-task-finish","state-after-task-finish",-1330866699,null),cljs.core.list(new cljs.core.Symbol("h","toggle-done","h/toggle-done",1562636445,null),new cljs.core.Symbol(null,"state-before-task-finish","state-before-task-finish",-237922928,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Symbol(null,"task-mock","task-mock",1270567780,null)], null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__38225__auto__;
});

cards.core.handlers.cljs$lang$var = new cljs.core.Var(function(){return cards.core.handlers;},new cljs.core.Symbol("cards.core","handlers","cards.core/handlers",-1090001202,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"handlers","handlers",1720060308,null),"src/cards/core.cljs",18,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.handlers)?cards.core.handlers.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"components-header","components-header",2068654962)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"components-header",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),[cljs.core.str("## Components")].join(''),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null)], null));
})], null));
cards.core.title_subs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"title","title",636505583)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"title",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78271 = (function (meta78272){
this.meta78272 = meta78272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78273,meta78272__$1){
var self__ = this;
var _78273__$1 = this;
return (new cards.core.t_cards$core78271(meta78272__$1));
});

cards.core.t_cards$core78271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78273){
var self__ = this;
var _78273__$1 = this;
return self__.meta78272;
});

cards.core.t_cards$core78271.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78271.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.title,cljs.core.deref.call(null,cards.core.title_subs)], null);
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78272","meta78272",-1313865626,null)], null);
});

cards.core.t_cards$core78271.cljs$lang$type = true;

cards.core.t_cards$core78271.cljs$lang$ctorStr = "cards.core/t_cards$core78271";

cards.core.t_cards$core78271.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78271");
});

cards.core.__GT_t_cards$core78271 = (function cards$core$__GT_t_cards$core78271(meta78272){
return (new cards.core.t_cards$core78271(meta78272));
});

}

return (new cards.core.t_cards$core78271(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cards.core.title_subs,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"title-tests","title-tests",1144197080)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"title-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,cards.core.title_subs)),"mimas");
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}

return result__38168__auto__;
}catch (e78274){var t__38205__auto__ = e78274;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}}),(function (){
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.title_subs))),String);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}

return result__38168__auto__;
}catch (e78275){var t__38205__auto__ = e78275;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.title_tests = (function cards$core$title_tests(){
return cljs.test.test_var.call(null,cards$core$title_tests.cljs$lang$var);
});
cards.core.title_tests.cljs$lang$test = (function (){
try{var values__38167__auto___78278 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,cards.core.title_subs)),"mimas");
var result__38168__auto___78279 = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto___78278);
if(cljs.core.truth_(result__38168__auto___78279)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto___78278),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto___78278)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}

}catch (e78276){var t__38205__auto___78280 = e78276;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"mimas",cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto___78280,new cljs.core.Keyword(null,"message","message",-406056002),"title is Mimas"], null));
}
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.title_subs))),String);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}

return result__38168__auto__;
}catch (e78277){var t__38205__auto__ = e78277;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"title-subs","title-subs",-877890307,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"title is a string"], null));
}});

cards.core.title_tests.cljs$lang$var = new cljs.core.Var(function(){return cards.core.title_tests;},new cljs.core.Symbol("cards.core","title-tests","cards.core/title-tests",41503061,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"title-tests","title-tests",-1510238689,null),"src/cards/core.cljs",21,1,108,108,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.title_tests)?cards.core.title_tests.cljs$lang$test:null)]));
cards.core.dropdown_subs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"dropdown","dropdown",1343185805)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dropdown",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78281 = (function (meta78282){
this.meta78282 = meta78282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78283,meta78282__$1){
var self__ = this;
var _78283__$1 = this;
return (new cards.core.t_cards$core78281(meta78282__$1));
});

cards.core.t_cards$core78281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78283){
var self__ = this;
var _78283__$1 = this;
return self__.meta78282;
});

cards.core.t_cards$core78281.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78281.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.dropdown,cljs.core.deref.call(null,cards.core.dropdown_subs)], null);
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78282","meta78282",-528109948,null)], null);
});

cards.core.t_cards$core78281.cljs$lang$type = true;

cards.core.t_cards$core78281.cljs$lang$ctorStr = "cards.core/t_cards$core78281";

cards.core.t_cards$core78281.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78281");
});

cards.core.__GT_t_cards$core78281 = (function cards$core$__GT_t_cards$core78281(meta78282){
return (new cards.core.t_cards$core78281(meta78282));
});

}

return (new cards.core.t_cards$core78281(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cards.core.dropdown_subs,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"dropdown-tests","dropdown-tests",1492023994)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"dropdown-tests",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.dropdown_subs))),cljs.core.PersistentVector);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options list is a vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options list is a vector"], null));
}

return result__38168__auto__;
}catch (e78284){var t__38205__auto__ = e78284;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options list is a vector"], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

cards.core.dropdown_tests = (function cards$core$dropdown_tests(){
return cljs.test.test_var.call(null,cards$core$dropdown_tests.cljs$lang$var);
});
cards.core.dropdown_tests.cljs$lang$test = (function (){
try{var values__38167__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.type.call(null,cljs.core.deref.call(null,cards.core.dropdown_subs))),cljs.core.PersistentVector);
var result__38168__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__38167__auto__);
if(cljs.core.truth_(result__38168__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__38167__auto__),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options list is a vector"], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__38167__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options list is a vector"], null));
}

return result__38168__auto__;
}catch (e78285){var t__38205__auto__ = e78285;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"PersistentVector","PersistentVector",-837570443,null),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dropdown-subs","dropdown-subs",39324018,null)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__38205__auto__,new cljs.core.Keyword(null,"message","message",-406056002),"dropdown options list is a vector"], null));
}});

cards.core.dropdown_tests.cljs$lang$var = new cljs.core.Var(function(){return cards.core.dropdown_tests;},new cljs.core.Symbol("cards.core","dropdown-tests","cards.core/dropdown-tests",287923931,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cards.core","cards.core",524633660,null),new cljs.core.Symbol(null,"dropdown-tests","dropdown-tests",-1162411775,null),"src/cards/core.cljs",24,1,123,123,cljs.core.List.EMPTY,null,(cljs.core.truth_(cards.core.dropdown_tests)?cards.core.dropdown_tests.cljs$lang$test:null)]));
if(typeof cards.core.form_data !== 'undefined'){
} else {
cards.core.form_data = cljs.core.atom.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null))));
}
if(typeof cards.core.dropdown_list !== 'undefined'){
} else {
cards.core.dropdown_list = cljs.core.atom.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null))));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"task-form","task-form",1902378589)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"task-form",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78286 = (function (meta78287){
this.meta78287 = meta78287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78288,meta78287__$1){
var self__ = this;
var _78288__$1 = this;
return (new cards.core.t_cards$core78286(meta78287__$1));
});

cards.core.t_cards$core78286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78288){
var self__ = this;
var _78288__$1 = this;
return self__.meta78287;
});

cards.core.t_cards$core78286.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78286.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_form,cljs.core.deref.call(null,data),cljs.core.deref.call(null,cards.core.dropdown_list)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78287","meta78287",743166689,null)], null);
});

cards.core.t_cards$core78286.cljs$lang$type = true;

cards.core.t_cards$core78286.cljs$lang$ctorStr = "cards.core/t_cards$core78286";

cards.core.t_cards$core78286.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78286");
});

cards.core.__GT_t_cards$core78286 = (function cards$core$__GT_t_cards$core78286(meta78287){
return (new cards.core.t_cards$core78286(meta78287));
});

}

return (new cards.core.t_cards$core78286(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cards.core.form_data,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"task-item","task-item",967723758)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"task-item",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78289 = (function (meta78290){
this.meta78290 = meta78290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78291,meta78290__$1){
var self__ = this;
var _78291__$1 = this;
return (new cards.core.t_cards$core78289(meta78290__$1));
});

cards.core.t_cards$core78289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78291){
var self__ = this;
var _78291__$1 = this;
return self__.meta78290;
});

cards.core.t_cards$core78289.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78289.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_item,cljs.core.deref.call(null,data)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78290","meta78290",237694194,null)], null);
});

cards.core.t_cards$core78289.cljs$lang$type = true;

cards.core.t_cards$core78289.cljs$lang$ctorStr = "cards.core/t_cards$core78289";

cards.core.t_cards$core78289.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78289");
});

cards.core.__GT_t_cards$core78289 = (function cards$core$__GT_t_cards$core78289(meta78290){
return (new cards.core.t_cards$core78289(meta78290));
});

}

return (new cards.core.t_cards$core78289(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"task-item-done","task-item-done",-1771860277)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"task-item-done",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78292 = (function (meta78293){
this.meta78293 = meta78293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78294,meta78293__$1){
var self__ = this;
var _78294__$1 = this;
return (new cards.core.t_cards$core78292(meta78293__$1));
});

cards.core.t_cards$core78292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78294){
var self__ = this;
var _78294__$1 = this;
return self__.meta78293;
});

cards.core.t_cards$core78292.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78292.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_item,cljs.core.deref.call(null,data)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78293","meta78293",1204590124,null)], null);
});

cards.core.t_cards$core78292.cljs$lang$type = true;

cards.core.t_cards$core78292.cljs$lang$ctorStr = "cards.core/t_cards$core78292";

cards.core.t_cards$core78292.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78292");
});

cards.core.__GT_t_cards$core78292 = (function cards$core$__GT_t_cards$core78292(meta78293){
return (new cards.core.t_cards$core78292(meta78293));
});

}

return (new cards.core.t_cards$core78292(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.second.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"task-item-without-project","task-item-without-project",-55616898)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"task-item-without-project",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78295 = (function (meta78296){
this.meta78296 = meta78296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78297,meta78296__$1){
var self__ = this;
var _78297__$1 = this;
return (new cards.core.t_cards$core78295(meta78296__$1));
});

cards.core.t_cards$core78295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78297){
var self__ = this;
var _78297__$1 = this;
return self__.meta78296;
});

cards.core.t_cards$core78295.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78295.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_item,cljs.core.deref.call(null,data)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78296","meta78296",-18827172,null)], null);
});

cards.core.t_cards$core78295.cljs$lang$type = true;

cards.core.t_cards$core78295.cljs$lang$ctorStr = "cards.core/t_cards$core78295";

cards.core.t_cards$core78295.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78295");
});

cards.core.__GT_t_cards$core78295 = (function cards$core$__GT_t_cards$core78295(meta78296){
return (new cards.core.t_cards$core78295(meta78296));
});

}

return (new cards.core.t_cards$core78295(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.dissoc.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null)))),new cljs.core.Keyword("task","project","task/project",1114584266)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"task-list","task-list",-975357719)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"task-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78298 = (function (meta78299){
this.meta78299 = meta78299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78300,meta78299__$1){
var self__ = this;
var _78300__$1 = this;
return (new cards.core.t_cards$core78298(meta78299__$1));
});

cards.core.t_cards$core78298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78300){
var self__ = this;
var _78300__$1 = this;
return self__.meta78299;
});

cards.core.t_cards$core78298.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78298.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_list,cljs.core.deref.call(null,data)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78299","meta78299",1169988857,null)], null);
});

cards.core.t_cards$core78298.cljs$lang$type = true;

cards.core.t_cards$core78298.cljs$lang$ctorStr = "cards.core/t_cards$core78298";

cards.core.t_cards$core78298.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78298");
});

cards.core.__GT_t_cards$core78298 = (function cards$core$__GT_t_cards$core78298(meta78299){
return (new cards.core.t_cards$core78298(meta78299));
});

}

return (new cards.core.t_cards$core78298(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null))),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"empty-task-list","empty-task-list",-47577817)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"empty-task-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78301 = (function (meta78302){
this.meta78302 = meta78302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78303,meta78302__$1){
var self__ = this;
var _78303__$1 = this;
return (new cards.core.t_cards$core78301(meta78302__$1));
});

cards.core.t_cards$core78301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78303){
var self__ = this;
var _78303__$1 = this;
return self__.meta78302;
});

cards.core.t_cards$core78301.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78301.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_list,cljs.core.deref.call(null,data)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78302","meta78302",-1512595918,null)], null);
});

cards.core.t_cards$core78301.cljs$lang$type = true;

cards.core.t_cards$core78301.cljs$lang$ctorStr = "cards.core/t_cards$core78301";

cards.core.t_cards$core78301.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78301");
});

cards.core.__GT_t_cards$core78301 = (function cards$core$__GT_t_cards$core78301(meta78302){
return (new cards.core.t_cards$core78301(meta78302));
});

}

return (new cards.core.t_cards$core78301(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.core","cards.core",-1115897867),new cljs.core.Keyword(null,"project-list","project-list",-939903870)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"project-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof cards.core.t_cards$core78304 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
cards.core.t_cards$core78304 = (function (meta78305){
this.meta78305 = meta78305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cards.core.t_cards$core78304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78306,meta78305__$1){
var self__ = this;
var _78306__$1 = this;
return (new cards.core.t_cards$core78304(meta78305__$1));
});

cards.core.t_cards$core78304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78306){
var self__ = this;
var _78306__$1 = this;
return self__.meta78305;
});

cards.core.t_cards$core78304.prototype.devcards$core$IDevcardOptions$ = true;

cards.core.t_cards$core78304.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40829__auto__,devcard_opts__40830__auto__){
var self__ = this;
var this__40829__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40830__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40848__auto__ = ((function (this__40829__auto____$1){
return (function (data,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_list,cljs.core.deref.call(null,data)], null);
});})(this__40829__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40848__auto__)){
return ((function (v__40848__auto__,this__40829__auto____$1){
return (function (data_atom__40849__auto__,owner__40850__auto__){
return reagent.core.as_element.call(null,v__40848__auto__.call(null,data_atom__40849__auto__,owner__40850__auto__));
});
;})(v__40848__auto__,this__40829__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40848__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40830__auto__))));
});

cards.core.t_cards$core78304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta78305","meta78305",488360899,null)], null);
});

cards.core.t_cards$core78304.cljs$lang$type = true;

cards.core.t_cards$core78304.cljs$lang$ctorStr = "cards.core/t_cards$core78304";

cards.core.t_cards$core78304.cljs$lang$ctorPrWriter = (function (this__36113__auto__,writer__36114__auto__,opt__36115__auto__){
return cljs.core._write.call(null,writer__36114__auto__,"cards.core/t_cards$core78304");
});

cards.core.__GT_t_cards$core78304 = (function cards$core$__GT_t_cards$core78304(meta78305){
return (new cards.core.t_cards$core78304(meta78305));
});

}

return (new cards.core.t_cards$core78304(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","list","project/list",952993036)], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=core.js.map?rel=1456512410929