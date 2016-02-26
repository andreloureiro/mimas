// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mimas.db');
mimas.subs.simple_sub = (function mimas$subs$simple_sub(db,p__84313){
var vec__84315 = p__84313;
var k = cljs.core.nth.call(null,vec__84315,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__84315,k){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),k);
});})(vec__84315,k))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("app","title","app/title",636408784),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","list","task/list",761502432),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","form","task/form",-1627647084),mimas.subs.simple_sub);
mimas.subs.project_list = (function mimas$subs$project_list(db){
var map__84318 = cljs.core.deref.call(null,db);
var map__84318__$1 = ((((!((map__84318 == null)))?((((map__84318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84318):map__84318);
var list = cljs.core.get.call(null,map__84318__$1,new cljs.core.Keyword("task","list","task/list",761502432));
return reagent.ratom.make_reaction.call(null,((function (map__84318,map__84318__$1,list){
return (function (){
return cljs.core.group_by.call(null,new cljs.core.Keyword("task","project","task/project",1114584266),list);
});})(map__84318,map__84318__$1,list))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("project","list","project/list",952993036),mimas.subs.project_list);
mimas.subs.dropdown_list = (function mimas$subs$dropdown_list(db){
var map__84322 = cljs.core.deref.call(null,db);
var map__84322__$1 = ((((!((map__84322 == null)))?((((map__84322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84322):map__84322);
var list = cljs.core.get.call(null,map__84322__$1,new cljs.core.Keyword("task","list","task/list",761502432));
return reagent.ratom.make_reaction.call(null,((function (map__84322,map__84322__$1,list){
return (function (){
return cljs.core.keys.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword("task","project","task/project",1114584266),list));
});})(map__84322,map__84322__$1,list))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),mimas.subs.dropdown_list);
mimas.subs.total_completed = (function mimas$subs$total_completed(db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword("task","done?","task/done?",-1853689835),cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("task","list","task/list",761502432))));
}));
});
mimas.subs.total_incompleted = (function mimas$subs$total_incompleted(db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__84324_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword("task","done?","task/done?",-1853689835).cljs$core$IFn$_invoke$arity$1(p1__84324_SHARP_));
}),cljs.core.get.call(null,cljs.core.deref.call(null,db),new cljs.core.Keyword("task","list","task/list",761502432))));
}));
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","total-completed","task/total-completed",1563372826),mimas.subs.total_completed);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","total-incompleted","task/total-incompleted",861941980),mimas.subs.total_incompleted);
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"get-db","get-db",-630166596),(function (db,_){
return cljs.core.deref.call(null,db);
}));

//# sourceMappingURL=subs.js.map?rel=1456515282486