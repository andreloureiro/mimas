// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23789 = cljs.core._EQ_;
var expr__23790 = (function (){var or__18376__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23793){if((e23793 instanceof Error)){
var e = e23793;
return false;
} else {
throw e23793;

}
}})();
if(cljs.core.truth_(or__18376__auto__)){
return or__18376__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23789.call(null,"true",expr__23790))){
return true;
} else {
if(cljs.core.truth_(pred__23789.call(null,"false",expr__23790))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23790)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23795){if((e23795 instanceof Error)){
var e = e23795;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23795;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19441__auto__ = [];
var len__19434__auto___23797 = arguments.length;
var i__19435__auto___23798 = (0);
while(true){
if((i__19435__auto___23798 < len__19434__auto___23797)){
args__19441__auto__.push((arguments[i__19435__auto___23798]));

var G__23799 = (i__19435__auto___23798 + (1));
i__19435__auto___23798 = G__23799;
continue;
} else {
}
break;
}

var argseq__19442__auto__ = ((((0) < args__19441__auto__.length))?(new cljs.core.IndexedSeq(args__19441__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19442__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23796){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23796));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23800){
var map__23803 = p__23800;
var map__23803__$1 = ((((!((map__23803 == null)))?((((map__23803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23803):map__23803);
var message = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23803__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18376__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18376__auto__)){
return or__18376__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18364__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18364__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18364__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20412__auto___23965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto___23965,ch){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto___23965,ch){
return (function (state_23934){
var state_val_23935 = (state_23934[(1)]);
if((state_val_23935 === (7))){
var inst_23930 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23936_23966 = state_23934__$1;
(statearr_23936_23966[(2)] = inst_23930);

(statearr_23936_23966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (1))){
var state_23934__$1 = state_23934;
var statearr_23937_23967 = state_23934__$1;
(statearr_23937_23967[(2)] = null);

(statearr_23937_23967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (4))){
var inst_23887 = (state_23934[(7)]);
var inst_23887__$1 = (state_23934[(2)]);
var state_23934__$1 = (function (){var statearr_23938 = state_23934;
(statearr_23938[(7)] = inst_23887__$1);

return statearr_23938;
})();
if(cljs.core.truth_(inst_23887__$1)){
var statearr_23939_23968 = state_23934__$1;
(statearr_23939_23968[(1)] = (5));

} else {
var statearr_23940_23969 = state_23934__$1;
(statearr_23940_23969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (15))){
var inst_23894 = (state_23934[(8)]);
var inst_23909 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23894);
var inst_23910 = cljs.core.first.call(null,inst_23909);
var inst_23911 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23910);
var inst_23912 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23911)].join('');
var inst_23913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23912);
var state_23934__$1 = state_23934;
var statearr_23941_23970 = state_23934__$1;
(statearr_23941_23970[(2)] = inst_23913);

(statearr_23941_23970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (13))){
var inst_23918 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23942_23971 = state_23934__$1;
(statearr_23942_23971[(2)] = inst_23918);

(statearr_23942_23971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (6))){
var state_23934__$1 = state_23934;
var statearr_23943_23972 = state_23934__$1;
(statearr_23943_23972[(2)] = null);

(statearr_23943_23972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (17))){
var inst_23916 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23944_23973 = state_23934__$1;
(statearr_23944_23973[(2)] = inst_23916);

(statearr_23944_23973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (3))){
var inst_23932 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23934__$1,inst_23932);
} else {
if((state_val_23935 === (12))){
var inst_23893 = (state_23934[(9)]);
var inst_23907 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23893,opts);
var state_23934__$1 = state_23934;
if(cljs.core.truth_(inst_23907)){
var statearr_23945_23974 = state_23934__$1;
(statearr_23945_23974[(1)] = (15));

} else {
var statearr_23946_23975 = state_23934__$1;
(statearr_23946_23975[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (2))){
var state_23934__$1 = state_23934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23934__$1,(4),ch);
} else {
if((state_val_23935 === (11))){
var inst_23894 = (state_23934[(8)]);
var inst_23899 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23900 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23894);
var inst_23901 = cljs.core.async.timeout.call(null,(1000));
var inst_23902 = [inst_23900,inst_23901];
var inst_23903 = (new cljs.core.PersistentVector(null,2,(5),inst_23899,inst_23902,null));
var state_23934__$1 = state_23934;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23934__$1,(14),inst_23903);
} else {
if((state_val_23935 === (9))){
var inst_23894 = (state_23934[(8)]);
var inst_23920 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23921 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23894);
var inst_23922 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23921);
var inst_23923 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23922)].join('');
var inst_23924 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23923);
var state_23934__$1 = (function (){var statearr_23947 = state_23934;
(statearr_23947[(10)] = inst_23920);

return statearr_23947;
})();
var statearr_23948_23976 = state_23934__$1;
(statearr_23948_23976[(2)] = inst_23924);

(statearr_23948_23976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (5))){
var inst_23887 = (state_23934[(7)]);
var inst_23889 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23890 = (new cljs.core.PersistentArrayMap(null,2,inst_23889,null));
var inst_23891 = (new cljs.core.PersistentHashSet(null,inst_23890,null));
var inst_23892 = figwheel.client.focus_msgs.call(null,inst_23891,inst_23887);
var inst_23893 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23892);
var inst_23894 = cljs.core.first.call(null,inst_23892);
var inst_23895 = figwheel.client.autoload_QMARK_.call(null);
var state_23934__$1 = (function (){var statearr_23949 = state_23934;
(statearr_23949[(8)] = inst_23894);

(statearr_23949[(9)] = inst_23893);

return statearr_23949;
})();
if(cljs.core.truth_(inst_23895)){
var statearr_23950_23977 = state_23934__$1;
(statearr_23950_23977[(1)] = (8));

} else {
var statearr_23951_23978 = state_23934__$1;
(statearr_23951_23978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (14))){
var inst_23905 = (state_23934[(2)]);
var state_23934__$1 = state_23934;
var statearr_23952_23979 = state_23934__$1;
(statearr_23952_23979[(2)] = inst_23905);

(statearr_23952_23979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (16))){
var state_23934__$1 = state_23934;
var statearr_23953_23980 = state_23934__$1;
(statearr_23953_23980[(2)] = null);

(statearr_23953_23980[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (10))){
var inst_23926 = (state_23934[(2)]);
var state_23934__$1 = (function (){var statearr_23954 = state_23934;
(statearr_23954[(11)] = inst_23926);

return statearr_23954;
})();
var statearr_23955_23981 = state_23934__$1;
(statearr_23955_23981[(2)] = null);

(statearr_23955_23981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23935 === (8))){
var inst_23893 = (state_23934[(9)]);
var inst_23897 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23893,opts);
var state_23934__$1 = state_23934;
if(cljs.core.truth_(inst_23897)){
var statearr_23956_23982 = state_23934__$1;
(statearr_23956_23982[(1)] = (11));

} else {
var statearr_23957_23983 = state_23934__$1;
(statearr_23957_23983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20412__auto___23965,ch))
;
return ((function (switch__20391__auto__,c__20412__auto___23965,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20392__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20392__auto____0 = (function (){
var statearr_23961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23961[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20392__auto__);

(statearr_23961[(1)] = (1));

return statearr_23961;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20392__auto____1 = (function (state_23934){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_23934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e23962){if((e23962 instanceof Object)){
var ex__20395__auto__ = e23962;
var statearr_23963_23984 = state_23934;
(statearr_23963_23984[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23985 = state_23934;
state_23934 = G__23985;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20392__auto__ = function(state_23934){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20392__auto____1.call(this,state_23934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20392__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20392__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto___23965,ch))
})();
var state__20414__auto__ = (function (){var statearr_23964 = f__20413__auto__.call(null);
(statearr_23964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto___23965);

return statearr_23964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto___23965,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23986_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23986_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23993 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23993){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23991 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23992 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23992;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23991;
}}catch (e23990){if((e23990 instanceof Error)){
var e = e23990;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23993], null));
} else {
var e = e23990;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23993))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23994){
var map__24001 = p__23994;
var map__24001__$1 = ((((!((map__24001 == null)))?((((map__24001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24001):map__24001);
var opts = map__24001__$1;
var build_id = cljs.core.get.call(null,map__24001__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24001,map__24001__$1,opts,build_id){
return (function (p__24003){
var vec__24004 = p__24003;
var map__24005 = cljs.core.nth.call(null,vec__24004,(0),null);
var map__24005__$1 = ((((!((map__24005 == null)))?((((map__24005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24005):map__24005);
var msg = map__24005__$1;
var msg_name = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24004,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24004,map__24005,map__24005__$1,msg,msg_name,_,map__24001,map__24001__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24004,map__24005,map__24005__$1,msg,msg_name,_,map__24001,map__24001__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24001,map__24001__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24011){
var vec__24012 = p__24011;
var map__24013 = cljs.core.nth.call(null,vec__24012,(0),null);
var map__24013__$1 = ((((!((map__24013 == null)))?((((map__24013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24013):map__24013);
var msg = map__24013__$1;
var msg_name = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24012,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24015){
var map__24025 = p__24015;
var map__24025__$1 = ((((!((map__24025 == null)))?((((map__24025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24025):map__24025);
var on_compile_warning = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24025__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24025,map__24025__$1,on_compile_warning,on_compile_fail){
return (function (p__24027){
var vec__24028 = p__24027;
var map__24029 = cljs.core.nth.call(null,vec__24028,(0),null);
var map__24029__$1 = ((((!((map__24029 == null)))?((((map__24029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24029):map__24029);
var msg = map__24029__$1;
var msg_name = cljs.core.get.call(null,map__24029__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24028,(1));
var pred__24031 = cljs.core._EQ_;
var expr__24032 = msg_name;
if(cljs.core.truth_(pred__24031.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24032))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24031.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24032))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24025,map__24025__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto__,msg_hist,msg_names,msg){
return (function (state_24248){
var state_val_24249 = (state_24248[(1)]);
if((state_val_24249 === (7))){
var inst_24172 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24172)){
var statearr_24250_24296 = state_24248__$1;
(statearr_24250_24296[(1)] = (8));

} else {
var statearr_24251_24297 = state_24248__$1;
(statearr_24251_24297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (20))){
var inst_24242 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24252_24298 = state_24248__$1;
(statearr_24252_24298[(2)] = inst_24242);

(statearr_24252_24298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (27))){
var inst_24238 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24253_24299 = state_24248__$1;
(statearr_24253_24299[(2)] = inst_24238);

(statearr_24253_24299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (1))){
var inst_24165 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24165)){
var statearr_24254_24300 = state_24248__$1;
(statearr_24254_24300[(1)] = (2));

} else {
var statearr_24255_24301 = state_24248__$1;
(statearr_24255_24301[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (24))){
var inst_24240 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24256_24302 = state_24248__$1;
(statearr_24256_24302[(2)] = inst_24240);

(statearr_24256_24302[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (4))){
var inst_24246 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24248__$1,inst_24246);
} else {
if((state_val_24249 === (15))){
var inst_24244 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24257_24303 = state_24248__$1;
(statearr_24257_24303[(2)] = inst_24244);

(statearr_24257_24303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (21))){
var inst_24203 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24258_24304 = state_24248__$1;
(statearr_24258_24304[(2)] = inst_24203);

(statearr_24258_24304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (31))){
var inst_24227 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24227)){
var statearr_24259_24305 = state_24248__$1;
(statearr_24259_24305[(1)] = (34));

} else {
var statearr_24260_24306 = state_24248__$1;
(statearr_24260_24306[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (32))){
var inst_24236 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24261_24307 = state_24248__$1;
(statearr_24261_24307[(2)] = inst_24236);

(statearr_24261_24307[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (33))){
var inst_24225 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24262_24308 = state_24248__$1;
(statearr_24262_24308[(2)] = inst_24225);

(statearr_24262_24308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (13))){
var inst_24186 = figwheel.client.heads_up.clear.call(null);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(16),inst_24186);
} else {
if((state_val_24249 === (22))){
var inst_24207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24208 = figwheel.client.heads_up.append_message.call(null,inst_24207);
var state_24248__$1 = state_24248;
var statearr_24263_24309 = state_24248__$1;
(statearr_24263_24309[(2)] = inst_24208);

(statearr_24263_24309[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (36))){
var inst_24234 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24264_24310 = state_24248__$1;
(statearr_24264_24310[(2)] = inst_24234);

(statearr_24264_24310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (29))){
var inst_24218 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24265_24311 = state_24248__$1;
(statearr_24265_24311[(2)] = inst_24218);

(statearr_24265_24311[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (6))){
var inst_24167 = (state_24248[(7)]);
var state_24248__$1 = state_24248;
var statearr_24266_24312 = state_24248__$1;
(statearr_24266_24312[(2)] = inst_24167);

(statearr_24266_24312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (28))){
var inst_24214 = (state_24248[(2)]);
var inst_24215 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24216 = figwheel.client.heads_up.display_warning.call(null,inst_24215);
var state_24248__$1 = (function (){var statearr_24267 = state_24248;
(statearr_24267[(8)] = inst_24214);

return statearr_24267;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(29),inst_24216);
} else {
if((state_val_24249 === (25))){
var inst_24212 = figwheel.client.heads_up.clear.call(null);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(28),inst_24212);
} else {
if((state_val_24249 === (34))){
var inst_24229 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(37),inst_24229);
} else {
if((state_val_24249 === (17))){
var inst_24194 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24268_24313 = state_24248__$1;
(statearr_24268_24313[(2)] = inst_24194);

(statearr_24268_24313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (3))){
var inst_24184 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24184)){
var statearr_24269_24314 = state_24248__$1;
(statearr_24269_24314[(1)] = (13));

} else {
var statearr_24270_24315 = state_24248__$1;
(statearr_24270_24315[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (12))){
var inst_24180 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24271_24316 = state_24248__$1;
(statearr_24271_24316[(2)] = inst_24180);

(statearr_24271_24316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (2))){
var inst_24167 = (state_24248[(7)]);
var inst_24167__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24248__$1 = (function (){var statearr_24272 = state_24248;
(statearr_24272[(7)] = inst_24167__$1);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24167__$1)){
var statearr_24273_24317 = state_24248__$1;
(statearr_24273_24317[(1)] = (5));

} else {
var statearr_24274_24318 = state_24248__$1;
(statearr_24274_24318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (23))){
var inst_24210 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24210)){
var statearr_24275_24319 = state_24248__$1;
(statearr_24275_24319[(1)] = (25));

} else {
var statearr_24276_24320 = state_24248__$1;
(statearr_24276_24320[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (35))){
var state_24248__$1 = state_24248;
var statearr_24277_24321 = state_24248__$1;
(statearr_24277_24321[(2)] = null);

(statearr_24277_24321[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (19))){
var inst_24205 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24205)){
var statearr_24278_24322 = state_24248__$1;
(statearr_24278_24322[(1)] = (22));

} else {
var statearr_24279_24323 = state_24248__$1;
(statearr_24279_24323[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (11))){
var inst_24176 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24280_24324 = state_24248__$1;
(statearr_24280_24324[(2)] = inst_24176);

(statearr_24280_24324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (9))){
var inst_24178 = figwheel.client.heads_up.clear.call(null);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(12),inst_24178);
} else {
if((state_val_24249 === (5))){
var inst_24169 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24248__$1 = state_24248;
var statearr_24281_24325 = state_24248__$1;
(statearr_24281_24325[(2)] = inst_24169);

(statearr_24281_24325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (14))){
var inst_24196 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24196)){
var statearr_24282_24326 = state_24248__$1;
(statearr_24282_24326[(1)] = (18));

} else {
var statearr_24283_24327 = state_24248__$1;
(statearr_24283_24327[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (26))){
var inst_24220 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24248__$1 = state_24248;
if(cljs.core.truth_(inst_24220)){
var statearr_24284_24328 = state_24248__$1;
(statearr_24284_24328[(1)] = (30));

} else {
var statearr_24285_24329 = state_24248__$1;
(statearr_24285_24329[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (16))){
var inst_24188 = (state_24248[(2)]);
var inst_24189 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24190 = figwheel.client.format_messages.call(null,inst_24189);
var inst_24191 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24192 = figwheel.client.heads_up.display_error.call(null,inst_24190,inst_24191);
var state_24248__$1 = (function (){var statearr_24286 = state_24248;
(statearr_24286[(9)] = inst_24188);

return statearr_24286;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(17),inst_24192);
} else {
if((state_val_24249 === (30))){
var inst_24222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24223 = figwheel.client.heads_up.display_warning.call(null,inst_24222);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(33),inst_24223);
} else {
if((state_val_24249 === (10))){
var inst_24182 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24287_24330 = state_24248__$1;
(statearr_24287_24330[(2)] = inst_24182);

(statearr_24287_24330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (18))){
var inst_24198 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24199 = figwheel.client.format_messages.call(null,inst_24198);
var inst_24200 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24201 = figwheel.client.heads_up.display_error.call(null,inst_24199,inst_24200);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(21),inst_24201);
} else {
if((state_val_24249 === (37))){
var inst_24231 = (state_24248[(2)]);
var state_24248__$1 = state_24248;
var statearr_24288_24331 = state_24248__$1;
(statearr_24288_24331[(2)] = inst_24231);

(statearr_24288_24331[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24249 === (8))){
var inst_24174 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24248__$1 = state_24248;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24248__$1,(11),inst_24174);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20412__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20391__auto__,c__20412__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24292[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto____1 = (function (state_24248){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_24248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__20395__auto__ = e24293;
var statearr_24294_24332 = state_24248;
(statearr_24294_24332[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24333 = state_24248;
state_24248 = G__24333;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto__ = function(state_24248){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto____1.call(this,state_24248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto__,msg_hist,msg_names,msg))
})();
var state__20414__auto__ = (function (){var statearr_24295 = f__20413__auto__.call(null);
(statearr_24295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto__);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto__,msg_hist,msg_names,msg))
);

return c__20412__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20412__auto___24396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto___24396,ch){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto___24396,ch){
return (function (state_24379){
var state_val_24380 = (state_24379[(1)]);
if((state_val_24380 === (1))){
var state_24379__$1 = state_24379;
var statearr_24381_24397 = state_24379__$1;
(statearr_24381_24397[(2)] = null);

(statearr_24381_24397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24380 === (2))){
var state_24379__$1 = state_24379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24379__$1,(4),ch);
} else {
if((state_val_24380 === (3))){
var inst_24377 = (state_24379[(2)]);
var state_24379__$1 = state_24379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24379__$1,inst_24377);
} else {
if((state_val_24380 === (4))){
var inst_24367 = (state_24379[(7)]);
var inst_24367__$1 = (state_24379[(2)]);
var state_24379__$1 = (function (){var statearr_24382 = state_24379;
(statearr_24382[(7)] = inst_24367__$1);

return statearr_24382;
})();
if(cljs.core.truth_(inst_24367__$1)){
var statearr_24383_24398 = state_24379__$1;
(statearr_24383_24398[(1)] = (5));

} else {
var statearr_24384_24399 = state_24379__$1;
(statearr_24384_24399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24380 === (5))){
var inst_24367 = (state_24379[(7)]);
var inst_24369 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24367);
var state_24379__$1 = state_24379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24379__$1,(8),inst_24369);
} else {
if((state_val_24380 === (6))){
var state_24379__$1 = state_24379;
var statearr_24385_24400 = state_24379__$1;
(statearr_24385_24400[(2)] = null);

(statearr_24385_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24380 === (7))){
var inst_24375 = (state_24379[(2)]);
var state_24379__$1 = state_24379;
var statearr_24386_24401 = state_24379__$1;
(statearr_24386_24401[(2)] = inst_24375);

(statearr_24386_24401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24380 === (8))){
var inst_24371 = (state_24379[(2)]);
var state_24379__$1 = (function (){var statearr_24387 = state_24379;
(statearr_24387[(8)] = inst_24371);

return statearr_24387;
})();
var statearr_24388_24402 = state_24379__$1;
(statearr_24388_24402[(2)] = null);

(statearr_24388_24402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20412__auto___24396,ch))
;
return ((function (switch__20391__auto__,c__20412__auto___24396,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20392__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20392__auto____0 = (function (){
var statearr_24392 = [null,null,null,null,null,null,null,null,null];
(statearr_24392[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20392__auto__);

(statearr_24392[(1)] = (1));

return statearr_24392;
});
var figwheel$client$heads_up_plugin_$_state_machine__20392__auto____1 = (function (state_24379){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_24379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e24393){if((e24393 instanceof Object)){
var ex__20395__auto__ = e24393;
var statearr_24394_24403 = state_24379;
(statearr_24394_24403[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24404 = state_24379;
state_24379 = G__24404;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20392__auto__ = function(state_24379){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20392__auto____1.call(this,state_24379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20392__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20392__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto___24396,ch))
})();
var state__20414__auto__ = (function (){var statearr_24395 = f__20413__auto__.call(null);
(statearr_24395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto___24396);

return statearr_24395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto___24396,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto__){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto__){
return (function (state_24425){
var state_val_24426 = (state_24425[(1)]);
if((state_val_24426 === (1))){
var inst_24420 = cljs.core.async.timeout.call(null,(3000));
var state_24425__$1 = state_24425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24425__$1,(2),inst_24420);
} else {
if((state_val_24426 === (2))){
var inst_24422 = (state_24425[(2)]);
var inst_24423 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24425__$1 = (function (){var statearr_24427 = state_24425;
(statearr_24427[(7)] = inst_24422);

return statearr_24427;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24425__$1,inst_24423);
} else {
return null;
}
}
});})(c__20412__auto__))
;
return ((function (switch__20391__auto__,c__20412__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20392__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20392__auto____0 = (function (){
var statearr_24431 = [null,null,null,null,null,null,null,null];
(statearr_24431[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20392__auto__);

(statearr_24431[(1)] = (1));

return statearr_24431;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20392__auto____1 = (function (state_24425){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_24425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e24432){if((e24432 instanceof Object)){
var ex__20395__auto__ = e24432;
var statearr_24433_24435 = state_24425;
(statearr_24433_24435[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24436 = state_24425;
state_24425 = G__24436;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20392__auto__ = function(state_24425){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20392__auto____1.call(this,state_24425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20392__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20392__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto__))
})();
var state__20414__auto__ = (function (){var statearr_24434 = f__20413__auto__.call(null);
(statearr_24434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto__);

return statearr_24434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto__))
);

return c__20412__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24437){
var map__24444 = p__24437;
var map__24444__$1 = ((((!((map__24444 == null)))?((((map__24444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24444):map__24444);
var ed = map__24444__$1;
var formatted_exception = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24444__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24446_24450 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24447_24451 = null;
var count__24448_24452 = (0);
var i__24449_24453 = (0);
while(true){
if((i__24449_24453 < count__24448_24452)){
var msg_24454 = cljs.core._nth.call(null,chunk__24447_24451,i__24449_24453);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24454);

var G__24455 = seq__24446_24450;
var G__24456 = chunk__24447_24451;
var G__24457 = count__24448_24452;
var G__24458 = (i__24449_24453 + (1));
seq__24446_24450 = G__24455;
chunk__24447_24451 = G__24456;
count__24448_24452 = G__24457;
i__24449_24453 = G__24458;
continue;
} else {
var temp__4657__auto___24459 = cljs.core.seq.call(null,seq__24446_24450);
if(temp__4657__auto___24459){
var seq__24446_24460__$1 = temp__4657__auto___24459;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24446_24460__$1)){
var c__19179__auto___24461 = cljs.core.chunk_first.call(null,seq__24446_24460__$1);
var G__24462 = cljs.core.chunk_rest.call(null,seq__24446_24460__$1);
var G__24463 = c__19179__auto___24461;
var G__24464 = cljs.core.count.call(null,c__19179__auto___24461);
var G__24465 = (0);
seq__24446_24450 = G__24462;
chunk__24447_24451 = G__24463;
count__24448_24452 = G__24464;
i__24449_24453 = G__24465;
continue;
} else {
var msg_24466 = cljs.core.first.call(null,seq__24446_24460__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24466);

var G__24467 = cljs.core.next.call(null,seq__24446_24460__$1);
var G__24468 = null;
var G__24469 = (0);
var G__24470 = (0);
seq__24446_24450 = G__24467;
chunk__24447_24451 = G__24468;
count__24448_24452 = G__24469;
i__24449_24453 = G__24470;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24471){
var map__24474 = p__24471;
var map__24474__$1 = ((((!((map__24474 == null)))?((((map__24474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24474):map__24474);
var w = map__24474__$1;
var message = cljs.core.get.call(null,map__24474__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18364__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18364__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18364__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24482 = cljs.core.seq.call(null,plugins);
var chunk__24483 = null;
var count__24484 = (0);
var i__24485 = (0);
while(true){
if((i__24485 < count__24484)){
var vec__24486 = cljs.core._nth.call(null,chunk__24483,i__24485);
var k = cljs.core.nth.call(null,vec__24486,(0),null);
var plugin = cljs.core.nth.call(null,vec__24486,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24488 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24482,chunk__24483,count__24484,i__24485,pl_24488,vec__24486,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24488.call(null,msg_hist);
});})(seq__24482,chunk__24483,count__24484,i__24485,pl_24488,vec__24486,k,plugin))
);
} else {
}

var G__24489 = seq__24482;
var G__24490 = chunk__24483;
var G__24491 = count__24484;
var G__24492 = (i__24485 + (1));
seq__24482 = G__24489;
chunk__24483 = G__24490;
count__24484 = G__24491;
i__24485 = G__24492;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24482);
if(temp__4657__auto__){
var seq__24482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24482__$1)){
var c__19179__auto__ = cljs.core.chunk_first.call(null,seq__24482__$1);
var G__24493 = cljs.core.chunk_rest.call(null,seq__24482__$1);
var G__24494 = c__19179__auto__;
var G__24495 = cljs.core.count.call(null,c__19179__auto__);
var G__24496 = (0);
seq__24482 = G__24493;
chunk__24483 = G__24494;
count__24484 = G__24495;
i__24485 = G__24496;
continue;
} else {
var vec__24487 = cljs.core.first.call(null,seq__24482__$1);
var k = cljs.core.nth.call(null,vec__24487,(0),null);
var plugin = cljs.core.nth.call(null,vec__24487,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24497 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24482,chunk__24483,count__24484,i__24485,pl_24497,vec__24487,k,plugin,seq__24482__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24497.call(null,msg_hist);
});})(seq__24482,chunk__24483,count__24484,i__24485,pl_24497,vec__24487,k,plugin,seq__24482__$1,temp__4657__auto__))
);
} else {
}

var G__24498 = cljs.core.next.call(null,seq__24482__$1);
var G__24499 = null;
var G__24500 = (0);
var G__24501 = (0);
seq__24482 = G__24498;
chunk__24483 = G__24499;
count__24484 = G__24500;
i__24485 = G__24501;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24502 = [];
var len__19434__auto___24505 = arguments.length;
var i__19435__auto___24506 = (0);
while(true){
if((i__19435__auto___24506 < len__19434__auto___24505)){
args24502.push((arguments[i__19435__auto___24506]));

var G__24507 = (i__19435__auto___24506 + (1));
i__19435__auto___24506 = G__24507;
continue;
} else {
}
break;
}

var G__24504 = args24502.length;
switch (G__24504) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24502.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19441__auto__ = [];
var len__19434__auto___24513 = arguments.length;
var i__19435__auto___24514 = (0);
while(true){
if((i__19435__auto___24514 < len__19434__auto___24513)){
args__19441__auto__.push((arguments[i__19435__auto___24514]));

var G__24515 = (i__19435__auto___24514 + (1));
i__19435__auto___24514 = G__24515;
continue;
} else {
}
break;
}

var argseq__19442__auto__ = ((((0) < args__19441__auto__.length))?(new cljs.core.IndexedSeq(args__19441__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19442__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24510){
var map__24511 = p__24510;
var map__24511__$1 = ((((!((map__24511 == null)))?((((map__24511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24511):map__24511);
var opts = map__24511__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24509){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24509));
});

//# sourceMappingURL=client.js.map?rel=1460522278723