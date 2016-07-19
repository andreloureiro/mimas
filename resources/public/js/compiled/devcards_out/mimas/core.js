// Compiled by ClojureScript 1.7.228 {}
goog.provide('mimas.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('mimas.subs');
goog.require('cljsjs.react');
goog.require('mimas.views');
goog.require('devtools.core');
goog.require('cljsjs.react_motion');
goog.require('mimas.handlers');
goog.require('re_frame.core');
goog.require('mimas.routes');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.install_BANG_.call(null);
mimas.core.title = (function mimas$core$title(t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title__text","h1.title__text",-2140588089),t], null)], null);
});
mimas.core.current_view = (function mimas$core$current_view(){
var route = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","active-route","app/active-route",-1914696978)], null));
return ((function (route){
return (function (){
var map__46352 = cljs.core.deref.call(null,route);
var map__46352__$1 = ((((!((map__46352 == null)))?((((map__46352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46352):map__46352);
var page = cljs.core.get.call(null,map__46352__$1,new cljs.core.Keyword("active-route","page","active-route/page",513615823));
var params = cljs.core.get.call(null,map__46352__$1,new cljs.core.Keyword("active-route","params","active-route/params",778327881));
var pred__46354 = cljs.core._EQ_;
var expr__46355 = page;
if(cljs.core.truth_(pred__46354.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),expr__46355))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.views.tasks_view], null);
} else {
if(cljs.core.truth_(pred__46354.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__46355))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.views.task_view,new cljs.core.Keyword(null,"by-id","by-id",-2129473981).cljs$core$IFn$_invoke$arity$1(params)], null);
} else {
if(cljs.core.truth_(pred__46354.call(null,new cljs.core.Keyword(null,"project","project",1124394579),expr__46355))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.views.tasks_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.views.not_found_view], null);
}
}
}
});
;})(route))
});
mimas.core.mimas = (function mimas$core$mimas(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.current_view], null);
});
});
mimas.core.init = (function mimas$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

mimas.routes.init_router_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mimas.core.mimas], null),goog.dom.getElement("app"));
});
mimas.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1459095002683