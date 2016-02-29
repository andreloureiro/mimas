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

//# sourceMappingURL=handlers.js.map?rel=1456757180422