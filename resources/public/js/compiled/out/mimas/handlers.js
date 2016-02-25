// Compiled by ClojureScript 1.7.170 {}
goog.provide('mimas.handlers');
goog.require('cljs.core');
goog.require('mimas.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,mimas.db.state);
}));

//# sourceMappingURL=handlers.js.map?rel=1456365212101