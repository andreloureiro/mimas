// Compiled by ClojureScript 1.7.228 {}
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
mimas.handlers.listen_keystrikes = (function mimas$handlers$listen_keystrikes(e){
return console.log(e.keyCode);
});
mimas.handlers.add_keypress_listener_BANG_ = (function mimas$handlers$add_keypress_listener_BANG_(){
return document.addEventListener("keyup",mimas.handlers.listen_keystrikes);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (_,___$1){
var ls_data = mimas.handlers.ls__GT_edn_BANG_.call(null);
mimas.handlers.add_keypress_listener_BANG_.call(null);

return cljs.core.merge.call(null,mimas.db.initial_state,ls_data);
}));

//# sourceMappingURL=handlers.js.map?rel=1460247571856