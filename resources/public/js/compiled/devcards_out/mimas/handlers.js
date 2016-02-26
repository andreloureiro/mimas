// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.handlers');
goog.require('cljs.core');
goog.require('mimas.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,mimas.db.state);
}));
mimas.handlers.form_update_value = (function mimas$handlers$form_update_value(db,p__46220){
var vec__46222 = p__46220;
var _ = cljs.core.nth.call(null,vec__46222,(0),null);
var k = cljs.core.nth.call(null,vec__46222,(1),null);
var v = cljs.core.nth.call(null,vec__46222,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),k], null),v);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("form","update-value","form/update-value",1973886989),mimas.handlers.form_update_value);
mimas.handlers.task_add = (function mimas$handlers$task_add(db,p__46223){
var vec__46225 = p__46223;
var _ = cljs.core.nth.call(null,vec__46225,(0),null);
var task = cljs.core.nth.call(null,vec__46225,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,task);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","add","task/add",222087250),mimas.handlers.task_add);
mimas.handlers.task_edit = (function mimas$handlers$task_edit(db,p__46226){
var vec__46228 = p__46226;
var _ = cljs.core.nth.call(null,vec__46228,(0),null);
var task = cljs.core.nth.call(null,vec__46228,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","editing","task/editing",1370614286),task);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","edit","task/edit",-1637924395),mimas.handlers.task_edit);
mimas.handlers.task_update = (function mimas$handlers$task_update(db,_){
var map__46231 = db;
var map__46231__$1 = ((((!((map__46231 == null)))?((((map__46231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46231):map__46231);
var editing = cljs.core.get.call(null,map__46231__$1,new cljs.core.Keyword("task","editing","task/editing",1370614286));
return cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.merge,editing),new cljs.core.Keyword("task","editing","task/editing",1370614286),null);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","update","task/update",1049072973),mimas.handlers.task_update);
mimas.handlers.task_remove = (function mimas$handlers$task_remove(db,p__46234){
var vec__46236 = p__46234;
var _ = cljs.core.nth.call(null,vec__46236,(0),null);
var id = cljs.core.nth.call(null,vec__46236,(1),null);
var new_list = cljs.core.remove.call(null,((function (vec__46236,_,id){
return (function (p1__46233_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(p1__46233_SHARP_));
});})(vec__46236,_,id))
,new cljs.core.Keyword("task","list","task/list",761502432).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),new_list);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","remove","task/remove",-135120323),mimas.handlers.task_remove);

//# sourceMappingURL=handlers.js.map?rel=1456452858881