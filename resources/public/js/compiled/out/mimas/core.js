// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.core');
goog.require('cljs.core');
goog.require('mimas.components.util');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('mimas.subs');
goog.require('mimas.projects.ui');
goog.require('mimas.tasks.ui');
goog.require('mimas.handlers');
goog.require('re_frame.core');
goog.require('mimas.routes');
goog.require('mimas.projects.handlers');
cljs.core.enable_console_print_BANG_.call(null);
mimas.core.title = (function mimas$core$title(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title__text","h1.title__text",-2140588089),t], null)], null);
});
mimas.core.user_header = (function mimas$core$user_header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-header","div.user-header",1555237743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-header__avatar-container","div.user-header__avatar-container",913605200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.avatar-container__avatar","img.avatar-container__avatar",-1789309218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://randomuser.me/api/portraits/med/men/0.jpg",new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-header__user-info","div.user-header__user-info",-1903558634),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.user-info__name","p.user-info__name",1995877060),"Landon"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.user-info__email","p.user-info__email",294857433),"landon.hunter34@gmail.com"], null)], null)], null);
});
mimas.core.sidebar = (function mimas$core$sidebar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.user_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.projects.ui.project_list], null)], null);
});
mimas.core.mimas = (function mimas$core$mimas(){
var title_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784)], null));
var completed_tasks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","total-completed","task/total-completed",1563372826)], null));
var incompleted_tasks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","total-incompleted","task/total-incompleted",861941980)], null));
return ((function (title_text,completed_tasks,incompleted_tasks){
return (function (){
var height = window.innerHeight;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.sidebar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(3)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.tasks.ui.task_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.tasks.ui.task_list], null)], null)], null);
});
;})(title_text,completed_tasks,incompleted_tasks))
});
mimas.core.init = (function mimas$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.mimas], null),goog.dom.getElement("app"));
});
mimas.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1456971027958