// Compiled by ClojureScript 1.7.170 {}
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
var pred__45882 = cljs.core._EQ_;
var expr__45883 = (function (){var or__35514__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e45886){if((e45886 instanceof Error)){
var e = e45886;
return false;
} else {
throw e45886;

}
}})();
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45882.call(null,"true",expr__45883))){
return true;
} else {
if(cljs.core.truth_(pred__45882.call(null,"false",expr__45883))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45883)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e45888){if((e45888 instanceof Error)){
var e = e45888;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45888;

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
var args__36579__auto__ = [];
var len__36572__auto___45890 = arguments.length;
var i__36573__auto___45891 = (0);
while(true){
if((i__36573__auto___45891 < len__36572__auto___45890)){
args__36579__auto__.push((arguments[i__36573__auto___45891]));

var G__45892 = (i__36573__auto___45891 + (1));
i__36573__auto___45891 = G__45892;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq45889){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45889));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45893){
var map__45896 = p__45893;
var map__45896__$1 = ((((!((map__45896 == null)))?((((map__45896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45896):map__45896);
var message = cljs.core.get.call(null,map__45896__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45896__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__35514__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__35502__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__35502__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__35502__auto__;
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
var c__37681__auto___46058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___46058,ch){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___46058,ch){
return (function (state_46027){
var state_val_46028 = (state_46027[(1)]);
if((state_val_46028 === (7))){
var inst_46023 = (state_46027[(2)]);
var state_46027__$1 = state_46027;
var statearr_46029_46059 = state_46027__$1;
(statearr_46029_46059[(2)] = inst_46023);

(statearr_46029_46059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (1))){
var state_46027__$1 = state_46027;
var statearr_46030_46060 = state_46027__$1;
(statearr_46030_46060[(2)] = null);

(statearr_46030_46060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (4))){
var inst_45980 = (state_46027[(7)]);
var inst_45980__$1 = (state_46027[(2)]);
var state_46027__$1 = (function (){var statearr_46031 = state_46027;
(statearr_46031[(7)] = inst_45980__$1);

return statearr_46031;
})();
if(cljs.core.truth_(inst_45980__$1)){
var statearr_46032_46061 = state_46027__$1;
(statearr_46032_46061[(1)] = (5));

} else {
var statearr_46033_46062 = state_46027__$1;
(statearr_46033_46062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (15))){
var inst_45987 = (state_46027[(8)]);
var inst_46002 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45987);
var inst_46003 = cljs.core.first.call(null,inst_46002);
var inst_46004 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46003);
var inst_46005 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_46004)].join('');
var inst_46006 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46005);
var state_46027__$1 = state_46027;
var statearr_46034_46063 = state_46027__$1;
(statearr_46034_46063[(2)] = inst_46006);

(statearr_46034_46063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (13))){
var inst_46011 = (state_46027[(2)]);
var state_46027__$1 = state_46027;
var statearr_46035_46064 = state_46027__$1;
(statearr_46035_46064[(2)] = inst_46011);

(statearr_46035_46064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (6))){
var state_46027__$1 = state_46027;
var statearr_46036_46065 = state_46027__$1;
(statearr_46036_46065[(2)] = null);

(statearr_46036_46065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (17))){
var inst_46009 = (state_46027[(2)]);
var state_46027__$1 = state_46027;
var statearr_46037_46066 = state_46027__$1;
(statearr_46037_46066[(2)] = inst_46009);

(statearr_46037_46066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (3))){
var inst_46025 = (state_46027[(2)]);
var state_46027__$1 = state_46027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46027__$1,inst_46025);
} else {
if((state_val_46028 === (12))){
var inst_45986 = (state_46027[(9)]);
var inst_46000 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45986,opts);
var state_46027__$1 = state_46027;
if(cljs.core.truth_(inst_46000)){
var statearr_46038_46067 = state_46027__$1;
(statearr_46038_46067[(1)] = (15));

} else {
var statearr_46039_46068 = state_46027__$1;
(statearr_46039_46068[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (2))){
var state_46027__$1 = state_46027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46027__$1,(4),ch);
} else {
if((state_val_46028 === (11))){
var inst_45987 = (state_46027[(8)]);
var inst_45992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45993 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45987);
var inst_45994 = cljs.core.async.timeout.call(null,(1000));
var inst_45995 = [inst_45993,inst_45994];
var inst_45996 = (new cljs.core.PersistentVector(null,2,(5),inst_45992,inst_45995,null));
var state_46027__$1 = state_46027;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46027__$1,(14),inst_45996);
} else {
if((state_val_46028 === (9))){
var inst_45987 = (state_46027[(8)]);
var inst_46013 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46014 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45987);
var inst_46015 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46014);
var inst_46016 = [cljs.core.str("Not loading: "),cljs.core.str(inst_46015)].join('');
var inst_46017 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46016);
var state_46027__$1 = (function (){var statearr_46040 = state_46027;
(statearr_46040[(10)] = inst_46013);

return statearr_46040;
})();
var statearr_46041_46069 = state_46027__$1;
(statearr_46041_46069[(2)] = inst_46017);

(statearr_46041_46069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (5))){
var inst_45980 = (state_46027[(7)]);
var inst_45982 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45983 = (new cljs.core.PersistentArrayMap(null,2,inst_45982,null));
var inst_45984 = (new cljs.core.PersistentHashSet(null,inst_45983,null));
var inst_45985 = figwheel.client.focus_msgs.call(null,inst_45984,inst_45980);
var inst_45986 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45985);
var inst_45987 = cljs.core.first.call(null,inst_45985);
var inst_45988 = figwheel.client.autoload_QMARK_.call(null);
var state_46027__$1 = (function (){var statearr_46042 = state_46027;
(statearr_46042[(9)] = inst_45986);

(statearr_46042[(8)] = inst_45987);

return statearr_46042;
})();
if(cljs.core.truth_(inst_45988)){
var statearr_46043_46070 = state_46027__$1;
(statearr_46043_46070[(1)] = (8));

} else {
var statearr_46044_46071 = state_46027__$1;
(statearr_46044_46071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (14))){
var inst_45998 = (state_46027[(2)]);
var state_46027__$1 = state_46027;
var statearr_46045_46072 = state_46027__$1;
(statearr_46045_46072[(2)] = inst_45998);

(statearr_46045_46072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (16))){
var state_46027__$1 = state_46027;
var statearr_46046_46073 = state_46027__$1;
(statearr_46046_46073[(2)] = null);

(statearr_46046_46073[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (10))){
var inst_46019 = (state_46027[(2)]);
var state_46027__$1 = (function (){var statearr_46047 = state_46027;
(statearr_46047[(11)] = inst_46019);

return statearr_46047;
})();
var statearr_46048_46074 = state_46027__$1;
(statearr_46048_46074[(2)] = null);

(statearr_46048_46074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46028 === (8))){
var inst_45986 = (state_46027[(9)]);
var inst_45990 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45986,opts);
var state_46027__$1 = state_46027;
if(cljs.core.truth_(inst_45990)){
var statearr_46049_46075 = state_46027__$1;
(statearr_46049_46075[(1)] = (11));

} else {
var statearr_46050_46076 = state_46027__$1;
(statearr_46050_46076[(1)] = (12));

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
});})(c__37681__auto___46058,ch))
;
return ((function (switch__37569__auto__,c__37681__auto___46058,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____0 = (function (){
var statearr_46054 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46054[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__);

(statearr_46054[(1)] = (1));

return statearr_46054;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____1 = (function (state_46027){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_46027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e46055){if((e46055 instanceof Object)){
var ex__37573__auto__ = e46055;
var statearr_46056_46077 = state_46027;
(statearr_46056_46077[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46078 = state_46027;
state_46027 = G__46078;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__ = function(state_46027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____1.call(this,state_46027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___46058,ch))
})();
var state__37683__auto__ = (function (){var statearr_46057 = f__37682__auto__.call(null);
(statearr_46057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___46058);

return statearr_46057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___46058,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46079_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46079_SHARP_));
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
var base_path_46086 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46086){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_46084 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_46085 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46085;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46084;
}}catch (e46083){if((e46083 instanceof Error)){
var e = e46083;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46086], null));
} else {
var e = e46083;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_46086))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46087){
var map__46094 = p__46087;
var map__46094__$1 = ((((!((map__46094 == null)))?((((map__46094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46094):map__46094);
var opts = map__46094__$1;
var build_id = cljs.core.get.call(null,map__46094__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46094,map__46094__$1,opts,build_id){
return (function (p__46096){
var vec__46097 = p__46096;
var map__46098 = cljs.core.nth.call(null,vec__46097,(0),null);
var map__46098__$1 = ((((!((map__46098 == null)))?((((map__46098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46098):map__46098);
var msg = map__46098__$1;
var msg_name = cljs.core.get.call(null,map__46098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46097,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46097,map__46098,map__46098__$1,msg,msg_name,_,map__46094,map__46094__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46097,map__46098,map__46098__$1,msg,msg_name,_,map__46094,map__46094__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46094,map__46094__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46104){
var vec__46105 = p__46104;
var map__46106 = cljs.core.nth.call(null,vec__46105,(0),null);
var map__46106__$1 = ((((!((map__46106 == null)))?((((map__46106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46106):map__46106);
var msg = map__46106__$1;
var msg_name = cljs.core.get.call(null,map__46106__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46105,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46108){
var map__46118 = p__46108;
var map__46118__$1 = ((((!((map__46118 == null)))?((((map__46118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46118):map__46118);
var on_compile_warning = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46118__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46118,map__46118__$1,on_compile_warning,on_compile_fail){
return (function (p__46120){
var vec__46121 = p__46120;
var map__46122 = cljs.core.nth.call(null,vec__46121,(0),null);
var map__46122__$1 = ((((!((map__46122 == null)))?((((map__46122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46122):map__46122);
var msg = map__46122__$1;
var msg_name = cljs.core.get.call(null,map__46122__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__46121,(1));
var pred__46124 = cljs.core._EQ_;
var expr__46125 = msg_name;
if(cljs.core.truth_(pred__46124.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46125))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46124.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46125))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46118,map__46118__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__,msg_hist,msg_names,msg){
return (function (state_46341){
var state_val_46342 = (state_46341[(1)]);
if((state_val_46342 === (7))){
var inst_46265 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46265)){
var statearr_46343_46389 = state_46341__$1;
(statearr_46343_46389[(1)] = (8));

} else {
var statearr_46344_46390 = state_46341__$1;
(statearr_46344_46390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (20))){
var inst_46335 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46345_46391 = state_46341__$1;
(statearr_46345_46391[(2)] = inst_46335);

(statearr_46345_46391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (27))){
var inst_46331 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46346_46392 = state_46341__$1;
(statearr_46346_46392[(2)] = inst_46331);

(statearr_46346_46392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (1))){
var inst_46258 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46258)){
var statearr_46347_46393 = state_46341__$1;
(statearr_46347_46393[(1)] = (2));

} else {
var statearr_46348_46394 = state_46341__$1;
(statearr_46348_46394[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (24))){
var inst_46333 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46349_46395 = state_46341__$1;
(statearr_46349_46395[(2)] = inst_46333);

(statearr_46349_46395[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (4))){
var inst_46339 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46341__$1,inst_46339);
} else {
if((state_val_46342 === (15))){
var inst_46337 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46350_46396 = state_46341__$1;
(statearr_46350_46396[(2)] = inst_46337);

(statearr_46350_46396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (21))){
var inst_46296 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46351_46397 = state_46341__$1;
(statearr_46351_46397[(2)] = inst_46296);

(statearr_46351_46397[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (31))){
var inst_46320 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46320)){
var statearr_46352_46398 = state_46341__$1;
(statearr_46352_46398[(1)] = (34));

} else {
var statearr_46353_46399 = state_46341__$1;
(statearr_46353_46399[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (32))){
var inst_46329 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46354_46400 = state_46341__$1;
(statearr_46354_46400[(2)] = inst_46329);

(statearr_46354_46400[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (33))){
var inst_46318 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46355_46401 = state_46341__$1;
(statearr_46355_46401[(2)] = inst_46318);

(statearr_46355_46401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (13))){
var inst_46279 = figwheel.client.heads_up.clear.call(null);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(16),inst_46279);
} else {
if((state_val_46342 === (22))){
var inst_46300 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46301 = figwheel.client.heads_up.append_message.call(null,inst_46300);
var state_46341__$1 = state_46341;
var statearr_46356_46402 = state_46341__$1;
(statearr_46356_46402[(2)] = inst_46301);

(statearr_46356_46402[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (36))){
var inst_46327 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46357_46403 = state_46341__$1;
(statearr_46357_46403[(2)] = inst_46327);

(statearr_46357_46403[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (29))){
var inst_46311 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46358_46404 = state_46341__$1;
(statearr_46358_46404[(2)] = inst_46311);

(statearr_46358_46404[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (6))){
var inst_46260 = (state_46341[(7)]);
var state_46341__$1 = state_46341;
var statearr_46359_46405 = state_46341__$1;
(statearr_46359_46405[(2)] = inst_46260);

(statearr_46359_46405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (28))){
var inst_46307 = (state_46341[(2)]);
var inst_46308 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46309 = figwheel.client.heads_up.display_warning.call(null,inst_46308);
var state_46341__$1 = (function (){var statearr_46360 = state_46341;
(statearr_46360[(8)] = inst_46307);

return statearr_46360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(29),inst_46309);
} else {
if((state_val_46342 === (25))){
var inst_46305 = figwheel.client.heads_up.clear.call(null);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(28),inst_46305);
} else {
if((state_val_46342 === (34))){
var inst_46322 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(37),inst_46322);
} else {
if((state_val_46342 === (17))){
var inst_46287 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46361_46406 = state_46341__$1;
(statearr_46361_46406[(2)] = inst_46287);

(statearr_46361_46406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (3))){
var inst_46277 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46277)){
var statearr_46362_46407 = state_46341__$1;
(statearr_46362_46407[(1)] = (13));

} else {
var statearr_46363_46408 = state_46341__$1;
(statearr_46363_46408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (12))){
var inst_46273 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46364_46409 = state_46341__$1;
(statearr_46364_46409[(2)] = inst_46273);

(statearr_46364_46409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (2))){
var inst_46260 = (state_46341[(7)]);
var inst_46260__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46341__$1 = (function (){var statearr_46365 = state_46341;
(statearr_46365[(7)] = inst_46260__$1);

return statearr_46365;
})();
if(cljs.core.truth_(inst_46260__$1)){
var statearr_46366_46410 = state_46341__$1;
(statearr_46366_46410[(1)] = (5));

} else {
var statearr_46367_46411 = state_46341__$1;
(statearr_46367_46411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (23))){
var inst_46303 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46303)){
var statearr_46368_46412 = state_46341__$1;
(statearr_46368_46412[(1)] = (25));

} else {
var statearr_46369_46413 = state_46341__$1;
(statearr_46369_46413[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (35))){
var state_46341__$1 = state_46341;
var statearr_46370_46414 = state_46341__$1;
(statearr_46370_46414[(2)] = null);

(statearr_46370_46414[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (19))){
var inst_46298 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46298)){
var statearr_46371_46415 = state_46341__$1;
(statearr_46371_46415[(1)] = (22));

} else {
var statearr_46372_46416 = state_46341__$1;
(statearr_46372_46416[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (11))){
var inst_46269 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46373_46417 = state_46341__$1;
(statearr_46373_46417[(2)] = inst_46269);

(statearr_46373_46417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (9))){
var inst_46271 = figwheel.client.heads_up.clear.call(null);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(12),inst_46271);
} else {
if((state_val_46342 === (5))){
var inst_46262 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46341__$1 = state_46341;
var statearr_46374_46418 = state_46341__$1;
(statearr_46374_46418[(2)] = inst_46262);

(statearr_46374_46418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (14))){
var inst_46289 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46289)){
var statearr_46375_46419 = state_46341__$1;
(statearr_46375_46419[(1)] = (18));

} else {
var statearr_46376_46420 = state_46341__$1;
(statearr_46376_46420[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (26))){
var inst_46313 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46313)){
var statearr_46377_46421 = state_46341__$1;
(statearr_46377_46421[(1)] = (30));

} else {
var statearr_46378_46422 = state_46341__$1;
(statearr_46378_46422[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (16))){
var inst_46281 = (state_46341[(2)]);
var inst_46282 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46283 = figwheel.client.format_messages.call(null,inst_46282);
var inst_46284 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46285 = figwheel.client.heads_up.display_error.call(null,inst_46283,inst_46284);
var state_46341__$1 = (function (){var statearr_46379 = state_46341;
(statearr_46379[(9)] = inst_46281);

return statearr_46379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(17),inst_46285);
} else {
if((state_val_46342 === (30))){
var inst_46315 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46316 = figwheel.client.heads_up.display_warning.call(null,inst_46315);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(33),inst_46316);
} else {
if((state_val_46342 === (10))){
var inst_46275 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46380_46423 = state_46341__$1;
(statearr_46380_46423[(2)] = inst_46275);

(statearr_46380_46423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (18))){
var inst_46291 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46292 = figwheel.client.format_messages.call(null,inst_46291);
var inst_46293 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46294 = figwheel.client.heads_up.display_error.call(null,inst_46292,inst_46293);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(21),inst_46294);
} else {
if((state_val_46342 === (37))){
var inst_46324 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46381_46424 = state_46341__$1;
(statearr_46381_46424[(2)] = inst_46324);

(statearr_46381_46424[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (8))){
var inst_46267 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(11),inst_46267);
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
});})(c__37681__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37569__auto__,c__37681__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____0 = (function (){
var statearr_46385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46385[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__);

(statearr_46385[(1)] = (1));

return statearr_46385;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____1 = (function (state_46341){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_46341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e46386){if((e46386 instanceof Object)){
var ex__37573__auto__ = e46386;
var statearr_46387_46425 = state_46341;
(statearr_46387_46425[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46426 = state_46341;
state_46341 = G__46426;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__ = function(state_46341){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____1.call(this,state_46341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__,msg_hist,msg_names,msg))
})();
var state__37683__auto__ = (function (){var statearr_46388 = f__37682__auto__.call(null);
(statearr_46388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_46388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__,msg_hist,msg_names,msg))
);

return c__37681__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37681__auto___46489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___46489,ch){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___46489,ch){
return (function (state_46472){
var state_val_46473 = (state_46472[(1)]);
if((state_val_46473 === (1))){
var state_46472__$1 = state_46472;
var statearr_46474_46490 = state_46472__$1;
(statearr_46474_46490[(2)] = null);

(statearr_46474_46490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (2))){
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46472__$1,(4),ch);
} else {
if((state_val_46473 === (3))){
var inst_46470 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46472__$1,inst_46470);
} else {
if((state_val_46473 === (4))){
var inst_46460 = (state_46472[(7)]);
var inst_46460__$1 = (state_46472[(2)]);
var state_46472__$1 = (function (){var statearr_46475 = state_46472;
(statearr_46475[(7)] = inst_46460__$1);

return statearr_46475;
})();
if(cljs.core.truth_(inst_46460__$1)){
var statearr_46476_46491 = state_46472__$1;
(statearr_46476_46491[(1)] = (5));

} else {
var statearr_46477_46492 = state_46472__$1;
(statearr_46477_46492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (5))){
var inst_46460 = (state_46472[(7)]);
var inst_46462 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46460);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46472__$1,(8),inst_46462);
} else {
if((state_val_46473 === (6))){
var state_46472__$1 = state_46472;
var statearr_46478_46493 = state_46472__$1;
(statearr_46478_46493[(2)] = null);

(statearr_46478_46493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (7))){
var inst_46468 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
var statearr_46479_46494 = state_46472__$1;
(statearr_46479_46494[(2)] = inst_46468);

(statearr_46479_46494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (8))){
var inst_46464 = (state_46472[(2)]);
var state_46472__$1 = (function (){var statearr_46480 = state_46472;
(statearr_46480[(8)] = inst_46464);

return statearr_46480;
})();
var statearr_46481_46495 = state_46472__$1;
(statearr_46481_46495[(2)] = null);

(statearr_46481_46495[(1)] = (2));


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
});})(c__37681__auto___46489,ch))
;
return ((function (switch__37569__auto__,c__37681__auto___46489,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37570__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37570__auto____0 = (function (){
var statearr_46485 = [null,null,null,null,null,null,null,null,null];
(statearr_46485[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37570__auto__);

(statearr_46485[(1)] = (1));

return statearr_46485;
});
var figwheel$client$heads_up_plugin_$_state_machine__37570__auto____1 = (function (state_46472){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_46472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e46486){if((e46486 instanceof Object)){
var ex__37573__auto__ = e46486;
var statearr_46487_46496 = state_46472;
(statearr_46487_46496[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46497 = state_46472;
state_46472 = G__46497;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37570__auto__ = function(state_46472){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37570__auto____1.call(this,state_46472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37570__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37570__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___46489,ch))
})();
var state__37683__auto__ = (function (){var statearr_46488 = f__37682__auto__.call(null);
(statearr_46488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___46489);

return statearr_46488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___46489,ch))
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
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_46518){
var state_val_46519 = (state_46518[(1)]);
if((state_val_46519 === (1))){
var inst_46513 = cljs.core.async.timeout.call(null,(3000));
var state_46518__$1 = state_46518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46518__$1,(2),inst_46513);
} else {
if((state_val_46519 === (2))){
var inst_46515 = (state_46518[(2)]);
var inst_46516 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46518__$1 = (function (){var statearr_46520 = state_46518;
(statearr_46520[(7)] = inst_46515);

return statearr_46520;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46518__$1,inst_46516);
} else {
return null;
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____0 = (function (){
var statearr_46524 = [null,null,null,null,null,null,null,null];
(statearr_46524[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__);

(statearr_46524[(1)] = (1));

return statearr_46524;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____1 = (function (state_46518){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_46518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e46525){if((e46525 instanceof Object)){
var ex__37573__auto__ = e46525;
var statearr_46526_46528 = state_46518;
(statearr_46526_46528[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46529 = state_46518;
state_46518 = G__46529;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__ = function(state_46518){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____1.call(this,state_46518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_46527 = f__37682__auto__.call(null);
(statearr_46527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_46527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46530){
var map__46537 = p__46530;
var map__46537__$1 = ((((!((map__46537 == null)))?((((map__46537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46537):map__46537);
var ed = map__46537__$1;
var formatted_exception = cljs.core.get.call(null,map__46537__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46537__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46537__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46539_46543 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46540_46544 = null;
var count__46541_46545 = (0);
var i__46542_46546 = (0);
while(true){
if((i__46542_46546 < count__46541_46545)){
var msg_46547 = cljs.core._nth.call(null,chunk__46540_46544,i__46542_46546);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46547);

var G__46548 = seq__46539_46543;
var G__46549 = chunk__46540_46544;
var G__46550 = count__46541_46545;
var G__46551 = (i__46542_46546 + (1));
seq__46539_46543 = G__46548;
chunk__46540_46544 = G__46549;
count__46541_46545 = G__46550;
i__46542_46546 = G__46551;
continue;
} else {
var temp__4425__auto___46552 = cljs.core.seq.call(null,seq__46539_46543);
if(temp__4425__auto___46552){
var seq__46539_46553__$1 = temp__4425__auto___46552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46539_46553__$1)){
var c__36317__auto___46554 = cljs.core.chunk_first.call(null,seq__46539_46553__$1);
var G__46555 = cljs.core.chunk_rest.call(null,seq__46539_46553__$1);
var G__46556 = c__36317__auto___46554;
var G__46557 = cljs.core.count.call(null,c__36317__auto___46554);
var G__46558 = (0);
seq__46539_46543 = G__46555;
chunk__46540_46544 = G__46556;
count__46541_46545 = G__46557;
i__46542_46546 = G__46558;
continue;
} else {
var msg_46559 = cljs.core.first.call(null,seq__46539_46553__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46559);

var G__46560 = cljs.core.next.call(null,seq__46539_46553__$1);
var G__46561 = null;
var G__46562 = (0);
var G__46563 = (0);
seq__46539_46543 = G__46560;
chunk__46540_46544 = G__46561;
count__46541_46545 = G__46562;
i__46542_46546 = G__46563;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46564){
var map__46567 = p__46564;
var map__46567__$1 = ((((!((map__46567 == null)))?((((map__46567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46567):map__46567);
var w = map__46567__$1;
var message = cljs.core.get.call(null,map__46567__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__35502__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__35502__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__35502__auto__;
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
var seq__46575 = cljs.core.seq.call(null,plugins);
var chunk__46576 = null;
var count__46577 = (0);
var i__46578 = (0);
while(true){
if((i__46578 < count__46577)){
var vec__46579 = cljs.core._nth.call(null,chunk__46576,i__46578);
var k = cljs.core.nth.call(null,vec__46579,(0),null);
var plugin = cljs.core.nth.call(null,vec__46579,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46581 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46575,chunk__46576,count__46577,i__46578,pl_46581,vec__46579,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46581.call(null,msg_hist);
});})(seq__46575,chunk__46576,count__46577,i__46578,pl_46581,vec__46579,k,plugin))
);
} else {
}

var G__46582 = seq__46575;
var G__46583 = chunk__46576;
var G__46584 = count__46577;
var G__46585 = (i__46578 + (1));
seq__46575 = G__46582;
chunk__46576 = G__46583;
count__46577 = G__46584;
i__46578 = G__46585;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__46575);
if(temp__4425__auto__){
var seq__46575__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46575__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__46575__$1);
var G__46586 = cljs.core.chunk_rest.call(null,seq__46575__$1);
var G__46587 = c__36317__auto__;
var G__46588 = cljs.core.count.call(null,c__36317__auto__);
var G__46589 = (0);
seq__46575 = G__46586;
chunk__46576 = G__46587;
count__46577 = G__46588;
i__46578 = G__46589;
continue;
} else {
var vec__46580 = cljs.core.first.call(null,seq__46575__$1);
var k = cljs.core.nth.call(null,vec__46580,(0),null);
var plugin = cljs.core.nth.call(null,vec__46580,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46590 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46575,chunk__46576,count__46577,i__46578,pl_46590,vec__46580,k,plugin,seq__46575__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46590.call(null,msg_hist);
});})(seq__46575,chunk__46576,count__46577,i__46578,pl_46590,vec__46580,k,plugin,seq__46575__$1,temp__4425__auto__))
);
} else {
}

var G__46591 = cljs.core.next.call(null,seq__46575__$1);
var G__46592 = null;
var G__46593 = (0);
var G__46594 = (0);
seq__46575 = G__46591;
chunk__46576 = G__46592;
count__46577 = G__46593;
i__46578 = G__46594;
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
var args46595 = [];
var len__36572__auto___46598 = arguments.length;
var i__36573__auto___46599 = (0);
while(true){
if((i__36573__auto___46599 < len__36572__auto___46598)){
args46595.push((arguments[i__36573__auto___46599]));

var G__46600 = (i__36573__auto___46599 + (1));
i__36573__auto___46599 = G__46600;
continue;
} else {
}
break;
}

var G__46597 = args46595.length;
switch (G__46597) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46595.length)].join('')));

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
var args__36579__auto__ = [];
var len__36572__auto___46606 = arguments.length;
var i__36573__auto___46607 = (0);
while(true){
if((i__36573__auto___46607 < len__36572__auto___46606)){
args__36579__auto__.push((arguments[i__36573__auto___46607]));

var G__46608 = (i__36573__auto___46607 + (1));
i__36573__auto___46607 = G__46608;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46603){
var map__46604 = p__46603;
var map__46604__$1 = ((((!((map__46604 == null)))?((((map__46604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46604):map__46604);
var opts = map__46604__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46602){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46602));
});

//# sourceMappingURL=client.js.map?rel=1456361408007