// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.handlers');
goog.require('cljs.core');
goog.require('mimas.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,mimas.db.state);
}));
mimas.handlers.form_update_value = (function mimas$handlers$form_update_value(db,p__57112){
var vec__57114 = p__57112;
var _ = cljs.core.nth.call(null,vec__57114,(0),null);
var k = cljs.core.nth.call(null,vec__57114,(1),null);
var v = cljs.core.nth.call(null,vec__57114,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084),k], null),v);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("form","update-value","form/update-value",1973886989),mimas.handlers.form_update_value);
mimas.handlers.task_add = (function mimas$handlers$task_add(db,p__57115){
var vec__57117 = p__57115;
var _ = cljs.core.nth.call(null,vec__57117,(0),null);
var task = cljs.core.nth.call(null,vec__57117,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword("task","list","task/list",761502432),cljs.core.conj,task);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword("task","add","task/add",222087250),mimas.handlers.task_add);
mimas.handlers.task_edit = (function mimas$handlers$task_edit(db,p__57118){
var vec__57120 = p__57118;
var _ = cljs.core.nth.call(null,vec__57120,(0),null);
var task = cljs.core.nth.call(null,vec__57120,(1),null);
return null;
});

//# sourceMappingURL=handlers.js.map?rel=1456429224153