// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.db');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('schema.core');
/**
 * 
 */
mimas.db.Task = cljs.core.vary_meta.call(null,schema.core.schema_with_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),schema.core.Num,new cljs.core.Keyword("task","title","task/title",628775788),schema.core.Str,new cljs.core.Keyword("task","project","task/project",1114584266),schema.core.Str,new cljs.core.Keyword("task","done?","task/done?",-1853689835),schema.core.Bool], null),new cljs.core.Symbol(null,"Task","Task",1230563165,null)),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mimas.db","mimas.db",1503117739,null));
/**
 * 
 */
mimas.db.Project = cljs.core.vary_meta.call(null,schema.core.schema_with_name.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("project","id","project/id",-791740645),schema.core.Num,new cljs.core.Keyword("project","title","project/title",845153480),schema.core.Str], null),new cljs.core.Symbol(null,"Project","Project",-587067066,null)),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mimas.db","mimas.db",1503117739,null));
var output_schema__40735__auto___78314 = schema.core.Any;
mimas.db.DropdownItem = schema.core.validate.call(null,output_schema__40735__auto___78314,schema.core.Str);
/**
 * 
 */
mimas.db.TaskForm = cljs.core.vary_meta.call(null,schema.core.schema_with_name.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("form","title","form/title",629162795),schema.core.Str,new cljs.core.Keyword("form","project","form/project",1114967447),schema.core.Str], null),new cljs.core.Symbol(null,"TaskForm","TaskForm",2145176417,null)),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mimas.db","mimas.db",1503117739,null));
/**
 * 
 */
mimas.db.State = cljs.core.vary_meta.call(null,schema.core.schema_with_name.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app","title","app/title",636408784),schema.core.Str,new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.db.DropdownItem], null),new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.db.Task], null),new cljs.core.Keyword("task","form","task/form",-1627647084),mimas.db.TaskForm,new cljs.core.Keyword("task","editing","task/editing",1370614286),schema.core.maybe.call(null,mimas.db.Task),new cljs.core.Keyword("project","list","project/list",952993036),cljs.core.PersistentArrayMap.fromArray([schema.core.Str,mimas.db.Project], true, false)], null),new cljs.core.Symbol(null,"State","State",1487565184,null)),cljs.core.assoc,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"mimas.db","mimas.db",1503117739,null));
mimas.db.state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app","title","app/title",636408784),"mimas",new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("task","list","task/list",761502432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword("task","title","task/title",628775788),"task#1",new cljs.core.Keyword("task","project","task/project",1114584266),"project#1",new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword("task","title","task/title",628775788),"task#2",new cljs.core.Keyword("task","project","task/project",1114584266),"project#2",new cljs.core.Keyword("task","done?","task/done?",-1853689835),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("task","id","task/id",-1375673137),cljs.core.rand_int.call(null,(100)),new cljs.core.Keyword("task","title","task/title",628775788),"task#3",new cljs.core.Keyword("task","project","task/project",1114584266),"project#1",new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null)], null),new cljs.core.Keyword("task","form","task/form",-1627647084),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("form","title","form/title",629162795),"",new cljs.core.Keyword("form","project","form/project",1114967447),""], null),new cljs.core.Keyword("task","editing","task/editing",1370614286),null,new cljs.core.Keyword("project","list","project/list",952993036),cljs.core.PersistentArrayMap.EMPTY], null);
mimas.db.valid_QMARK_ = (function mimas$db$valid_QMARK_(db){
return schema.core.validate.call(null,mimas.db.State,db);
});

//# sourceMappingURL=db.js.map?rel=1456512466314