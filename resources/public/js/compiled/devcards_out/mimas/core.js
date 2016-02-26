// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('mimas.handlers');
goog.require('mimas.subs');
mimas.core.title = (function mimas$core$title(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title__text","h1.title__text",-2140588089),t], null)], null);
});
mimas.core.select_dd_item = (function mimas$core$select_dd_item(local,item){
cljs.core.swap_BANG_.call(null,local,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),item,new cljs.core.Keyword(null,"open?","open?",1238443125),false);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","update-value","form/update-value",1973886989),new cljs.core.Keyword("form","project","form/project",1114967447),item], null));
});
mimas.core.active_dd_item = (function mimas$core$active_dd_item(item_id,active_id){
if(cljs.core._EQ_.call(null,item_id,active_id)){
return "list__item--active";
} else {
return "";
}
});
mimas.core.close_dd_list = (function mimas$core$close_dd_list(local){
return cljs.core.swap_BANG_.call(null,local,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});
mimas.core.dropdown = (function mimas$core$dropdown(item_list){
var local = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"active","active",1895962068),null], null));
return ((function (local){
return (function (item_list__$1){
var map__78138 = cljs.core.deref.call(null,local);
var map__78138__$1 = ((((!((map__78138 == null)))?((((map__78138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78138):map__78138);
var open_QMARK_ = cljs.core.get.call(null,map__78138__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var active = cljs.core.get.call(null,map__78138__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.dropdown__list","select.dropdown__list",-1448976887),(function (){var iter__36287__auto__ = ((function (map__78138,map__78138__$1,open_QMARK_,active,local){
return (function mimas$core$dropdown_$_iter__78140(s__78141){
return (new cljs.core.LazySeq(null,((function (map__78138,map__78138__$1,open_QMARK_,active,local){
return (function (){
var s__78141__$1 = s__78141;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78141__$1);
if(temp__4425__auto__){
var s__78141__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78141__$2)){
var c__36285__auto__ = cljs.core.chunk_first.call(null,s__78141__$2);
var size__36286__auto__ = cljs.core.count.call(null,c__36285__auto__);
var b__78143 = cljs.core.chunk_buffer.call(null,size__36286__auto__);
if((function (){var i__78142 = (0);
while(true){
if((i__78142 < size__36286__auto__)){
var item = cljs.core._nth.call(null,c__36285__auto__,i__78142);
cljs.core.chunk_append.call(null,b__78143,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.list__item","option.list__item",-1652661503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),item], null));

var G__78144 = (i__78142 + (1));
i__78142 = G__78144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78143),mimas$core$dropdown_$_iter__78140.call(null,cljs.core.chunk_rest.call(null,s__78141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78143),null);
}
} else {
var item = cljs.core.first.call(null,s__78141__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.list__item","option.list__item",-1652661503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),item], null),mimas$core$dropdown_$_iter__78140.call(null,cljs.core.rest.call(null,s__78141__$2)));
}
} else {
return null;
}
break;
}
});})(map__78138,map__78138__$1,open_QMARK_,active,local))
,null,null));
});})(map__78138,map__78138__$1,open_QMARK_,active,local))
;
return iter__36287__auto__.call(null,item_list__$1);
})()], null)], null);
});
;})(local))
});
mimas.core.task_form = (function mimas$core$task_form(data,item_list){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel","div.create-task-panel",-1931340864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.create-task-panel__input-container","form.create-task-panel__input-container",835235515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-container__input","input.input-container__input",172777226),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Task title",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78145_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","update-value","form/update-value",1973886989),new cljs.core.Keyword("form","title","form/title",629162795),p1__78145_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__dropdown-container","div.create-task-panel__dropdown-container",163773978),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.dropdown__list","select.dropdown__list",-1448976887),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__78146_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("form","update-value","form/update-value",1973886989),new cljs.core.Keyword("form","project","form/project",1114967447),p1__78146_SHARP_.target.value], null));
})], null),(function (){var iter__36287__auto__ = (function mimas$core$task_form_$_iter__78151(s__78152){
return (new cljs.core.LazySeq(null,(function (){
var s__78152__$1 = s__78152;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78152__$1);
if(temp__4425__auto__){
var s__78152__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78152__$2)){
var c__36285__auto__ = cljs.core.chunk_first.call(null,s__78152__$2);
var size__36286__auto__ = cljs.core.count.call(null,c__36285__auto__);
var b__78154 = cljs.core.chunk_buffer.call(null,size__36286__auto__);
if((function (){var i__78153 = (0);
while(true){
if((i__78153 < size__36286__auto__)){
var item = cljs.core._nth.call(null,c__36285__auto__,i__78153);
cljs.core.chunk_append.call(null,b__78154,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.list__item","option.list__item",-1652661503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),item], null));

var G__78155 = (i__78153 + (1));
i__78153 = G__78155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78154),mimas$core$task_form_$_iter__78151.call(null,cljs.core.chunk_rest.call(null,s__78152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78154),null);
}
} else {
var item = cljs.core.first.call(null,s__78152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option.list__item","option.list__item",-1652661503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),item], null),mimas$core$task_form_$_iter__78151.call(null,cljs.core.rest.call(null,s__78152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36287__auto__.call(null,item_list);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__submit-container","div.create-task-panel__submit-container",-1685816093),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.submit-container__submit-btn","button.submit-container__submit-btn",-337235076),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","add","task/add",222087250)], null));
})], null),"create"], null)], null)], null);
});
mimas.core.task_item = (function mimas$core$task_item(p__78156){
var map__78159 = p__78156;
var map__78159__$1 = ((((!((map__78159 == null)))?((((map__78159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__78159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78159):map__78159);
var task = map__78159__$1;
var id = cljs.core.get.call(null,map__78159__$1,new cljs.core.Keyword("task","id","task/id",-1375673137));
var title = cljs.core.get.call(null,map__78159__$1,new cljs.core.Keyword("task","title","task/title",628775788));
var project = cljs.core.get.call(null,map__78159__$1,new cljs.core.Keyword("task","project","task/project",1114584266));
var done_QMARK_ = cljs.core.get.call(null,map__78159__$1,new cljs.core.Keyword("task","done?","task/done?",-1853689835));
var task_done = (cljs.core.truth_(done_QMARK_)?"task-item--done":"task-item--active");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.task-item","li.task-item",2058982411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"className","className",-1983287057),task_done], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item__first-column","div.task-item__first-column",-1288013377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.task-item__checkbox-done","input.task-item__checkbox-done",-1027219903),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (task_done,map__78159,map__78159__$1,task,id,title,project,done_QMARK_){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","toggle-done","task/toggle-done",-64706519),task], null));
});})(task_done,map__78159,map__78159__$1,task,id,title,project,done_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item__second-column","div.task-item__second-column",1005703542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.task-item__title","p.task-item__title",1408891361),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-item__third-column","div.task-item__third-column",121068025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.task-item__project","p.task-item__project",-787596618),project], null)], null)], null);
});
mimas.core.task_list = (function mimas$core$task_list(item_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.task-list","ul.task-list",-1059832605),((!(cljs.core.empty_QMARK_.call(null,item_list)))?cljs.core.map.call(null,mimas.core.task_item,cljs.core.sort_by.call(null,new cljs.core.Keyword("task","done?","task/done?",-1853689835),item_list)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You've no tasks!"], null))], null);
});
mimas.core.project_item = (function mimas$core$project_item(title,tasks){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.project-item","li.project-item",1147910511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.project-item__title","p.project-item__title",-1540386525),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.project-item__badge","p.project-item__badge",-1015380869),cljs.core.count.call(null,tasks)], null)], null);
});
mimas.core.project_list = (function mimas$core$project_list(projects){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.project-list","ul.project-list",-375101576),(function (){var iter__36287__auto__ = (function mimas$core$project_list_$_iter__78169(s__78170){
return (new cljs.core.LazySeq(null,(function (){
var s__78170__$1 = s__78170;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__78170__$1);
if(temp__4425__auto__){
var s__78170__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__78170__$2)){
var c__36285__auto__ = cljs.core.chunk_first.call(null,s__78170__$2);
var size__36286__auto__ = cljs.core.count.call(null,c__36285__auto__);
var b__78172 = cljs.core.chunk_buffer.call(null,size__36286__auto__);
if((function (){var i__78171 = (0);
while(true){
if((i__78171 < size__36286__auto__)){
var vec__78175 = cljs.core._nth.call(null,c__36285__auto__,i__78171);
var project = cljs.core.nth.call(null,vec__78175,(0),null);
var tasks = cljs.core.nth.call(null,vec__78175,(1),null);
cljs.core.chunk_append.call(null,b__78172,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_item,project,tasks], null));

var G__78177 = (i__78171 + (1));
i__78171 = G__78177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78172),mimas$core$project_list_$_iter__78169.call(null,cljs.core.chunk_rest.call(null,s__78170__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__78172),null);
}
} else {
var vec__78176 = cljs.core.first.call(null,s__78170__$2);
var project = cljs.core.nth.call(null,vec__78176,(0),null);
var tasks = cljs.core.nth.call(null,vec__78176,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_item,project,tasks], null),mimas$core$project_list_$_iter__78169.call(null,cljs.core.rest.call(null,s__78170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36287__auto__.call(null,projects);
})()], null);
});
mimas.core.mimas = (function mimas$core$mimas(){
var title_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null));
var tasks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null));
var form_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null));
var dropdown_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null));
var projects = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("project","list","project/list",952993036)], null));
return ((function (title_text,tasks,form_data,dropdown_list,projects){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.title,cljs.core.deref.call(null,title_text)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_form,cljs.core.deref.call(null,form_data),cljs.core.deref.call(null,dropdown_list)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.project_list,cljs.core.deref.call(null,projects)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_list,cljs.core.deref.call(null,tasks)], null)], null)], null)], null);
});
;})(title_text,tasks,form_data,dropdown_list,projects))
});
mimas.core.init = (function mimas$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.mimas], null),goog.dom.getElement("app"));
});
mimas.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1456512410390