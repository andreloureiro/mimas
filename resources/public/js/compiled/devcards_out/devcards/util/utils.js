// Compiled by ClojureScript 1.7.228 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__38417__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_47339_47341 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_47340_47342 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_47339_47341,_STAR_print_fn_STAR_47340_47342,sb__38417__auto__){
return (function (x__38418__auto__){
return sb__38417__auto__.append(x__38418__auto__);
});})(_STAR_print_newline_STAR_47339_47341,_STAR_print_fn_STAR_47340_47342,sb__38417__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_47340_47342;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_47339_47341;
}
return [cljs.core.str(sb__38417__auto__)].join('');
}catch (e47337){if((e47337 instanceof Error)){
var e1 = e47337;
try{return obj.toString();
}catch (e47338){if((e47338 instanceof Error)){
var e2 = e47338;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e47338;

}
}} else {
throw e47337;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_47344 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_47344;
}});

//# sourceMappingURL=utils.js.map?rel=1459008351849