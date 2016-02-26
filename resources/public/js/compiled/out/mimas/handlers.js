// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.handlers');
goog.require('cljs.core');
goog.require('mimas.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,mimas.db.state);
}));
mimas.handlers.form_update_value = (function mimas$handlers$form_update_value(db,p__82409){
var vec__82411 = p__82409;
var _ = cljs.core.nth.call(null,vec__82411,(0),null);
var k = cljs.core.nth.call(null,vec__82411,(1),null);
var v = cljs.core.nth.call(null,vec__82411,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),k], null),v);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("form","update-value","form/update-value",1973886989),mimas.handlers.form_update_value);
mimas.handlers.create_new_task = (function mimas$handlers$create_new_task(title,project){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword("task","title","task/title",628775788),title,new cljs.core.Keyword("task","project","task/project",1114584266),project,new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null);
});
mimas.handlers.clean_form = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("form","title","form/title",629162795),"",new cljs.core.Keyword("form","project","form/project",1114967447),""], null);
mimas.handlers.task_add = (function mimas$handlers$task_add(db,_){
var map__82414 = new cljs.core.Keyword("task","form","task/form",-1627647084).cljs$core$IFn$_invoke$arity$1(db);
var map__82414__$1 = ((((!((map__82414 == null)))?((((map__82414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82414):map__82414);
var title = cljs.core.get.call(null,map__82414__$1,new cljs.core.Keyword("form","title","form/title",629162795));
var project = cljs.core.get.call(null,map__82414__$1,new cljs.core.Keyword("form","project","form/project",1114967447));
return cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,mimas.handlers.create_new_task.call(null,title,project)),new cljs.core.Keyword("task","form","task/form",-1627647084),mimas.handlers.clean_form);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","add","task/add",222087250),mimas.handlers.task_add);
mimas.handlers.task_edit = (function mimas$handlers$task_edit(db,p__82416){
var vec__82418 = p__82416;
var _ = cljs.core.nth.call(null,vec__82418,(0),null);
var task = cljs.core.nth.call(null,vec__82418,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","editing","task/editing",1370614286),task);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","edit","task/edit",-1637924395),mimas.handlers.task_edit);
mimas.handlers.task_update = (function mimas$handlers$task_update(db,_){
var map__82421 = db;
var map__82421__$1 = ((((!((map__82421 == null)))?((((map__82421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__82421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82421):map__82421);
var editing = cljs.core.get.call(null,map__82421__$1,new cljs.core.Keyword("task","editing","task/editing",1370614286));
return cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.merge,editing),new cljs.core.Keyword("task","editing","task/editing",1370614286),null);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","update","task/update",1049072973),mimas.handlers.task_update);
mimas.handlers.task_remove = (function mimas$handlers$task_remove(db,p__82424){
var vec__82426 = p__82424;
var _ = cljs.core.nth.call(null,vec__82426,(0),null);
var id = cljs.core.nth.call(null,vec__82426,(1),null);
var new_list = cljs.core.remove.call(null,((function (vec__82426,_,id){
return (function (p1__82423_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(p1__82423_SHARP_));
});})(vec__82426,_,id))
,new cljs.core.Keyword("task","list","task/list",761502432).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),new_list);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","remove","task/remove",-135120323),mimas.handlers.task_remove);
mimas.handlers.toggle_task_done = (function mimas$handlers$toggle_task_done(list_task,handler_task){
var handler_task_id = new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(handler_task);
var list_task_id = new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(list_task);
if(cljs.core._EQ_.call(null,handler_task_id,list_task_id)){
return cljs.core.update.call(null,list_task,new cljs.core.Keyword("task","done?","task/done?",-1853689835),cljs.core.not);
} else {
return list_task;
}
});
mimas.handlers.toggle_done = (function mimas$handlers$toggle_done(db,p__82428){
var vec__82430 = p__82428;
var _ = cljs.core.nth.call(null,vec__82430,(0),null);
var task = cljs.core.nth.call(null,vec__82430,(1),null);
var new_task_list = cljs.core.mapv.call(null,((function (vec__82430,_,task){
return (function (p1__82427_SHARP_){
return mimas.handlers.toggle_task_done.call(null,p1__82427_SHARP_,task);
});})(vec__82430,_,task))
,new cljs.core.Keyword("task","list","task/list",761502432).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),new_task_list);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","toggle-done","task/toggle-done",-64706519),mimas.handlers.toggle_done);

//# sourceMappingURL=handlers.js.map?rel=1456514086380