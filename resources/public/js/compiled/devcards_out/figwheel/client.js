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
var pred__53812 = cljs.core._EQ_;
var expr__53813 = (function (){var or__37443__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__53812.call(null,"true",expr__53813))){
return true;
} else {
if(cljs.core.truth_(pred__53812.call(null,"false",expr__53813))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__53813)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53815__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__53815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53816__i = 0, G__53816__a = new Array(arguments.length -  0);
while (G__53816__i < G__53816__a.length) {G__53816__a[G__53816__i] = arguments[G__53816__i + 0]; ++G__53816__i;}
  args = new cljs.core.IndexedSeq(G__53816__a,0);
} 
return G__53815__delegate.call(this,args);};
G__53815.cljs$lang$maxFixedArity = 0;
G__53815.cljs$lang$applyTo = (function (arglist__53817){
var args = cljs.core.seq(arglist__53817);
return G__53815__delegate(args);
});
G__53815.cljs$core$IFn$_invoke$arity$variadic = G__53815__delegate;
return G__53815;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53818){
var map__53821 = p__53818;
var map__53821__$1 = ((((!((map__53821 == null)))?((((map__53821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53821):map__53821);
var message = cljs.core.get.call(null,map__53821__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53821__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__37443__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__37431__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__37431__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__37431__auto__;
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
var c__41374__auto___53983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___53983,ch){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___53983,ch){
return (function (state_53952){
var state_val_53953 = (state_53952[(1)]);
if((state_val_53953 === (7))){
var inst_53948 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53954_53984 = state_53952__$1;
(statearr_53954_53984[(2)] = inst_53948);

(statearr_53954_53984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (1))){
var state_53952__$1 = state_53952;
var statearr_53955_53985 = state_53952__$1;
(statearr_53955_53985[(2)] = null);

(statearr_53955_53985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (4))){
var inst_53905 = (state_53952[(7)]);
var inst_53905__$1 = (state_53952[(2)]);
var state_53952__$1 = (function (){var statearr_53956 = state_53952;
(statearr_53956[(7)] = inst_53905__$1);

return statearr_53956;
})();
if(cljs.core.truth_(inst_53905__$1)){
var statearr_53957_53986 = state_53952__$1;
(statearr_53957_53986[(1)] = (5));

} else {
var statearr_53958_53987 = state_53952__$1;
(statearr_53958_53987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (15))){
var inst_53912 = (state_53952[(8)]);
var inst_53927 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53912);
var inst_53928 = cljs.core.first.call(null,inst_53927);
var inst_53929 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53928);
var inst_53930 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_53929)].join('');
var inst_53931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53930);
var state_53952__$1 = state_53952;
var statearr_53959_53988 = state_53952__$1;
(statearr_53959_53988[(2)] = inst_53931);

(statearr_53959_53988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (13))){
var inst_53936 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53960_53989 = state_53952__$1;
(statearr_53960_53989[(2)] = inst_53936);

(statearr_53960_53989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (6))){
var state_53952__$1 = state_53952;
var statearr_53961_53990 = state_53952__$1;
(statearr_53961_53990[(2)] = null);

(statearr_53961_53990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (17))){
var inst_53934 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53962_53991 = state_53952__$1;
(statearr_53962_53991[(2)] = inst_53934);

(statearr_53962_53991[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (3))){
var inst_53950 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53952__$1,inst_53950);
} else {
if((state_val_53953 === (12))){
var inst_53911 = (state_53952[(9)]);
var inst_53925 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53911,opts);
var state_53952__$1 = state_53952;
if(cljs.core.truth_(inst_53925)){
var statearr_53963_53992 = state_53952__$1;
(statearr_53963_53992[(1)] = (15));

} else {
var statearr_53964_53993 = state_53952__$1;
(statearr_53964_53993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (2))){
var state_53952__$1 = state_53952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53952__$1,(4),ch);
} else {
if((state_val_53953 === (11))){
var inst_53912 = (state_53952[(8)]);
var inst_53917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53918 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53912);
var inst_53919 = cljs.core.async.timeout.call(null,(1000));
var inst_53920 = [inst_53918,inst_53919];
var inst_53921 = (new cljs.core.PersistentVector(null,2,(5),inst_53917,inst_53920,null));
var state_53952__$1 = state_53952;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53952__$1,(14),inst_53921);
} else {
if((state_val_53953 === (9))){
var inst_53912 = (state_53952[(8)]);
var inst_53938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53939 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53912);
var inst_53940 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53939);
var inst_53941 = [cljs.core.str("Not loading: "),cljs.core.str(inst_53940)].join('');
var inst_53942 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53941);
var state_53952__$1 = (function (){var statearr_53965 = state_53952;
(statearr_53965[(10)] = inst_53938);

return statearr_53965;
})();
var statearr_53966_53994 = state_53952__$1;
(statearr_53966_53994[(2)] = inst_53942);

(statearr_53966_53994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (5))){
var inst_53905 = (state_53952[(7)]);
var inst_53907 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53908 = (new cljs.core.PersistentArrayMap(null,2,inst_53907,null));
var inst_53909 = (new cljs.core.PersistentHashSet(null,inst_53908,null));
var inst_53910 = figwheel.client.focus_msgs.call(null,inst_53909,inst_53905);
var inst_53911 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53910);
var inst_53912 = cljs.core.first.call(null,inst_53910);
var inst_53913 = figwheel.client.autoload_QMARK_.call(null);
var state_53952__$1 = (function (){var statearr_53967 = state_53952;
(statearr_53967[(8)] = inst_53912);

(statearr_53967[(9)] = inst_53911);

return statearr_53967;
})();
if(cljs.core.truth_(inst_53913)){
var statearr_53968_53995 = state_53952__$1;
(statearr_53968_53995[(1)] = (8));

} else {
var statearr_53969_53996 = state_53952__$1;
(statearr_53969_53996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (14))){
var inst_53923 = (state_53952[(2)]);
var state_53952__$1 = state_53952;
var statearr_53970_53997 = state_53952__$1;
(statearr_53970_53997[(2)] = inst_53923);

(statearr_53970_53997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (16))){
var state_53952__$1 = state_53952;
var statearr_53971_53998 = state_53952__$1;
(statearr_53971_53998[(2)] = null);

(statearr_53971_53998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (10))){
var inst_53944 = (state_53952[(2)]);
var state_53952__$1 = (function (){var statearr_53972 = state_53952;
(statearr_53972[(11)] = inst_53944);

return statearr_53972;
})();
var statearr_53973_53999 = state_53952__$1;
(statearr_53973_53999[(2)] = null);

(statearr_53973_53999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53953 === (8))){
var inst_53911 = (state_53952[(9)]);
var inst_53915 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53911,opts);
var state_53952__$1 = state_53952;
if(cljs.core.truth_(inst_53915)){
var statearr_53974_54000 = state_53952__$1;
(statearr_53974_54000[(1)] = (11));

} else {
var statearr_53975_54001 = state_53952__$1;
(statearr_53975_54001[(1)] = (12));

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
});})(c__41374__auto___53983,ch))
;
return ((function (switch__41353__auto__,c__41374__auto___53983,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__41354__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__41354__auto____0 = (function (){
var statearr_53979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53979[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__41354__auto__);

(statearr_53979[(1)] = (1));

return statearr_53979;
});
var figwheel$client$file_reloader_plugin_$_state_machine__41354__auto____1 = (function (state_53952){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_53952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e53980){if((e53980 instanceof Object)){
var ex__41357__auto__ = e53980;
var statearr_53981_54002 = state_53952;
(statearr_53981_54002[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54003 = state_53952;
state_53952 = G__54003;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__41354__auto__ = function(state_53952){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__41354__auto____1.call(this,state_53952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__41354__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__41354__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___53983,ch))
})();
var state__41376__auto__ = (function (){var statearr_53982 = f__41375__auto__.call(null);
(statearr_53982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___53983);

return statearr_53982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___53983,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54004_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54004_SHARP_));
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
var base_path_54011 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54011){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_54009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_54010 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_54009,_STAR_print_newline_STAR_54010,base_path_54011){
return (function() { 
var G__54012__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__54012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54013__i = 0, G__54013__a = new Array(arguments.length -  0);
while (G__54013__i < G__54013__a.length) {G__54013__a[G__54013__i] = arguments[G__54013__i + 0]; ++G__54013__i;}
  args = new cljs.core.IndexedSeq(G__54013__a,0);
} 
return G__54012__delegate.call(this,args);};
G__54012.cljs$lang$maxFixedArity = 0;
G__54012.cljs$lang$applyTo = (function (arglist__54014){
var args = cljs.core.seq(arglist__54014);
return G__54012__delegate(args);
});
G__54012.cljs$core$IFn$_invoke$arity$variadic = G__54012__delegate;
return G__54012;
})()
;})(_STAR_print_fn_STAR_54009,_STAR_print_newline_STAR_54010,base_path_54011))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54010;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54009;
}}catch (e54008){if((e54008 instanceof Error)){
var e = e54008;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54011], null));
} else {
var e = e54008;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_54011))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54015){
var map__54022 = p__54015;
var map__54022__$1 = ((((!((map__54022 == null)))?((((map__54022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54022):map__54022);
var opts = map__54022__$1;
var build_id = cljs.core.get.call(null,map__54022__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54022,map__54022__$1,opts,build_id){
return (function (p__54024){
var vec__54025 = p__54024;
var map__54026 = cljs.core.nth.call(null,vec__54025,(0),null);
var map__54026__$1 = ((((!((map__54026 == null)))?((((map__54026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54026):map__54026);
var msg = map__54026__$1;
var msg_name = cljs.core.get.call(null,map__54026__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__54025,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54025,map__54026,map__54026__$1,msg,msg_name,_,map__54022,map__54022__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54025,map__54026,map__54026__$1,msg,msg_name,_,map__54022,map__54022__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54022,map__54022__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54032){
var vec__54033 = p__54032;
var map__54034 = cljs.core.nth.call(null,vec__54033,(0),null);
var map__54034__$1 = ((((!((map__54034 == null)))?((((map__54034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54034):map__54034);
var msg = map__54034__$1;
var msg_name = cljs.core.get.call(null,map__54034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__54033,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54036){
var map__54046 = p__54036;
var map__54046__$1 = ((((!((map__54046 == null)))?((((map__54046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54046):map__54046);
var on_compile_warning = cljs.core.get.call(null,map__54046__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54046__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54046,map__54046__$1,on_compile_warning,on_compile_fail){
return (function (p__54048){
var vec__54049 = p__54048;
var map__54050 = cljs.core.nth.call(null,vec__54049,(0),null);
var map__54050__$1 = ((((!((map__54050 == null)))?((((map__54050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54050):map__54050);
var msg = map__54050__$1;
var msg_name = cljs.core.get.call(null,map__54050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__54049,(1));
var pred__54052 = cljs.core._EQ_;
var expr__54053 = msg_name;
if(cljs.core.truth_(pred__54052.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54053))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54052.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54053))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54046,map__54046__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__,msg_hist,msg_names,msg){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__,msg_hist,msg_names,msg){
return (function (state_54269){
var state_val_54270 = (state_54269[(1)]);
if((state_val_54270 === (7))){
var inst_54193 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54193)){
var statearr_54271_54317 = state_54269__$1;
(statearr_54271_54317[(1)] = (8));

} else {
var statearr_54272_54318 = state_54269__$1;
(statearr_54272_54318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (20))){
var inst_54263 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54273_54319 = state_54269__$1;
(statearr_54273_54319[(2)] = inst_54263);

(statearr_54273_54319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (27))){
var inst_54259 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54274_54320 = state_54269__$1;
(statearr_54274_54320[(2)] = inst_54259);

(statearr_54274_54320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (1))){
var inst_54186 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54186)){
var statearr_54275_54321 = state_54269__$1;
(statearr_54275_54321[(1)] = (2));

} else {
var statearr_54276_54322 = state_54269__$1;
(statearr_54276_54322[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (24))){
var inst_54261 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54277_54323 = state_54269__$1;
(statearr_54277_54323[(2)] = inst_54261);

(statearr_54277_54323[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (4))){
var inst_54267 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54269__$1,inst_54267);
} else {
if((state_val_54270 === (15))){
var inst_54265 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54278_54324 = state_54269__$1;
(statearr_54278_54324[(2)] = inst_54265);

(statearr_54278_54324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (21))){
var inst_54224 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54279_54325 = state_54269__$1;
(statearr_54279_54325[(2)] = inst_54224);

(statearr_54279_54325[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (31))){
var inst_54248 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54248)){
var statearr_54280_54326 = state_54269__$1;
(statearr_54280_54326[(1)] = (34));

} else {
var statearr_54281_54327 = state_54269__$1;
(statearr_54281_54327[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (32))){
var inst_54257 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54282_54328 = state_54269__$1;
(statearr_54282_54328[(2)] = inst_54257);

(statearr_54282_54328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (33))){
var inst_54246 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54283_54329 = state_54269__$1;
(statearr_54283_54329[(2)] = inst_54246);

(statearr_54283_54329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (13))){
var inst_54207 = figwheel.client.heads_up.clear.call(null);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(16),inst_54207);
} else {
if((state_val_54270 === (22))){
var inst_54228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54229 = figwheel.client.heads_up.append_message.call(null,inst_54228);
var state_54269__$1 = state_54269;
var statearr_54284_54330 = state_54269__$1;
(statearr_54284_54330[(2)] = inst_54229);

(statearr_54284_54330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (36))){
var inst_54255 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54285_54331 = state_54269__$1;
(statearr_54285_54331[(2)] = inst_54255);

(statearr_54285_54331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (29))){
var inst_54239 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54286_54332 = state_54269__$1;
(statearr_54286_54332[(2)] = inst_54239);

(statearr_54286_54332[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (6))){
var inst_54188 = (state_54269[(7)]);
var state_54269__$1 = state_54269;
var statearr_54287_54333 = state_54269__$1;
(statearr_54287_54333[(2)] = inst_54188);

(statearr_54287_54333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (28))){
var inst_54235 = (state_54269[(2)]);
var inst_54236 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54237 = figwheel.client.heads_up.display_warning.call(null,inst_54236);
var state_54269__$1 = (function (){var statearr_54288 = state_54269;
(statearr_54288[(8)] = inst_54235);

return statearr_54288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(29),inst_54237);
} else {
if((state_val_54270 === (25))){
var inst_54233 = figwheel.client.heads_up.clear.call(null);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(28),inst_54233);
} else {
if((state_val_54270 === (34))){
var inst_54250 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(37),inst_54250);
} else {
if((state_val_54270 === (17))){
var inst_54215 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54289_54334 = state_54269__$1;
(statearr_54289_54334[(2)] = inst_54215);

(statearr_54289_54334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (3))){
var inst_54205 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54205)){
var statearr_54290_54335 = state_54269__$1;
(statearr_54290_54335[(1)] = (13));

} else {
var statearr_54291_54336 = state_54269__$1;
(statearr_54291_54336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (12))){
var inst_54201 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54292_54337 = state_54269__$1;
(statearr_54292_54337[(2)] = inst_54201);

(statearr_54292_54337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (2))){
var inst_54188 = (state_54269[(7)]);
var inst_54188__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54269__$1 = (function (){var statearr_54293 = state_54269;
(statearr_54293[(7)] = inst_54188__$1);

return statearr_54293;
})();
if(cljs.core.truth_(inst_54188__$1)){
var statearr_54294_54338 = state_54269__$1;
(statearr_54294_54338[(1)] = (5));

} else {
var statearr_54295_54339 = state_54269__$1;
(statearr_54295_54339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (23))){
var inst_54231 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54231)){
var statearr_54296_54340 = state_54269__$1;
(statearr_54296_54340[(1)] = (25));

} else {
var statearr_54297_54341 = state_54269__$1;
(statearr_54297_54341[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (35))){
var state_54269__$1 = state_54269;
var statearr_54298_54342 = state_54269__$1;
(statearr_54298_54342[(2)] = null);

(statearr_54298_54342[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (19))){
var inst_54226 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54226)){
var statearr_54299_54343 = state_54269__$1;
(statearr_54299_54343[(1)] = (22));

} else {
var statearr_54300_54344 = state_54269__$1;
(statearr_54300_54344[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (11))){
var inst_54197 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54301_54345 = state_54269__$1;
(statearr_54301_54345[(2)] = inst_54197);

(statearr_54301_54345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (9))){
var inst_54199 = figwheel.client.heads_up.clear.call(null);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(12),inst_54199);
} else {
if((state_val_54270 === (5))){
var inst_54190 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54269__$1 = state_54269;
var statearr_54302_54346 = state_54269__$1;
(statearr_54302_54346[(2)] = inst_54190);

(statearr_54302_54346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (14))){
var inst_54217 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54217)){
var statearr_54303_54347 = state_54269__$1;
(statearr_54303_54347[(1)] = (18));

} else {
var statearr_54304_54348 = state_54269__$1;
(statearr_54304_54348[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (26))){
var inst_54241 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54269__$1 = state_54269;
if(cljs.core.truth_(inst_54241)){
var statearr_54305_54349 = state_54269__$1;
(statearr_54305_54349[(1)] = (30));

} else {
var statearr_54306_54350 = state_54269__$1;
(statearr_54306_54350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (16))){
var inst_54209 = (state_54269[(2)]);
var inst_54210 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54211 = figwheel.client.format_messages.call(null,inst_54210);
var inst_54212 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54213 = figwheel.client.heads_up.display_error.call(null,inst_54211,inst_54212);
var state_54269__$1 = (function (){var statearr_54307 = state_54269;
(statearr_54307[(9)] = inst_54209);

return statearr_54307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(17),inst_54213);
} else {
if((state_val_54270 === (30))){
var inst_54243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54244 = figwheel.client.heads_up.display_warning.call(null,inst_54243);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(33),inst_54244);
} else {
if((state_val_54270 === (10))){
var inst_54203 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54308_54351 = state_54269__$1;
(statearr_54308_54351[(2)] = inst_54203);

(statearr_54308_54351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (18))){
var inst_54219 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54220 = figwheel.client.format_messages.call(null,inst_54219);
var inst_54221 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54222 = figwheel.client.heads_up.display_error.call(null,inst_54220,inst_54221);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(21),inst_54222);
} else {
if((state_val_54270 === (37))){
var inst_54252 = (state_54269[(2)]);
var state_54269__$1 = state_54269;
var statearr_54309_54352 = state_54269__$1;
(statearr_54309_54352[(2)] = inst_54252);

(statearr_54309_54352[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54270 === (8))){
var inst_54195 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54269__$1 = state_54269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54269__$1,(11),inst_54195);
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
});})(c__41374__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__41353__auto__,c__41374__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto____0 = (function (){
var statearr_54313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54313[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto__);

(statearr_54313[(1)] = (1));

return statearr_54313;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto____1 = (function (state_54269){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_54269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e54314){if((e54314 instanceof Object)){
var ex__41357__auto__ = e54314;
var statearr_54315_54353 = state_54269;
(statearr_54315_54353[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54354 = state_54269;
state_54269 = G__54354;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto__ = function(state_54269){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto____1.call(this,state_54269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__,msg_hist,msg_names,msg))
})();
var state__41376__auto__ = (function (){var statearr_54316 = f__41375__auto__.call(null);
(statearr_54316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_54316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__,msg_hist,msg_names,msg))
);

return c__41374__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__41374__auto___54417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___54417,ch){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___54417,ch){
return (function (state_54400){
var state_val_54401 = (state_54400[(1)]);
if((state_val_54401 === (1))){
var state_54400__$1 = state_54400;
var statearr_54402_54418 = state_54400__$1;
(statearr_54402_54418[(2)] = null);

(statearr_54402_54418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54401 === (2))){
var state_54400__$1 = state_54400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54400__$1,(4),ch);
} else {
if((state_val_54401 === (3))){
var inst_54398 = (state_54400[(2)]);
var state_54400__$1 = state_54400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54400__$1,inst_54398);
} else {
if((state_val_54401 === (4))){
var inst_54388 = (state_54400[(7)]);
var inst_54388__$1 = (state_54400[(2)]);
var state_54400__$1 = (function (){var statearr_54403 = state_54400;
(statearr_54403[(7)] = inst_54388__$1);

return statearr_54403;
})();
if(cljs.core.truth_(inst_54388__$1)){
var statearr_54404_54419 = state_54400__$1;
(statearr_54404_54419[(1)] = (5));

} else {
var statearr_54405_54420 = state_54400__$1;
(statearr_54405_54420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54401 === (5))){
var inst_54388 = (state_54400[(7)]);
var inst_54390 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54388);
var state_54400__$1 = state_54400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54400__$1,(8),inst_54390);
} else {
if((state_val_54401 === (6))){
var state_54400__$1 = state_54400;
var statearr_54406_54421 = state_54400__$1;
(statearr_54406_54421[(2)] = null);

(statearr_54406_54421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54401 === (7))){
var inst_54396 = (state_54400[(2)]);
var state_54400__$1 = state_54400;
var statearr_54407_54422 = state_54400__$1;
(statearr_54407_54422[(2)] = inst_54396);

(statearr_54407_54422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54401 === (8))){
var inst_54392 = (state_54400[(2)]);
var state_54400__$1 = (function (){var statearr_54408 = state_54400;
(statearr_54408[(8)] = inst_54392);

return statearr_54408;
})();
var statearr_54409_54423 = state_54400__$1;
(statearr_54409_54423[(2)] = null);

(statearr_54409_54423[(1)] = (2));


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
});})(c__41374__auto___54417,ch))
;
return ((function (switch__41353__auto__,c__41374__auto___54417,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__41354__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__41354__auto____0 = (function (){
var statearr_54413 = [null,null,null,null,null,null,null,null,null];
(statearr_54413[(0)] = figwheel$client$heads_up_plugin_$_state_machine__41354__auto__);

(statearr_54413[(1)] = (1));

return statearr_54413;
});
var figwheel$client$heads_up_plugin_$_state_machine__41354__auto____1 = (function (state_54400){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_54400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e54414){if((e54414 instanceof Object)){
var ex__41357__auto__ = e54414;
var statearr_54415_54424 = state_54400;
(statearr_54415_54424[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54425 = state_54400;
state_54400 = G__54425;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__41354__auto__ = function(state_54400){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__41354__auto____1.call(this,state_54400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__41354__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__41354__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___54417,ch))
})();
var state__41376__auto__ = (function (){var statearr_54416 = f__41375__auto__.call(null);
(statearr_54416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___54417);

return statearr_54416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___54417,ch))
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
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_54446){
var state_val_54447 = (state_54446[(1)]);
if((state_val_54447 === (1))){
var inst_54441 = cljs.core.async.timeout.call(null,(3000));
var state_54446__$1 = state_54446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54446__$1,(2),inst_54441);
} else {
if((state_val_54447 === (2))){
var inst_54443 = (state_54446[(2)]);
var inst_54444 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54446__$1 = (function (){var statearr_54448 = state_54446;
(statearr_54448[(7)] = inst_54443);

return statearr_54448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54446__$1,inst_54444);
} else {
return null;
}
}
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__41354__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__41354__auto____0 = (function (){
var statearr_54452 = [null,null,null,null,null,null,null,null];
(statearr_54452[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__41354__auto__);

(statearr_54452[(1)] = (1));

return statearr_54452;
});
var figwheel$client$enforce_project_plugin_$_state_machine__41354__auto____1 = (function (state_54446){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_54446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e54453){if((e54453 instanceof Object)){
var ex__41357__auto__ = e54453;
var statearr_54454_54456 = state_54446;
(statearr_54454_54456[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54457 = state_54446;
state_54446 = G__54457;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__41354__auto__ = function(state_54446){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__41354__auto____1.call(this,state_54446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__41354__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__41354__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_54455 = f__41375__auto__.call(null);
(statearr_54455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_54455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54458){
var map__54465 = p__54458;
var map__54465__$1 = ((((!((map__54465 == null)))?((((map__54465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54465):map__54465);
var ed = map__54465__$1;
var formatted_exception = cljs.core.get.call(null,map__54465__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54465__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54465__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54467_54471 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54468_54472 = null;
var count__54469_54473 = (0);
var i__54470_54474 = (0);
while(true){
if((i__54470_54474 < count__54469_54473)){
var msg_54475 = cljs.core._nth.call(null,chunk__54468_54472,i__54470_54474);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54475);

var G__54476 = seq__54467_54471;
var G__54477 = chunk__54468_54472;
var G__54478 = count__54469_54473;
var G__54479 = (i__54470_54474 + (1));
seq__54467_54471 = G__54476;
chunk__54468_54472 = G__54477;
count__54469_54473 = G__54478;
i__54470_54474 = G__54479;
continue;
} else {
var temp__4657__auto___54480 = cljs.core.seq.call(null,seq__54467_54471);
if(temp__4657__auto___54480){
var seq__54467_54481__$1 = temp__4657__auto___54480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54467_54481__$1)){
var c__38246__auto___54482 = cljs.core.chunk_first.call(null,seq__54467_54481__$1);
var G__54483 = cljs.core.chunk_rest.call(null,seq__54467_54481__$1);
var G__54484 = c__38246__auto___54482;
var G__54485 = cljs.core.count.call(null,c__38246__auto___54482);
var G__54486 = (0);
seq__54467_54471 = G__54483;
chunk__54468_54472 = G__54484;
count__54469_54473 = G__54485;
i__54470_54474 = G__54486;
continue;
} else {
var msg_54487 = cljs.core.first.call(null,seq__54467_54481__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54487);

var G__54488 = cljs.core.next.call(null,seq__54467_54481__$1);
var G__54489 = null;
var G__54490 = (0);
var G__54491 = (0);
seq__54467_54471 = G__54488;
chunk__54468_54472 = G__54489;
count__54469_54473 = G__54490;
i__54470_54474 = G__54491;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54492){
var map__54495 = p__54492;
var map__54495__$1 = ((((!((map__54495 == null)))?((((map__54495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54495):map__54495);
var w = map__54495__$1;
var message = cljs.core.get.call(null,map__54495__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__37431__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__37431__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__37431__auto__;
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
var seq__54503 = cljs.core.seq.call(null,plugins);
var chunk__54504 = null;
var count__54505 = (0);
var i__54506 = (0);
while(true){
if((i__54506 < count__54505)){
var vec__54507 = cljs.core._nth.call(null,chunk__54504,i__54506);
var k = cljs.core.nth.call(null,vec__54507,(0),null);
var plugin = cljs.core.nth.call(null,vec__54507,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54509 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54503,chunk__54504,count__54505,i__54506,pl_54509,vec__54507,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54509.call(null,msg_hist);
});})(seq__54503,chunk__54504,count__54505,i__54506,pl_54509,vec__54507,k,plugin))
);
} else {
}

var G__54510 = seq__54503;
var G__54511 = chunk__54504;
var G__54512 = count__54505;
var G__54513 = (i__54506 + (1));
seq__54503 = G__54510;
chunk__54504 = G__54511;
count__54505 = G__54512;
i__54506 = G__54513;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54503);
if(temp__4657__auto__){
var seq__54503__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54503__$1)){
var c__38246__auto__ = cljs.core.chunk_first.call(null,seq__54503__$1);
var G__54514 = cljs.core.chunk_rest.call(null,seq__54503__$1);
var G__54515 = c__38246__auto__;
var G__54516 = cljs.core.count.call(null,c__38246__auto__);
var G__54517 = (0);
seq__54503 = G__54514;
chunk__54504 = G__54515;
count__54505 = G__54516;
i__54506 = G__54517;
continue;
} else {
var vec__54508 = cljs.core.first.call(null,seq__54503__$1);
var k = cljs.core.nth.call(null,vec__54508,(0),null);
var plugin = cljs.core.nth.call(null,vec__54508,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54518 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54503,chunk__54504,count__54505,i__54506,pl_54518,vec__54508,k,plugin,seq__54503__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54518.call(null,msg_hist);
});})(seq__54503,chunk__54504,count__54505,i__54506,pl_54518,vec__54508,k,plugin,seq__54503__$1,temp__4657__auto__))
);
} else {
}

var G__54519 = cljs.core.next.call(null,seq__54503__$1);
var G__54520 = null;
var G__54521 = (0);
var G__54522 = (0);
seq__54503 = G__54519;
chunk__54504 = G__54520;
count__54505 = G__54521;
i__54506 = G__54522;
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
var args54523 = [];
var len__38501__auto___54526 = arguments.length;
var i__38502__auto___54527 = (0);
while(true){
if((i__38502__auto___54527 < len__38501__auto___54526)){
args54523.push((arguments[i__38502__auto___54527]));

var G__54528 = (i__38502__auto___54527 + (1));
i__38502__auto___54527 = G__54528;
continue;
} else {
}
break;
}

var G__54525 = args54523.length;
switch (G__54525) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54523.length)].join('')));

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
var args__38508__auto__ = [];
var len__38501__auto___54534 = arguments.length;
var i__38502__auto___54535 = (0);
while(true){
if((i__38502__auto___54535 < len__38501__auto___54534)){
args__38508__auto__.push((arguments[i__38502__auto___54535]));

var G__54536 = (i__38502__auto___54535 + (1));
i__38502__auto___54535 = G__54536;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54531){
var map__54532 = p__54531;
var map__54532__$1 = ((((!((map__54532 == null)))?((((map__54532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54532):map__54532);
var opts = map__54532__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54530){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54530));
});

//# sourceMappingURL=client.js.map?rel=1459008362068