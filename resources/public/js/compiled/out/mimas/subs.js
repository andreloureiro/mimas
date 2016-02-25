// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mimas.db');
re_frame.core.register_sub.call(null,new cljs.core.Keyword("app","title","app/title",636408784),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("app","title","app/title",636408784));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","list","task/list",761502432),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("task","list","task/list",761502432));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","form","task/form",-1627647084),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("task","form","task/form",-1627647084));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1456365393778