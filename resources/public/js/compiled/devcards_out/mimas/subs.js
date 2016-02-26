// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mimas.db');
mimas.subs.simple_sub = (function mimas$subs$simple_sub(db,p__73425){
var vec__73427 = p__73425;
var k = cljs.core.nth.call(null,vec__73427,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__73427,k){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),k);
});})(vec__73427,k))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("app","title","app/title",636408784),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","list","task/list",761502432),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","form","task/form",-1627647084),mimas.subs.simple_sub);
mimas.subs.project_list = (function mimas$subs$project_list(db){
var map__73430 = cljs.core.deref.call(null,db);
var map__73430__$1 = ((((!((map__73430 == null)))?((((map__73430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73430):map__73430);
var list = cljs.core.get.call(null,map__73430__$1,new cljs.core.Keyword("task","list","task/list",761502432));
return reagent.ratom.make_reaction.call(null,((function (map__73430,map__73430__$1,list){
return (function (){
return cljs.core.group_by.call(null,new cljs.core.Keyword("task","project","task/project",1114584266),list);
});})(map__73430,map__73430__$1,list))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("project","list","project/list",952993036),mimas.subs.project_list);
mimas.subs.dropdown_list = (function mimas$subs$dropdown_list(db){
var map__73434 = cljs.core.deref.call(null,db);
var map__73434__$1 = ((((!((map__73434 == null)))?((((map__73434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73434):map__73434);
var list = cljs.core.get.call(null,map__73434__$1,new cljs.core.Keyword("task","list","task/list",761502432));
return reagent.ratom.make_reaction.call(null,((function (map__73434,map__73434__$1,list){
return (function (){
return cljs.core.keys.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword("task","project","task/project",1114584266),list));
});})(map__73434,map__73434__$1,list))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),mimas.subs.dropdown_list);
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-db","get-db",-630166596),(function (db,_){
return cljs.core.deref.call(null,db);
}));

//# sourceMappingURL=subs.js.map?rel=1456510825343