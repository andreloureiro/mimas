// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('mimas.handlers');
goog.require('mimas.subs');
cljs.core.enable_console_print_BANG_.call(null);
mimas.core.title = (function mimas$core$title(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title__text","h1.title__text",-2140588089),t], null)], null);
});
mimas.core.task_form = (function mimas$core$task_form(){
var form_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null));
var item_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel","div.create-task-panel",-1931340864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.create-task-panel__input-container","form.create-task-panel__input-container",835235515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-container__input","input.input-container__input",172777226),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("form","title","form/title",629162795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_data)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task title",new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (form_data,item_list){
return (function (p1__84327_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","update-value","form/update-value",1973886989),new cljs.core.Keyword("form","title","form/title",629162795),p1__84327_SHARP_.target.value], null));
});})(form_data,item_list))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__dropdown-container","div.create-task-panel__dropdown-container",163773978),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.dropdown__list","select.dropdown__list",-1448976887),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("form","project","form/project",1114967447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,form_data)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (form_data,item_list){
return (function (p1__84328_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","update-value","form/update-value",1973886989),new cljs.core.Keyword("form","project","form/project",1114967447),p1__84328_SHARP_.target.value], null));
});})(form_data,item_list))
], null),(function (){var iter__36287__auto__ = ((function (form_data,item_list){
return (function mimas$core$task_form_$_iter__84333(s__84334){
return (new cljs.core.LazySeq(null,((function (form_data,item_list){
return (function (){
var s__84334__$1 = s__84334;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__84334__$1);
if(temp__4425__auto__){
var s__84334__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84334__$2)){
var c__36285__auto__ = cljs.core.chunk_first.call(null,s__84334__$2);
var size__36286__auto__ = cljs.core.count.call(null,c__36285__auto__);
var b__84336 = cljs.core.chunk_buffer.call(null,size__36286__auto__);
if((function (){var i__84335 = (0);
while(true){
if((i__84335 < size__36286__auto__)){
var item = cljs.core._nth.call(null,c__36285__auto__,i__84335);
cljs.core.chunk_append.call(null,b__84336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.list__item","option.list__item",-1652661503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),item], null));

var G__84337 = (i__84335 + (1));
i__84335 = G__84337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84336),mimas$core$task_form_$_iter__84333.call(null,cljs.core.chunk_rest.call(null,s__84334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84336),null);
}
} else {
var item = cljs.core.first.call(null,s__84334__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.list__item","option.list__item",-1652661503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),item], null),mimas$core$task_form_$_iter__84333.call(null,cljs.core.rest.call(null,s__84334__$2)));
}
} else {
return null;
}
break;
}
});})(form_data,item_list))
,null,null));
});})(form_data,item_list))
;
return iter__36287__auto__.call(null,cljs.core.deref.call(null,item_list));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__submit-container","div.create-task-panel__submit-container",-1685816093),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.submit-container__submit-btn","button.submit-container__submit-btn",-337235076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (form_data,item_list){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","add","task/add",222087250)], null));
});})(form_data,item_list))
], null),"create"], null)], null)], null);
});
mimas.core.task_item = (function mimas$core$task_item(p__84338){
var map__84341 = p__84338;
var map__84341__$1 = ((((!((map__84341 == null)))?((((map__84341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84341):map__84341);
var task = map__84341__$1;
var id = cljs.core.get.call(null,map__84341__$1,new cljs.core.Keyword("task","id","task/id",-1375673137));
var title = cljs.core.get.call(null,map__84341__$1,new cljs.core.Keyword("task","title","task/title",628775788));
var project = cljs.core.get.call(null,map__84341__$1,new cljs.core.Keyword("task","project","task/project",1114584266));
var done_QMARK_ = cljs.core.get.call(null,map__84341__$1,new cljs.core.Keyword("task","done?","task/done?",-1853689835));
var task_done = (cljs.core.truth_(done_QMARK_)?"task-item--done":"task-item--active");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.task-item","li.task-item",2058982411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"className","className",-1983287057),task_done], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item__first-column","div.task-item__first-column",-1288013377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.task-item__checkbox-done","input.task-item__checkbox-done",-1027219903),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task_done,map__84341,map__84341__$1,task,id,title,project,done_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","toggle-done","task/toggle-done",-64706519),task], null));
});})(task_done,map__84341,map__84341__$1,task,id,title,project,done_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item__second-column","div.task-item__second-column",1005703542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.task-item__title","p.task-item__title",1408891361),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item__third-column","div.task-item__third-column",121068025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.task-item__project","p.task-item__project",-787596618),project], null)], null)], null);
});
mimas.core.task_list = (function mimas$core$task_list(item_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.task-list","ul.task-list",-1059832605),((!(cljs.core.empty_QMARK_.call(null,item_list)))?cljs.core.map.call(null,mimas.core.task_item,cljs.core.sort_by.call(null,new cljs.core.Keyword("task","done?","task/done?",-1853689835),item_list)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You've no tasks!"], null))], null);
});
mimas.core.project_item = (function mimas$core$project_item(title,tasks){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.project-item","li.project-item",1147910511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.project-item__title","p.project-item__title",-1540386525),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.project-item__badge","p.project-item__badge",-1015380869),cljs.core.count.call(null,tasks)], null)], null);
});
mimas.core.project_list = (function mimas$core$project_list(){
var projects = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","list","project/list",952993036)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.project-list","ul.project-list",-375101576),(function (){var iter__36287__auto__ = ((function (projects){
return (function mimas$core$project_list_$_iter__84351(s__84352){
return (new cljs.core.LazySeq(null,((function (projects){
return (function (){
var s__84352__$1 = s__84352;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__84352__$1);
if(temp__4425__auto__){
var s__84352__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84352__$2)){
var c__36285__auto__ = cljs.core.chunk_first.call(null,s__84352__$2);
var size__36286__auto__ = cljs.core.count.call(null,c__36285__auto__);
var b__84354 = cljs.core.chunk_buffer.call(null,size__36286__auto__);
if((function (){var i__84353 = (0);
while(true){
if((i__84353 < size__36286__auto__)){
var vec__84357 = cljs.core._nth.call(null,c__36285__auto__,i__84353);
var project = cljs.core.nth.call(null,vec__84357,(0),null);
var tasks = cljs.core.nth.call(null,vec__84357,(1),null);
cljs.core.chunk_append.call(null,b__84354,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_item,project,tasks], null));

var G__84359 = (i__84353 + (1));
i__84353 = G__84359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84354),mimas$core$project_list_$_iter__84351.call(null,cljs.core.chunk_rest.call(null,s__84352__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84354),null);
}
} else {
var vec__84358 = cljs.core.first.call(null,s__84352__$2);
var project = cljs.core.nth.call(null,vec__84358,(0),null);
var tasks = cljs.core.nth.call(null,vec__84358,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_item,project,tasks], null),mimas$core$project_list_$_iter__84351.call(null,cljs.core.rest.call(null,s__84352__$2)));
}
} else {
return null;
}
break;
}
});})(projects))
,null,null));
});})(projects))
;
return iter__36287__auto__.call(null,cljs.core.deref.call(null,projects));
})()], null);
});
mimas.core.mimas = (function mimas$core$mimas(){
var title_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null));
var tasks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null));
var completed_tasks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","total-completed","task/total-completed",1563372826)], null));
var incompleted_tasks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","total-incompleted","task/total-incompleted",861941980)], null));
return ((function (title_text,tasks,completed_tasks,incompleted_tasks){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Total completed: "),cljs.core.str(cljs.core.deref.call(null,completed_tasks))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str("Total incompleted: "),cljs.core.str(cljs.core.deref.call(null,incompleted_tasks))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_list], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.title,cljs.core.deref.call(null,title_text)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_form], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_list,cljs.core.deref.call(null,tasks)], null)], null)], null)], null);
});
;})(title_text,tasks,completed_tasks,incompleted_tasks))
});
mimas.core.init = (function mimas$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.mimas], null),goog.dom.getElement("app"));
});
mimas.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1456515282548