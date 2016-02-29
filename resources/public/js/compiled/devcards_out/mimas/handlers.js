// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.handlers');
goog.require('cljs.core');
goog.require('mimas.db');
goog.require('re_frame.core');
goog.require('cljs.reader');
mimas.handlers.edn__GT_ls_BANG_ = (function mimas$handlers$edn__GT_ls_BANG_(edn){
return localStorage.setItem("mimas",[cljs.core.str(edn)].join(''));
});
mimas.handlers.ls__GT_edn_BANG_ = (function mimas$handlers$ls__GT_edn_BANG_(){
var ls_data = localStorage.getItem("mimas");
if(typeof ls_data === 'string'){
return cljs.reader.read_string.call(null,ls_data);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
mimas.handlers.persist_mw = (function mimas$handlers$persist_mw(handler){
return (function (db,v){
var state = handler.call(null,db,v);
mimas.handlers.edn__GT_ls_BANG_.call(null,state);

return state;
});
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
var ls_data = mimas.handlers.ls__GT_edn_BANG_.call(null);
return cljs.core.merge.call(null,mimas.db.initial_state,ls_data);
}));
mimas.handlers.form_update_value = (function mimas$handlers$form_update_value(db,p__51113){
var vec__51115 = p__51113;
var _ = cljs.core.nth.call(null,vec__51115,(0),null);
var k = cljs.core.nth.call(null,vec__51115,(1),null);
var v = cljs.core.nth.call(null,vec__51115,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),k], null),v);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("form","update-value","form/update-value",1973886989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),mimas.handlers.form_update_value);
mimas.handlers.create_new_task = (function mimas$handlers$create_new_task(title,project){
cljs.core.println.call(null,title,project);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword("task","title","task/title",628775788),title,new cljs.core.Keyword("task","project","task/project",1114584266),cljs.reader.read_string.call(null,project),new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null);
});
mimas.handlers.task_add = (function mimas$handlers$task_add(db,p__51116){
var vec__51120 = p__51116;
var _ = cljs.core.nth.call(null,vec__51120,(0),null);
var form = cljs.core.nth.call(null,vec__51120,(1),null);
var map__51121 = form;
var map__51121__$1 = ((((!((map__51121 == null)))?((((map__51121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51121):map__51121);
var title = cljs.core.get.call(null,map__51121__$1,new cljs.core.Keyword(null,"title","title",636505583));
var project = cljs.core.get.call(null,map__51121__$1,new cljs.core.Keyword(null,"project","project",1124394579));
return cljs.core.update.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,mimas.handlers.create_new_task.call(null,title,project));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","add","task/add",222087250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug,mimas.handlers.persist_mw], null),mimas.handlers.task_add);
mimas.handlers.task_edit = (function mimas$handlers$task_edit(db,p__51123){
var vec__51125 = p__51123;
var _ = cljs.core.nth.call(null,vec__51125,(0),null);
var task = cljs.core.nth.call(null,vec__51125,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","editing","task/editing",1370614286),task);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","edit","task/edit",-1637924395),mimas.handlers.task_edit);
mimas.handlers.update_task = (function mimas$handlers$update_task(new$){
return (function (old){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(new$))){
return cljs.core.merge.call(null,old,new$);
} else {
return old;
}
});
});
mimas.handlers.task_update = (function mimas$handlers$task_update(db,p__51126){
var vec__51128 = p__51126;
var _ = cljs.core.nth.call(null,vec__51128,(0),null);
var task = cljs.core.nth.call(null,vec__51128,(1),null);
var task_list = new cljs.core.Keyword("task","list","task/list",761502432).cljs$core$IFn$_invoke$arity$1(db);
var ___$1 = cljs.core.println.call(null,task_list);
var new_task_list = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,mimas.handlers.update_task.call(null,task),task_list));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),new_task_list);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","update","task/update",1049072973),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.handlers.persist_mw], null),mimas.handlers.task_update);
mimas.handlers.task_remove = (function mimas$handlers$task_remove(db,p__51130){
var vec__51132 = p__51130;
var _ = cljs.core.nth.call(null,vec__51132,(0),null);
var id = cljs.core.nth.call(null,vec__51132,(1),null);
var new_list = cljs.core.remove.call(null,((function (vec__51132,_,id){
return (function (p1__51129_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(p1__51129_SHARP_));
});})(vec__51132,_,id))
,new cljs.core.Keyword("task","list","task/list",761502432).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),new_list);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","remove","task/remove",-135120323),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.handlers.persist_mw], null),mimas.handlers.task_remove);
mimas.handlers.toggle_task_done = (function mimas$handlers$toggle_task_done(list_task,handler_task){
var handler_task_id = new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(handler_task);
var list_task_id = new cljs.core.Keyword("task","id","task/id",-1375673137).cljs$core$IFn$_invoke$arity$1(list_task);
if(cljs.core._EQ_.call(null,handler_task_id,list_task_id)){
return cljs.core.update.call(null,list_task,new cljs.core.Keyword("task","done?","task/done?",-1853689835),cljs.core.not);
} else {
return list_task;
}
});
mimas.handlers.toggle_done = (function mimas$handlers$toggle_done(db,p__51134){
var vec__51136 = p__51134;
var _ = cljs.core.nth.call(null,vec__51136,(0),null);
var task = cljs.core.nth.call(null,vec__51136,(1),null);
var new_task_list = cljs.core.mapv.call(null,((function (vec__51136,_,task){
return (function (p1__51133_SHARP_){
return mimas.handlers.toggle_task_done.call(null,p1__51133_SHARP_,task);
});})(vec__51136,_,task))
,new cljs.core.Keyword("task","list","task/list",761502432).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),new_task_list);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","toggle-done","task/toggle-done",-64706519),mimas.handlers.toggle_done);

//# sourceMappingURL=handlers.js.map?rel=1456712360081