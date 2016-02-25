// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4423__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4423__auto__)){
var doc = temp__4423__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__36488__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_42917_42919 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_42918_42920 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_42917_42919,_STAR_print_fn_STAR_42918_42920,sb__36488__auto__){
return (function (x__36489__auto__){
return sb__36488__auto__.append(x__36489__auto__);
});})(_STAR_print_newline_STAR_42917_42919,_STAR_print_fn_STAR_42918_42920,sb__36488__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42918_42920;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42917_42919;
}
return [cljs.core.str(sb__36488__auto__)].join('');
}catch (e42915){if((e42915 instanceof Error)){
var e1 = e42915;
try{return obj.toString();
}catch (e42916){if((e42916 instanceof Error)){
var e2 = e42916;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e42916;

}
}} else {
throw e42915;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_42922 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_42922;
}});

//# sourceMappingURL=utils.js.map?rel=1456361403074