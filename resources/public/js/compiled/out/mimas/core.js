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
mimas.core.dropdown = (function mimas$core$dropdown(item_list){
var local = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"active","active",1895962068),null], null));
return ((function (local){
return (function (item_list__$1){
var map__57336 = cljs.core.deref.call(null,local);
var map__57336__$1 = ((((!((map__57336 == null)))?((((map__57336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57336):map__57336);
var open_QMARK_ = cljs.core.get.call(null,map__57336__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var active = cljs.core.get.call(null,map__57336__$1,new cljs.core.Keyword(null,"active","active",1895962068));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown","div.dropdown",1029783296),((cljs.core.not.call(null,open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown__active","div.dropdown__active",1896275783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57336,map__57336__$1,open_QMARK_,active,local){
return (function (){
return cljs.core.swap_BANG_.call(null,local,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(map__57336,map__57336__$1,open_QMARK_,active,local))
], null),(function (){var or__35514__auto__ = new cljs.core.Keyword("item","label","item/label",1746690887).cljs$core$IFn$_invoke$arity$1(active);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return "none";
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown__list","div.dropdown__list",1053418201),(function (){var iter__36286__auto__ = ((function (map__57336,map__57336__$1,open_QMARK_,active,local){
return (function mimas$core$dropdown_$_iter__57338(s__57339){
return (new cljs.core.LazySeq(null,((function (map__57336,map__57336__$1,open_QMARK_,active,local){
return (function (){
var s__57339__$1 = s__57339;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__57339__$1);
if(temp__4425__auto__){
var s__57339__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57339__$2)){
var c__36284__auto__ = cljs.core.chunk_first.call(null,s__57339__$2);
var size__36285__auto__ = cljs.core.count.call(null,c__36284__auto__);
var b__57341 = cljs.core.chunk_buffer.call(null,size__36285__auto__);
if((function (){var i__57340 = (0);
while(true){
if((i__57340 < size__36285__auto__)){
var map__57346 = cljs.core._nth.call(null,c__36284__auto__,i__57340);
var map__57346__$1 = ((((!((map__57346 == null)))?((((map__57346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57346):map__57346);
var item = map__57346__$1;
var id = cljs.core.get.call(null,map__57346__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
var label = cljs.core.get.call(null,map__57346__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
cljs.core.chunk_append.call(null,b__57341,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list__item","div.list__item",1426140733),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__57340,map__57346,map__57346__$1,item,id,label,c__36284__auto__,size__36285__auto__,b__57341,s__57339__$2,temp__4425__auto__,map__57336,map__57336__$1,open_QMARK_,active,local){
return (function (){
return cljs.core.swap_BANG_.call(null,local,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),item,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});})(i__57340,map__57346,map__57346__$1,item,id,label,c__36284__auto__,size__36285__auto__,b__57341,s__57339__$2,temp__4425__auto__,map__57336,map__57336__$1,open_QMARK_,active,local))
], null),label], null));

var G__57350 = (i__57340 + (1));
i__57340 = G__57350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57341),mimas$core$dropdown_$_iter__57338.call(null,cljs.core.chunk_rest.call(null,s__57339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57341),null);
}
} else {
var map__57348 = cljs.core.first.call(null,s__57339__$2);
var map__57348__$1 = ((((!((map__57348 == null)))?((((map__57348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57348):map__57348);
var item = map__57348__$1;
var id = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword("item","id","item/id",-1385287903));
var label = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword("item","label","item/label",1746690887));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list__item","div.list__item",1426140733),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__57348,map__57348__$1,item,id,label,s__57339__$2,temp__4425__auto__,map__57336,map__57336__$1,open_QMARK_,active,local){
return (function (){
return cljs.core.swap_BANG_.call(null,local,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),item,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});})(map__57348,map__57348__$1,item,id,label,s__57339__$2,temp__4425__auto__,map__57336,map__57336__$1,open_QMARK_,active,local))
], null),label], null),mimas$core$dropdown_$_iter__57338.call(null,cljs.core.rest.call(null,s__57339__$2)));
}
} else {
return null;
}
break;
}
});})(map__57336,map__57336__$1,open_QMARK_,active,local))
,null,null));
});})(map__57336,map__57336__$1,open_QMARK_,active,local))
;
return iter__36286__auto__.call(null,item_list__$1);
})()], null))], null);
});
;})(local))
});
mimas.core.task_form = (function mimas$core$task_form(data,item_list){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel","div.create-task-panel",-1931340864),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__input-container","div.create-task-panel__input-container",1895325008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input-container__input","input.input-container__input",172777226),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__dropdown-container","div.create-task-panel__dropdown-container",163773978),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.dropdown,item_list], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-task-panel__submit-container","div.create-task-panel__submit-container",-1685816093),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.submit-container__submit-btn","button.submit-container__submit-btn",-337235076),"create"], null)], null)], null);
});
mimas.core.task_item = (function mimas$core$task_item(p__57351){
var map__57354 = p__57351;
var map__57354__$1 = ((((!((map__57354 == null)))?((((map__57354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57354):map__57354);
var id = cljs.core.get.call(null,map__57354__$1,new cljs.core.Keyword("task","id","task/id",-1375673137));
var title = cljs.core.get.call(null,map__57354__$1,new cljs.core.Keyword("task","title","task/title",628775788));
var project = cljs.core.get.call(null,map__57354__$1,new cljs.core.Keyword("task","project","task/project",1114584266));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.task-item","li.task-item",2058982411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.task-item__done-checkbox","input.task-item__done-checkbox",1404529081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.task-item__title","p.task-item__title",1408891361),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.task-item__project","small.task-item__project",1553522305),project], null)], null);
});
mimas.core.task_list = (function mimas$core$task_list(item_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.task-list","ul.task-list",-1059832605),cljs.core.map.call(null,mimas.core.task_item,item_list)], null);
});
mimas.core.mimas = (function mimas$core$mimas(){
var title_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null));
var item_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","list","task/list",761502432)], null));
var form_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","form","task/form",-1627647084)], null));
var dropdown_list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540)], null));
return ((function (title_text,item_list,form_data,dropdown_list){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.title,cljs.core.deref.call(null,title_text)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_form,cljs.core.deref.call(null,form_data),cljs.core.deref.call(null,dropdown_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.task_list,cljs.core.deref.call(null,item_list)], null)], null);
});
;})(title_text,item_list,form_data,dropdown_list))
});
mimas.core.init = (function mimas$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.mimas], null),goog.dom.getElement("app"));
});
mimas.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1456366127135