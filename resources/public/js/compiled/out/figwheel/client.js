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
var pred__55731 = cljs.core._EQ_;
var expr__55732 = (function (){var or__35514__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e55735){if((e55735 instanceof Error)){
var e = e55735;
return false;
} else {
throw e55735;

}
}})();
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__55731.call(null,"true",expr__55732))){
return true;
} else {
if(cljs.core.truth_(pred__55731.call(null,"false",expr__55732))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__55732)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e55737){if((e55737 instanceof Error)){
var e = e55737;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e55737;

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
var len__36572__auto___55739 = arguments.length;
var i__36573__auto___55740 = (0);
while(true){
if((i__36573__auto___55740 < len__36572__auto___55739)){
args__36579__auto__.push((arguments[i__36573__auto___55740]));

var G__55741 = (i__36573__auto___55740 + (1));
i__36573__auto___55740 = G__55741;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq55738){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55738));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55742){
var map__55745 = p__55742;
var map__55745__$1 = ((((!((map__55745 == null)))?((((map__55745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55745):map__55745);
var message = cljs.core.get.call(null,map__55745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__37681__auto___55907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___55907,ch){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___55907,ch){
return (function (state_55876){
var state_val_55877 = (state_55876[(1)]);
if((state_val_55877 === (7))){
var inst_55872 = (state_55876[(2)]);
var state_55876__$1 = state_55876;
var statearr_55878_55908 = state_55876__$1;
(statearr_55878_55908[(2)] = inst_55872);

(statearr_55878_55908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (1))){
var state_55876__$1 = state_55876;
var statearr_55879_55909 = state_55876__$1;
(statearr_55879_55909[(2)] = null);

(statearr_55879_55909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (4))){
var inst_55829 = (state_55876[(7)]);
var inst_55829__$1 = (state_55876[(2)]);
var state_55876__$1 = (function (){var statearr_55880 = state_55876;
(statearr_55880[(7)] = inst_55829__$1);

return statearr_55880;
})();
if(cljs.core.truth_(inst_55829__$1)){
var statearr_55881_55910 = state_55876__$1;
(statearr_55881_55910[(1)] = (5));

} else {
var statearr_55882_55911 = state_55876__$1;
(statearr_55882_55911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (15))){
var inst_55836 = (state_55876[(8)]);
var inst_55851 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55836);
var inst_55852 = cljs.core.first.call(null,inst_55851);
var inst_55853 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55852);
var inst_55854 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_55853)].join('');
var inst_55855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55854);
var state_55876__$1 = state_55876;
var statearr_55883_55912 = state_55876__$1;
(statearr_55883_55912[(2)] = inst_55855);

(statearr_55883_55912[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (13))){
var inst_55860 = (state_55876[(2)]);
var state_55876__$1 = state_55876;
var statearr_55884_55913 = state_55876__$1;
(statearr_55884_55913[(2)] = inst_55860);

(statearr_55884_55913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (6))){
var state_55876__$1 = state_55876;
var statearr_55885_55914 = state_55876__$1;
(statearr_55885_55914[(2)] = null);

(statearr_55885_55914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (17))){
var inst_55858 = (state_55876[(2)]);
var state_55876__$1 = state_55876;
var statearr_55886_55915 = state_55876__$1;
(statearr_55886_55915[(2)] = inst_55858);

(statearr_55886_55915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (3))){
var inst_55874 = (state_55876[(2)]);
var state_55876__$1 = state_55876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55876__$1,inst_55874);
} else {
if((state_val_55877 === (12))){
var inst_55835 = (state_55876[(9)]);
var inst_55849 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55835,opts);
var state_55876__$1 = state_55876;
if(cljs.core.truth_(inst_55849)){
var statearr_55887_55916 = state_55876__$1;
(statearr_55887_55916[(1)] = (15));

} else {
var statearr_55888_55917 = state_55876__$1;
(statearr_55888_55917[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (2))){
var state_55876__$1 = state_55876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55876__$1,(4),ch);
} else {
if((state_val_55877 === (11))){
var inst_55836 = (state_55876[(8)]);
var inst_55841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55842 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55836);
var inst_55843 = cljs.core.async.timeout.call(null,(1000));
var inst_55844 = [inst_55842,inst_55843];
var inst_55845 = (new cljs.core.PersistentVector(null,2,(5),inst_55841,inst_55844,null));
var state_55876__$1 = state_55876;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55876__$1,(14),inst_55845);
} else {
if((state_val_55877 === (9))){
var inst_55836 = (state_55876[(8)]);
var inst_55862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55863 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55836);
var inst_55864 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55863);
var inst_55865 = [cljs.core.str("Not loading: "),cljs.core.str(inst_55864)].join('');
var inst_55866 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55865);
var state_55876__$1 = (function (){var statearr_55889 = state_55876;
(statearr_55889[(10)] = inst_55862);

return statearr_55889;
})();
var statearr_55890_55918 = state_55876__$1;
(statearr_55890_55918[(2)] = inst_55866);

(statearr_55890_55918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (5))){
var inst_55829 = (state_55876[(7)]);
var inst_55831 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55832 = (new cljs.core.PersistentArrayMap(null,2,inst_55831,null));
var inst_55833 = (new cljs.core.PersistentHashSet(null,inst_55832,null));
var inst_55834 = figwheel.client.focus_msgs.call(null,inst_55833,inst_55829);
var inst_55835 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55834);
var inst_55836 = cljs.core.first.call(null,inst_55834);
var inst_55837 = figwheel.client.autoload_QMARK_.call(null);
var state_55876__$1 = (function (){var statearr_55891 = state_55876;
(statearr_55891[(9)] = inst_55835);

(statearr_55891[(8)] = inst_55836);

return statearr_55891;
})();
if(cljs.core.truth_(inst_55837)){
var statearr_55892_55919 = state_55876__$1;
(statearr_55892_55919[(1)] = (8));

} else {
var statearr_55893_55920 = state_55876__$1;
(statearr_55893_55920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (14))){
var inst_55847 = (state_55876[(2)]);
var state_55876__$1 = state_55876;
var statearr_55894_55921 = state_55876__$1;
(statearr_55894_55921[(2)] = inst_55847);

(statearr_55894_55921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (16))){
var state_55876__$1 = state_55876;
var statearr_55895_55922 = state_55876__$1;
(statearr_55895_55922[(2)] = null);

(statearr_55895_55922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (10))){
var inst_55868 = (state_55876[(2)]);
var state_55876__$1 = (function (){var statearr_55896 = state_55876;
(statearr_55896[(11)] = inst_55868);

return statearr_55896;
})();
var statearr_55897_55923 = state_55876__$1;
(statearr_55897_55923[(2)] = null);

(statearr_55897_55923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55877 === (8))){
var inst_55835 = (state_55876[(9)]);
var inst_55839 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55835,opts);
var state_55876__$1 = state_55876;
if(cljs.core.truth_(inst_55839)){
var statearr_55898_55924 = state_55876__$1;
(statearr_55898_55924[(1)] = (11));

} else {
var statearr_55899_55925 = state_55876__$1;
(statearr_55899_55925[(1)] = (12));

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
});})(c__37681__auto___55907,ch))
;
return ((function (switch__37569__auto__,c__37681__auto___55907,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____0 = (function (){
var statearr_55903 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55903[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__);

(statearr_55903[(1)] = (1));

return statearr_55903;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____1 = (function (state_55876){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_55876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e55904){if((e55904 instanceof Object)){
var ex__37573__auto__ = e55904;
var statearr_55905_55926 = state_55876;
(statearr_55905_55926[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55927 = state_55876;
state_55876 = G__55927;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__ = function(state_55876){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____1.call(this,state_55876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37570__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___55907,ch))
})();
var state__37683__auto__ = (function (){var statearr_55906 = f__37682__auto__.call(null);
(statearr_55906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___55907);

return statearr_55906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___55907,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55928_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55928_SHARP_));
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
var base_path_55935 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55935){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_55933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_55934 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_55934;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55933;
}}catch (e55932){if((e55932 instanceof Error)){
var e = e55932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55935], null));
} else {
var e = e55932;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_55935))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__55936){
var map__55943 = p__55936;
var map__55943__$1 = ((((!((map__55943 == null)))?((((map__55943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55943):map__55943);
var opts = map__55943__$1;
var build_id = cljs.core.get.call(null,map__55943__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__55943,map__55943__$1,opts,build_id){
return (function (p__55945){
var vec__55946 = p__55945;
var map__55947 = cljs.core.nth.call(null,vec__55946,(0),null);
var map__55947__$1 = ((((!((map__55947 == null)))?((((map__55947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55947):map__55947);
var msg = map__55947__$1;
var msg_name = cljs.core.get.call(null,map__55947__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__55946,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__55946,map__55947,map__55947__$1,msg,msg_name,_,map__55943,map__55943__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__55946,map__55947,map__55947__$1,msg,msg_name,_,map__55943,map__55943__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__55943,map__55943__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__55953){
var vec__55954 = p__55953;
var map__55955 = cljs.core.nth.call(null,vec__55954,(0),null);
var map__55955__$1 = ((((!((map__55955 == null)))?((((map__55955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55955):map__55955);
var msg = map__55955__$1;
var msg_name = cljs.core.get.call(null,map__55955__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__55954,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__55957){
var map__55967 = p__55957;
var map__55967__$1 = ((((!((map__55967 == null)))?((((map__55967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55967):map__55967);
var on_compile_warning = cljs.core.get.call(null,map__55967__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__55967__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__55967,map__55967__$1,on_compile_warning,on_compile_fail){
return (function (p__55969){
var vec__55970 = p__55969;
var map__55971 = cljs.core.nth.call(null,vec__55970,(0),null);
var map__55971__$1 = ((((!((map__55971 == null)))?((((map__55971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55971):map__55971);
var msg = map__55971__$1;
var msg_name = cljs.core.get.call(null,map__55971__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__55970,(1));
var pred__55973 = cljs.core._EQ_;
var expr__55974 = msg_name;
if(cljs.core.truth_(pred__55973.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__55974))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__55973.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__55974))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__55967,map__55967__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__,msg_hist,msg_names,msg){
return (function (state_56190){
var state_val_56191 = (state_56190[(1)]);
if((state_val_56191 === (7))){
var inst_56114 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56114)){
var statearr_56192_56238 = state_56190__$1;
(statearr_56192_56238[(1)] = (8));

} else {
var statearr_56193_56239 = state_56190__$1;
(statearr_56193_56239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (20))){
var inst_56184 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56194_56240 = state_56190__$1;
(statearr_56194_56240[(2)] = inst_56184);

(statearr_56194_56240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (27))){
var inst_56180 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56195_56241 = state_56190__$1;
(statearr_56195_56241[(2)] = inst_56180);

(statearr_56195_56241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (1))){
var inst_56107 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56107)){
var statearr_56196_56242 = state_56190__$1;
(statearr_56196_56242[(1)] = (2));

} else {
var statearr_56197_56243 = state_56190__$1;
(statearr_56197_56243[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (24))){
var inst_56182 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56198_56244 = state_56190__$1;
(statearr_56198_56244[(2)] = inst_56182);

(statearr_56198_56244[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (4))){
var inst_56188 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56190__$1,inst_56188);
} else {
if((state_val_56191 === (15))){
var inst_56186 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56199_56245 = state_56190__$1;
(statearr_56199_56245[(2)] = inst_56186);

(statearr_56199_56245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (21))){
var inst_56145 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56200_56246 = state_56190__$1;
(statearr_56200_56246[(2)] = inst_56145);

(statearr_56200_56246[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (31))){
var inst_56169 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56169)){
var statearr_56201_56247 = state_56190__$1;
(statearr_56201_56247[(1)] = (34));

} else {
var statearr_56202_56248 = state_56190__$1;
(statearr_56202_56248[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (32))){
var inst_56178 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56203_56249 = state_56190__$1;
(statearr_56203_56249[(2)] = inst_56178);

(statearr_56203_56249[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (33))){
var inst_56167 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56204_56250 = state_56190__$1;
(statearr_56204_56250[(2)] = inst_56167);

(statearr_56204_56250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (13))){
var inst_56128 = figwheel.client.heads_up.clear.call(null);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(16),inst_56128);
} else {
if((state_val_56191 === (22))){
var inst_56149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56150 = figwheel.client.heads_up.append_message.call(null,inst_56149);
var state_56190__$1 = state_56190;
var statearr_56205_56251 = state_56190__$1;
(statearr_56205_56251[(2)] = inst_56150);

(statearr_56205_56251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (36))){
var inst_56176 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56206_56252 = state_56190__$1;
(statearr_56206_56252[(2)] = inst_56176);

(statearr_56206_56252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (29))){
var inst_56160 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56207_56253 = state_56190__$1;
(statearr_56207_56253[(2)] = inst_56160);

(statearr_56207_56253[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (6))){
var inst_56109 = (state_56190[(7)]);
var state_56190__$1 = state_56190;
var statearr_56208_56254 = state_56190__$1;
(statearr_56208_56254[(2)] = inst_56109);

(statearr_56208_56254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (28))){
var inst_56156 = (state_56190[(2)]);
var inst_56157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56158 = figwheel.client.heads_up.display_warning.call(null,inst_56157);
var state_56190__$1 = (function (){var statearr_56209 = state_56190;
(statearr_56209[(8)] = inst_56156);

return statearr_56209;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(29),inst_56158);
} else {
if((state_val_56191 === (25))){
var inst_56154 = figwheel.client.heads_up.clear.call(null);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(28),inst_56154);
} else {
if((state_val_56191 === (34))){
var inst_56171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(37),inst_56171);
} else {
if((state_val_56191 === (17))){
var inst_56136 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56210_56255 = state_56190__$1;
(statearr_56210_56255[(2)] = inst_56136);

(statearr_56210_56255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (3))){
var inst_56126 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56126)){
var statearr_56211_56256 = state_56190__$1;
(statearr_56211_56256[(1)] = (13));

} else {
var statearr_56212_56257 = state_56190__$1;
(statearr_56212_56257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (12))){
var inst_56122 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56213_56258 = state_56190__$1;
(statearr_56213_56258[(2)] = inst_56122);

(statearr_56213_56258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (2))){
var inst_56109 = (state_56190[(7)]);
var inst_56109__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_56190__$1 = (function (){var statearr_56214 = state_56190;
(statearr_56214[(7)] = inst_56109__$1);

return statearr_56214;
})();
if(cljs.core.truth_(inst_56109__$1)){
var statearr_56215_56259 = state_56190__$1;
(statearr_56215_56259[(1)] = (5));

} else {
var statearr_56216_56260 = state_56190__$1;
(statearr_56216_56260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (23))){
var inst_56152 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56152)){
var statearr_56217_56261 = state_56190__$1;
(statearr_56217_56261[(1)] = (25));

} else {
var statearr_56218_56262 = state_56190__$1;
(statearr_56218_56262[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (35))){
var state_56190__$1 = state_56190;
var statearr_56219_56263 = state_56190__$1;
(statearr_56219_56263[(2)] = null);

(statearr_56219_56263[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (19))){
var inst_56147 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56147)){
var statearr_56220_56264 = state_56190__$1;
(statearr_56220_56264[(1)] = (22));

} else {
var statearr_56221_56265 = state_56190__$1;
(statearr_56221_56265[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (11))){
var inst_56118 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56222_56266 = state_56190__$1;
(statearr_56222_56266[(2)] = inst_56118);

(statearr_56222_56266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (9))){
var inst_56120 = figwheel.client.heads_up.clear.call(null);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(12),inst_56120);
} else {
if((state_val_56191 === (5))){
var inst_56111 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_56190__$1 = state_56190;
var statearr_56223_56267 = state_56190__$1;
(statearr_56223_56267[(2)] = inst_56111);

(statearr_56223_56267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (14))){
var inst_56138 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56138)){
var statearr_56224_56268 = state_56190__$1;
(statearr_56224_56268[(1)] = (18));

} else {
var statearr_56225_56269 = state_56190__$1;
(statearr_56225_56269[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (26))){
var inst_56162 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_56190__$1 = state_56190;
if(cljs.core.truth_(inst_56162)){
var statearr_56226_56270 = state_56190__$1;
(statearr_56226_56270[(1)] = (30));

} else {
var statearr_56227_56271 = state_56190__$1;
(statearr_56227_56271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (16))){
var inst_56130 = (state_56190[(2)]);
var inst_56131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56132 = figwheel.client.format_messages.call(null,inst_56131);
var inst_56133 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56134 = figwheel.client.heads_up.display_error.call(null,inst_56132,inst_56133);
var state_56190__$1 = (function (){var statearr_56228 = state_56190;
(statearr_56228[(9)] = inst_56130);

return statearr_56228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(17),inst_56134);
} else {
if((state_val_56191 === (30))){
var inst_56164 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56165 = figwheel.client.heads_up.display_warning.call(null,inst_56164);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(33),inst_56165);
} else {
if((state_val_56191 === (10))){
var inst_56124 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56229_56272 = state_56190__$1;
(statearr_56229_56272[(2)] = inst_56124);

(statearr_56229_56272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (18))){
var inst_56140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56141 = figwheel.client.format_messages.call(null,inst_56140);
var inst_56142 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_56143 = figwheel.client.heads_up.display_error.call(null,inst_56141,inst_56142);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(21),inst_56143);
} else {
if((state_val_56191 === (37))){
var inst_56173 = (state_56190[(2)]);
var state_56190__$1 = state_56190;
var statearr_56230_56273 = state_56190__$1;
(statearr_56230_56273[(2)] = inst_56173);

(statearr_56230_56273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56191 === (8))){
var inst_56116 = figwheel.client.heads_up.flash_loaded.call(null);
var state_56190__$1 = state_56190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56190__$1,(11),inst_56116);
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
var statearr_56234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56234[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__);

(statearr_56234[(1)] = (1));

return statearr_56234;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____1 = (function (state_56190){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_56190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e56235){if((e56235 instanceof Object)){
var ex__37573__auto__ = e56235;
var statearr_56236_56274 = state_56190;
(statearr_56236_56274[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56275 = state_56190;
state_56190 = G__56275;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__ = function(state_56190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____1.call(this,state_56190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__,msg_hist,msg_names,msg))
})();
var state__37683__auto__ = (function (){var statearr_56237 = f__37682__auto__.call(null);
(statearr_56237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_56237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__,msg_hist,msg_names,msg))
);

return c__37681__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37681__auto___56338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___56338,ch){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___56338,ch){
return (function (state_56321){
var state_val_56322 = (state_56321[(1)]);
if((state_val_56322 === (1))){
var state_56321__$1 = state_56321;
var statearr_56323_56339 = state_56321__$1;
(statearr_56323_56339[(2)] = null);

(statearr_56323_56339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56322 === (2))){
var state_56321__$1 = state_56321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56321__$1,(4),ch);
} else {
if((state_val_56322 === (3))){
var inst_56319 = (state_56321[(2)]);
var state_56321__$1 = state_56321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56321__$1,inst_56319);
} else {
if((state_val_56322 === (4))){
var inst_56309 = (state_56321[(7)]);
var inst_56309__$1 = (state_56321[(2)]);
var state_56321__$1 = (function (){var statearr_56324 = state_56321;
(statearr_56324[(7)] = inst_56309__$1);

return statearr_56324;
})();
if(cljs.core.truth_(inst_56309__$1)){
var statearr_56325_56340 = state_56321__$1;
(statearr_56325_56340[(1)] = (5));

} else {
var statearr_56326_56341 = state_56321__$1;
(statearr_56326_56341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56322 === (5))){
var inst_56309 = (state_56321[(7)]);
var inst_56311 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_56309);
var state_56321__$1 = state_56321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56321__$1,(8),inst_56311);
} else {
if((state_val_56322 === (6))){
var state_56321__$1 = state_56321;
var statearr_56327_56342 = state_56321__$1;
(statearr_56327_56342[(2)] = null);

(statearr_56327_56342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56322 === (7))){
var inst_56317 = (state_56321[(2)]);
var state_56321__$1 = state_56321;
var statearr_56328_56343 = state_56321__$1;
(statearr_56328_56343[(2)] = inst_56317);

(statearr_56328_56343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56322 === (8))){
var inst_56313 = (state_56321[(2)]);
var state_56321__$1 = (function (){var statearr_56329 = state_56321;
(statearr_56329[(8)] = inst_56313);

return statearr_56329;
})();
var statearr_56330_56344 = state_56321__$1;
(statearr_56330_56344[(2)] = null);

(statearr_56330_56344[(1)] = (2));


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
});})(c__37681__auto___56338,ch))
;
return ((function (switch__37569__auto__,c__37681__auto___56338,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37570__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37570__auto____0 = (function (){
var statearr_56334 = [null,null,null,null,null,null,null,null,null];
(statearr_56334[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37570__auto__);

(statearr_56334[(1)] = (1));

return statearr_56334;
});
var figwheel$client$heads_up_plugin_$_state_machine__37570__auto____1 = (function (state_56321){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_56321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e56335){if((e56335 instanceof Object)){
var ex__37573__auto__ = e56335;
var statearr_56336_56345 = state_56321;
(statearr_56336_56345[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56346 = state_56321;
state_56321 = G__56346;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37570__auto__ = function(state_56321){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37570__auto____1.call(this,state_56321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37570__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37570__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___56338,ch))
})();
var state__37683__auto__ = (function (){var statearr_56337 = f__37682__auto__.call(null);
(statearr_56337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___56338);

return statearr_56337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___56338,ch))
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
return (function (state_56367){
var state_val_56368 = (state_56367[(1)]);
if((state_val_56368 === (1))){
var inst_56362 = cljs.core.async.timeout.call(null,(3000));
var state_56367__$1 = state_56367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56367__$1,(2),inst_56362);
} else {
if((state_val_56368 === (2))){
var inst_56364 = (state_56367[(2)]);
var inst_56365 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_56367__$1 = (function (){var statearr_56369 = state_56367;
(statearr_56369[(7)] = inst_56364);

return statearr_56369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56367__$1,inst_56365);
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
var statearr_56373 = [null,null,null,null,null,null,null,null];
(statearr_56373[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__);

(statearr_56373[(1)] = (1));

return statearr_56373;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____1 = (function (state_56367){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_56367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e56374){if((e56374 instanceof Object)){
var ex__37573__auto__ = e56374;
var statearr_56375_56377 = state_56367;
(statearr_56375_56377[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56378 = state_56367;
state_56367 = G__56378;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__ = function(state_56367){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____1.call(this,state_56367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37570__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_56376 = f__37682__auto__.call(null);
(statearr_56376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_56376;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__56379){
var map__56386 = p__56379;
var map__56386__$1 = ((((!((map__56386 == null)))?((((map__56386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56386):map__56386);
var ed = map__56386__$1;
var formatted_exception = cljs.core.get.call(null,map__56386__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__56386__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__56386__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__56388_56392 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__56389_56393 = null;
var count__56390_56394 = (0);
var i__56391_56395 = (0);
while(true){
if((i__56391_56395 < count__56390_56394)){
var msg_56396 = cljs.core._nth.call(null,chunk__56389_56393,i__56391_56395);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56396);

var G__56397 = seq__56388_56392;
var G__56398 = chunk__56389_56393;
var G__56399 = count__56390_56394;
var G__56400 = (i__56391_56395 + (1));
seq__56388_56392 = G__56397;
chunk__56389_56393 = G__56398;
count__56390_56394 = G__56399;
i__56391_56395 = G__56400;
continue;
} else {
var temp__4425__auto___56401 = cljs.core.seq.call(null,seq__56388_56392);
if(temp__4425__auto___56401){
var seq__56388_56402__$1 = temp__4425__auto___56401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56388_56402__$1)){
var c__36317__auto___56403 = cljs.core.chunk_first.call(null,seq__56388_56402__$1);
var G__56404 = cljs.core.chunk_rest.call(null,seq__56388_56402__$1);
var G__56405 = c__36317__auto___56403;
var G__56406 = cljs.core.count.call(null,c__36317__auto___56403);
var G__56407 = (0);
seq__56388_56392 = G__56404;
chunk__56389_56393 = G__56405;
count__56390_56394 = G__56406;
i__56391_56395 = G__56407;
continue;
} else {
var msg_56408 = cljs.core.first.call(null,seq__56388_56402__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_56408);

var G__56409 = cljs.core.next.call(null,seq__56388_56402__$1);
var G__56410 = null;
var G__56411 = (0);
var G__56412 = (0);
seq__56388_56392 = G__56409;
chunk__56389_56393 = G__56410;
count__56390_56394 = G__56411;
i__56391_56395 = G__56412;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__56413){
var map__56416 = p__56413;
var map__56416__$1 = ((((!((map__56416 == null)))?((((map__56416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56416):map__56416);
var w = map__56416__$1;
var message = cljs.core.get.call(null,map__56416__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__56424 = cljs.core.seq.call(null,plugins);
var chunk__56425 = null;
var count__56426 = (0);
var i__56427 = (0);
while(true){
if((i__56427 < count__56426)){
var vec__56428 = cljs.core._nth.call(null,chunk__56425,i__56427);
var k = cljs.core.nth.call(null,vec__56428,(0),null);
var plugin = cljs.core.nth.call(null,vec__56428,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56430 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56424,chunk__56425,count__56426,i__56427,pl_56430,vec__56428,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_56430.call(null,msg_hist);
});})(seq__56424,chunk__56425,count__56426,i__56427,pl_56430,vec__56428,k,plugin))
);
} else {
}

var G__56431 = seq__56424;
var G__56432 = chunk__56425;
var G__56433 = count__56426;
var G__56434 = (i__56427 + (1));
seq__56424 = G__56431;
chunk__56425 = G__56432;
count__56426 = G__56433;
i__56427 = G__56434;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__56424);
if(temp__4425__auto__){
var seq__56424__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56424__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__56424__$1);
var G__56435 = cljs.core.chunk_rest.call(null,seq__56424__$1);
var G__56436 = c__36317__auto__;
var G__56437 = cljs.core.count.call(null,c__36317__auto__);
var G__56438 = (0);
seq__56424 = G__56435;
chunk__56425 = G__56436;
count__56426 = G__56437;
i__56427 = G__56438;
continue;
} else {
var vec__56429 = cljs.core.first.call(null,seq__56424__$1);
var k = cljs.core.nth.call(null,vec__56429,(0),null);
var plugin = cljs.core.nth.call(null,vec__56429,(1),null);
if(cljs.core.truth_(plugin)){
var pl_56439 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__56424,chunk__56425,count__56426,i__56427,pl_56439,vec__56429,k,plugin,seq__56424__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_56439.call(null,msg_hist);
});})(seq__56424,chunk__56425,count__56426,i__56427,pl_56439,vec__56429,k,plugin,seq__56424__$1,temp__4425__auto__))
);
} else {
}

var G__56440 = cljs.core.next.call(null,seq__56424__$1);
var G__56441 = null;
var G__56442 = (0);
var G__56443 = (0);
seq__56424 = G__56440;
chunk__56425 = G__56441;
count__56426 = G__56442;
i__56427 = G__56443;
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
var args56444 = [];
var len__36572__auto___56447 = arguments.length;
var i__36573__auto___56448 = (0);
while(true){
if((i__36573__auto___56448 < len__36572__auto___56447)){
args56444.push((arguments[i__36573__auto___56448]));

var G__56449 = (i__36573__auto___56448 + (1));
i__36573__auto___56448 = G__56449;
continue;
} else {
}
break;
}

var G__56446 = args56444.length;
switch (G__56446) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56444.length)].join('')));

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
var len__36572__auto___56455 = arguments.length;
var i__36573__auto___56456 = (0);
while(true){
if((i__36573__auto___56456 < len__36572__auto___56455)){
args__36579__auto__.push((arguments[i__36573__auto___56456]));

var G__56457 = (i__36573__auto___56456 + (1));
i__36573__auto___56456 = G__56457;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__56452){
var map__56453 = p__56452;
var map__56453__$1 = ((((!((map__56453 == null)))?((((map__56453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56453):map__56453);
var opts = map__56453__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq56451){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56451));
});

//# sourceMappingURL=client.js.map?rel=1456364845680