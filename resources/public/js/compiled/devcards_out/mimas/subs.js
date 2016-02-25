// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mimas.db');
mimas.subs.simple_sub = (function mimas$subs$simple_sub(db,p__58116){
var vec__58118 = p__58116;
var k = cljs.core.nth.call(null,vec__58118,(0),null);
return reagent.ratom.make_reaction.call(null,((function (vec__58118,k){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,db),k);
});})(vec__58118,k))
);
});
re_frame.core.register_sub.call(null,new cljs.core.Keyword("app","title","app/title",636408784),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("dropdown","list","dropdown/list",1063037540),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","list","task/list",761502432),mimas.subs.simple_sub);
re_frame.core.register_sub.call(null,new cljs.core.Keyword("task","form","task/form",-1627647084),mimas.subs.simple_sub);

//# sourceMappingURL=subs.js.map?rel=1456367566678