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
var pred__42300 = cljs.core._EQ_;
var expr__42301 = (function (){var or__35516__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e42304){if((e42304 instanceof Error)){
var e = e42304;
return false;
} else {
throw e42304;

}
}})();
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__42300.call(null,"true",expr__42301))){
return true;
} else {
if(cljs.core.truth_(pred__42300.call(null,"false",expr__42301))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__42301)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e42306){if((e42306 instanceof Error)){
var e = e42306;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e42306;

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
var args__36581__auto__ = [];
var len__36574__auto___42308 = arguments.length;
var i__36575__auto___42309 = (0);
while(true){
if((i__36575__auto___42309 < len__36574__auto___42308)){
args__36581__auto__.push((arguments[i__36575__auto___42309]));

var G__42310 = (i__36575__auto___42309 + (1));
i__36575__auto___42309 = G__42310;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq42307){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42307));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42311){
var map__42314 = p__42311;
var map__42314__$1 = ((((!((map__42314 == null)))?((((map__42314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42314):map__42314);
var message = cljs.core.get.call(null,map__42314__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42314__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__35516__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__35504__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__35504__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__35504__auto__;
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
var c__37632__auto___42476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___42476,ch){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___42476,ch){
return (function (state_42445){
var state_val_42446 = (state_42445[(1)]);
if((state_val_42446 === (7))){
var inst_42441 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42447_42477 = state_42445__$1;
(statearr_42447_42477[(2)] = inst_42441);

(statearr_42447_42477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (1))){
var state_42445__$1 = state_42445;
var statearr_42448_42478 = state_42445__$1;
(statearr_42448_42478[(2)] = null);

(statearr_42448_42478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (4))){
var inst_42398 = (state_42445[(7)]);
var inst_42398__$1 = (state_42445[(2)]);
var state_42445__$1 = (function (){var statearr_42449 = state_42445;
(statearr_42449[(7)] = inst_42398__$1);

return statearr_42449;
})();
if(cljs.core.truth_(inst_42398__$1)){
var statearr_42450_42479 = state_42445__$1;
(statearr_42450_42479[(1)] = (5));

} else {
var statearr_42451_42480 = state_42445__$1;
(statearr_42451_42480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (15))){
var inst_42405 = (state_42445[(8)]);
var inst_42420 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42405);
var inst_42421 = cljs.core.first.call(null,inst_42420);
var inst_42422 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42421);
var inst_42423 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42422)].join('');
var inst_42424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42423);
var state_42445__$1 = state_42445;
var statearr_42452_42481 = state_42445__$1;
(statearr_42452_42481[(2)] = inst_42424);

(statearr_42452_42481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (13))){
var inst_42429 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42453_42482 = state_42445__$1;
(statearr_42453_42482[(2)] = inst_42429);

(statearr_42453_42482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (6))){
var state_42445__$1 = state_42445;
var statearr_42454_42483 = state_42445__$1;
(statearr_42454_42483[(2)] = null);

(statearr_42454_42483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (17))){
var inst_42427 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42455_42484 = state_42445__$1;
(statearr_42455_42484[(2)] = inst_42427);

(statearr_42455_42484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (3))){
var inst_42443 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42445__$1,inst_42443);
} else {
if((state_val_42446 === (12))){
var inst_42404 = (state_42445[(9)]);
var inst_42418 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42404,opts);
var state_42445__$1 = state_42445;
if(cljs.core.truth_(inst_42418)){
var statearr_42456_42485 = state_42445__$1;
(statearr_42456_42485[(1)] = (15));

} else {
var statearr_42457_42486 = state_42445__$1;
(statearr_42457_42486[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (2))){
var state_42445__$1 = state_42445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42445__$1,(4),ch);
} else {
if((state_val_42446 === (11))){
var inst_42405 = (state_42445[(8)]);
var inst_42410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42411 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42405);
var inst_42412 = cljs.core.async.timeout.call(null,(1000));
var inst_42413 = [inst_42411,inst_42412];
var inst_42414 = (new cljs.core.PersistentVector(null,2,(5),inst_42410,inst_42413,null));
var state_42445__$1 = state_42445;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42445__$1,(14),inst_42414);
} else {
if((state_val_42446 === (9))){
var inst_42405 = (state_42445[(8)]);
var inst_42431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42432 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42405);
var inst_42433 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42432);
var inst_42434 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42433)].join('');
var inst_42435 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42434);
var state_42445__$1 = (function (){var statearr_42458 = state_42445;
(statearr_42458[(10)] = inst_42431);

return statearr_42458;
})();
var statearr_42459_42487 = state_42445__$1;
(statearr_42459_42487[(2)] = inst_42435);

(statearr_42459_42487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (5))){
var inst_42398 = (state_42445[(7)]);
var inst_42400 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42401 = (new cljs.core.PersistentArrayMap(null,2,inst_42400,null));
var inst_42402 = (new cljs.core.PersistentHashSet(null,inst_42401,null));
var inst_42403 = figwheel.client.focus_msgs.call(null,inst_42402,inst_42398);
var inst_42404 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42403);
var inst_42405 = cljs.core.first.call(null,inst_42403);
var inst_42406 = figwheel.client.autoload_QMARK_.call(null);
var state_42445__$1 = (function (){var statearr_42460 = state_42445;
(statearr_42460[(8)] = inst_42405);

(statearr_42460[(9)] = inst_42404);

return statearr_42460;
})();
if(cljs.core.truth_(inst_42406)){
var statearr_42461_42488 = state_42445__$1;
(statearr_42461_42488[(1)] = (8));

} else {
var statearr_42462_42489 = state_42445__$1;
(statearr_42462_42489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (14))){
var inst_42416 = (state_42445[(2)]);
var state_42445__$1 = state_42445;
var statearr_42463_42490 = state_42445__$1;
(statearr_42463_42490[(2)] = inst_42416);

(statearr_42463_42490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (16))){
var state_42445__$1 = state_42445;
var statearr_42464_42491 = state_42445__$1;
(statearr_42464_42491[(2)] = null);

(statearr_42464_42491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (10))){
var inst_42437 = (state_42445[(2)]);
var state_42445__$1 = (function (){var statearr_42465 = state_42445;
(statearr_42465[(11)] = inst_42437);

return statearr_42465;
})();
var statearr_42466_42492 = state_42445__$1;
(statearr_42466_42492[(2)] = null);

(statearr_42466_42492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42446 === (8))){
var inst_42404 = (state_42445[(9)]);
var inst_42408 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42404,opts);
var state_42445__$1 = state_42445;
if(cljs.core.truth_(inst_42408)){
var statearr_42467_42493 = state_42445__$1;
(statearr_42467_42493[(1)] = (11));

} else {
var statearr_42468_42494 = state_42445__$1;
(statearr_42468_42494[(1)] = (12));

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
});})(c__37632__auto___42476,ch))
;
return ((function (switch__37611__auto__,c__37632__auto___42476,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____0 = (function (){
var statearr_42472 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42472[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__);

(statearr_42472[(1)] = (1));

return statearr_42472;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____1 = (function (state_42445){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42473){if((e42473 instanceof Object)){
var ex__37615__auto__ = e42473;
var statearr_42474_42495 = state_42445;
(statearr_42474_42495[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42496 = state_42445;
state_42445 = G__42496;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__ = function(state_42445){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____1.call(this,state_42445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___42476,ch))
})();
var state__37634__auto__ = (function (){var statearr_42475 = f__37633__auto__.call(null);
(statearr_42475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___42476);

return statearr_42475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___42476,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42497_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42497_SHARP_));
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
var base_path_42504 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42504){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_42502 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_42503 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42503;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42502;
}}catch (e42501){if((e42501 instanceof Error)){
var e = e42501;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42504], null));
} else {
var e = e42501;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42504))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42505){
var map__42512 = p__42505;
var map__42512__$1 = ((((!((map__42512 == null)))?((((map__42512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42512):map__42512);
var opts = map__42512__$1;
var build_id = cljs.core.get.call(null,map__42512__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42512,map__42512__$1,opts,build_id){
return (function (p__42514){
var vec__42515 = p__42514;
var map__42516 = cljs.core.nth.call(null,vec__42515,(0),null);
var map__42516__$1 = ((((!((map__42516 == null)))?((((map__42516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42516):map__42516);
var msg = map__42516__$1;
var msg_name = cljs.core.get.call(null,map__42516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42515,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42515,map__42516,map__42516__$1,msg,msg_name,_,map__42512,map__42512__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42515,map__42516,map__42516__$1,msg,msg_name,_,map__42512,map__42512__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42512,map__42512__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42522){
var vec__42523 = p__42522;
var map__42524 = cljs.core.nth.call(null,vec__42523,(0),null);
var map__42524__$1 = ((((!((map__42524 == null)))?((((map__42524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42524):map__42524);
var msg = map__42524__$1;
var msg_name = cljs.core.get.call(null,map__42524__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42523,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42526){
var map__42536 = p__42526;
var map__42536__$1 = ((((!((map__42536 == null)))?((((map__42536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42536):map__42536);
var on_compile_warning = cljs.core.get.call(null,map__42536__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42536__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42536,map__42536__$1,on_compile_warning,on_compile_fail){
return (function (p__42538){
var vec__42539 = p__42538;
var map__42540 = cljs.core.nth.call(null,vec__42539,(0),null);
var map__42540__$1 = ((((!((map__42540 == null)))?((((map__42540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42540):map__42540);
var msg = map__42540__$1;
var msg_name = cljs.core.get.call(null,map__42540__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42539,(1));
var pred__42542 = cljs.core._EQ_;
var expr__42543 = msg_name;
if(cljs.core.truth_(pred__42542.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42543))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42542.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42543))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42536,map__42536__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__,msg_hist,msg_names,msg){
return (function (state_42759){
var state_val_42760 = (state_42759[(1)]);
if((state_val_42760 === (7))){
var inst_42683 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42683)){
var statearr_42761_42807 = state_42759__$1;
(statearr_42761_42807[(1)] = (8));

} else {
var statearr_42762_42808 = state_42759__$1;
(statearr_42762_42808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (20))){
var inst_42753 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42763_42809 = state_42759__$1;
(statearr_42763_42809[(2)] = inst_42753);

(statearr_42763_42809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (27))){
var inst_42749 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42764_42810 = state_42759__$1;
(statearr_42764_42810[(2)] = inst_42749);

(statearr_42764_42810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (1))){
var inst_42676 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42676)){
var statearr_42765_42811 = state_42759__$1;
(statearr_42765_42811[(1)] = (2));

} else {
var statearr_42766_42812 = state_42759__$1;
(statearr_42766_42812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (24))){
var inst_42751 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42767_42813 = state_42759__$1;
(statearr_42767_42813[(2)] = inst_42751);

(statearr_42767_42813[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (4))){
var inst_42757 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42759__$1,inst_42757);
} else {
if((state_val_42760 === (15))){
var inst_42755 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42768_42814 = state_42759__$1;
(statearr_42768_42814[(2)] = inst_42755);

(statearr_42768_42814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (21))){
var inst_42714 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42769_42815 = state_42759__$1;
(statearr_42769_42815[(2)] = inst_42714);

(statearr_42769_42815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (31))){
var inst_42738 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42738)){
var statearr_42770_42816 = state_42759__$1;
(statearr_42770_42816[(1)] = (34));

} else {
var statearr_42771_42817 = state_42759__$1;
(statearr_42771_42817[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (32))){
var inst_42747 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42772_42818 = state_42759__$1;
(statearr_42772_42818[(2)] = inst_42747);

(statearr_42772_42818[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (33))){
var inst_42736 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42773_42819 = state_42759__$1;
(statearr_42773_42819[(2)] = inst_42736);

(statearr_42773_42819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (13))){
var inst_42697 = figwheel.client.heads_up.clear.call(null);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(16),inst_42697);
} else {
if((state_val_42760 === (22))){
var inst_42718 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42719 = figwheel.client.heads_up.append_message.call(null,inst_42718);
var state_42759__$1 = state_42759;
var statearr_42774_42820 = state_42759__$1;
(statearr_42774_42820[(2)] = inst_42719);

(statearr_42774_42820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (36))){
var inst_42745 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42775_42821 = state_42759__$1;
(statearr_42775_42821[(2)] = inst_42745);

(statearr_42775_42821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (29))){
var inst_42729 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42776_42822 = state_42759__$1;
(statearr_42776_42822[(2)] = inst_42729);

(statearr_42776_42822[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (6))){
var inst_42678 = (state_42759[(7)]);
var state_42759__$1 = state_42759;
var statearr_42777_42823 = state_42759__$1;
(statearr_42777_42823[(2)] = inst_42678);

(statearr_42777_42823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (28))){
var inst_42725 = (state_42759[(2)]);
var inst_42726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42727 = figwheel.client.heads_up.display_warning.call(null,inst_42726);
var state_42759__$1 = (function (){var statearr_42778 = state_42759;
(statearr_42778[(8)] = inst_42725);

return statearr_42778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(29),inst_42727);
} else {
if((state_val_42760 === (25))){
var inst_42723 = figwheel.client.heads_up.clear.call(null);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(28),inst_42723);
} else {
if((state_val_42760 === (34))){
var inst_42740 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(37),inst_42740);
} else {
if((state_val_42760 === (17))){
var inst_42705 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42779_42824 = state_42759__$1;
(statearr_42779_42824[(2)] = inst_42705);

(statearr_42779_42824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (3))){
var inst_42695 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42695)){
var statearr_42780_42825 = state_42759__$1;
(statearr_42780_42825[(1)] = (13));

} else {
var statearr_42781_42826 = state_42759__$1;
(statearr_42781_42826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (12))){
var inst_42691 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42782_42827 = state_42759__$1;
(statearr_42782_42827[(2)] = inst_42691);

(statearr_42782_42827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (2))){
var inst_42678 = (state_42759[(7)]);
var inst_42678__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42759__$1 = (function (){var statearr_42783 = state_42759;
(statearr_42783[(7)] = inst_42678__$1);

return statearr_42783;
})();
if(cljs.core.truth_(inst_42678__$1)){
var statearr_42784_42828 = state_42759__$1;
(statearr_42784_42828[(1)] = (5));

} else {
var statearr_42785_42829 = state_42759__$1;
(statearr_42785_42829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (23))){
var inst_42721 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42721)){
var statearr_42786_42830 = state_42759__$1;
(statearr_42786_42830[(1)] = (25));

} else {
var statearr_42787_42831 = state_42759__$1;
(statearr_42787_42831[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (35))){
var state_42759__$1 = state_42759;
var statearr_42788_42832 = state_42759__$1;
(statearr_42788_42832[(2)] = null);

(statearr_42788_42832[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (19))){
var inst_42716 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42716)){
var statearr_42789_42833 = state_42759__$1;
(statearr_42789_42833[(1)] = (22));

} else {
var statearr_42790_42834 = state_42759__$1;
(statearr_42790_42834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (11))){
var inst_42687 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42791_42835 = state_42759__$1;
(statearr_42791_42835[(2)] = inst_42687);

(statearr_42791_42835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (9))){
var inst_42689 = figwheel.client.heads_up.clear.call(null);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(12),inst_42689);
} else {
if((state_val_42760 === (5))){
var inst_42680 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42759__$1 = state_42759;
var statearr_42792_42836 = state_42759__$1;
(statearr_42792_42836[(2)] = inst_42680);

(statearr_42792_42836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (14))){
var inst_42707 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42707)){
var statearr_42793_42837 = state_42759__$1;
(statearr_42793_42837[(1)] = (18));

} else {
var statearr_42794_42838 = state_42759__$1;
(statearr_42794_42838[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (26))){
var inst_42731 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42759__$1 = state_42759;
if(cljs.core.truth_(inst_42731)){
var statearr_42795_42839 = state_42759__$1;
(statearr_42795_42839[(1)] = (30));

} else {
var statearr_42796_42840 = state_42759__$1;
(statearr_42796_42840[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (16))){
var inst_42699 = (state_42759[(2)]);
var inst_42700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42701 = figwheel.client.format_messages.call(null,inst_42700);
var inst_42702 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42703 = figwheel.client.heads_up.display_error.call(null,inst_42701,inst_42702);
var state_42759__$1 = (function (){var statearr_42797 = state_42759;
(statearr_42797[(9)] = inst_42699);

return statearr_42797;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(17),inst_42703);
} else {
if((state_val_42760 === (30))){
var inst_42733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42734 = figwheel.client.heads_up.display_warning.call(null,inst_42733);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(33),inst_42734);
} else {
if((state_val_42760 === (10))){
var inst_42693 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42798_42841 = state_42759__$1;
(statearr_42798_42841[(2)] = inst_42693);

(statearr_42798_42841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (18))){
var inst_42709 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42710 = figwheel.client.format_messages.call(null,inst_42709);
var inst_42711 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42712 = figwheel.client.heads_up.display_error.call(null,inst_42710,inst_42711);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(21),inst_42712);
} else {
if((state_val_42760 === (37))){
var inst_42742 = (state_42759[(2)]);
var state_42759__$1 = state_42759;
var statearr_42799_42842 = state_42759__$1;
(statearr_42799_42842[(2)] = inst_42742);

(statearr_42799_42842[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42760 === (8))){
var inst_42685 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42759__$1 = state_42759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42759__$1,(11),inst_42685);
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
});})(c__37632__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37611__auto__,c__37632__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____0 = (function (){
var statearr_42803 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42803[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__);

(statearr_42803[(1)] = (1));

return statearr_42803;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____1 = (function (state_42759){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42804){if((e42804 instanceof Object)){
var ex__37615__auto__ = e42804;
var statearr_42805_42843 = state_42759;
(statearr_42805_42843[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42844 = state_42759;
state_42759 = G__42844;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__ = function(state_42759){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____1.call(this,state_42759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__,msg_hist,msg_names,msg))
})();
var state__37634__auto__ = (function (){var statearr_42806 = f__37633__auto__.call(null);
(statearr_42806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_42806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__,msg_hist,msg_names,msg))
);

return c__37632__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37632__auto___42907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___42907,ch){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___42907,ch){
return (function (state_42890){
var state_val_42891 = (state_42890[(1)]);
if((state_val_42891 === (1))){
var state_42890__$1 = state_42890;
var statearr_42892_42908 = state_42890__$1;
(statearr_42892_42908[(2)] = null);

(statearr_42892_42908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (2))){
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42890__$1,(4),ch);
} else {
if((state_val_42891 === (3))){
var inst_42888 = (state_42890[(2)]);
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42890__$1,inst_42888);
} else {
if((state_val_42891 === (4))){
var inst_42878 = (state_42890[(7)]);
var inst_42878__$1 = (state_42890[(2)]);
var state_42890__$1 = (function (){var statearr_42893 = state_42890;
(statearr_42893[(7)] = inst_42878__$1);

return statearr_42893;
})();
if(cljs.core.truth_(inst_42878__$1)){
var statearr_42894_42909 = state_42890__$1;
(statearr_42894_42909[(1)] = (5));

} else {
var statearr_42895_42910 = state_42890__$1;
(statearr_42895_42910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (5))){
var inst_42878 = (state_42890[(7)]);
var inst_42880 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42878);
var state_42890__$1 = state_42890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42890__$1,(8),inst_42880);
} else {
if((state_val_42891 === (6))){
var state_42890__$1 = state_42890;
var statearr_42896_42911 = state_42890__$1;
(statearr_42896_42911[(2)] = null);

(statearr_42896_42911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (7))){
var inst_42886 = (state_42890[(2)]);
var state_42890__$1 = state_42890;
var statearr_42897_42912 = state_42890__$1;
(statearr_42897_42912[(2)] = inst_42886);

(statearr_42897_42912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42891 === (8))){
var inst_42882 = (state_42890[(2)]);
var state_42890__$1 = (function (){var statearr_42898 = state_42890;
(statearr_42898[(8)] = inst_42882);

return statearr_42898;
})();
var statearr_42899_42913 = state_42890__$1;
(statearr_42899_42913[(2)] = null);

(statearr_42899_42913[(1)] = (2));


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
});})(c__37632__auto___42907,ch))
;
return ((function (switch__37611__auto__,c__37632__auto___42907,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37612__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37612__auto____0 = (function (){
var statearr_42903 = [null,null,null,null,null,null,null,null,null];
(statearr_42903[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37612__auto__);

(statearr_42903[(1)] = (1));

return statearr_42903;
});
var figwheel$client$heads_up_plugin_$_state_machine__37612__auto____1 = (function (state_42890){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42904){if((e42904 instanceof Object)){
var ex__37615__auto__ = e42904;
var statearr_42905_42914 = state_42890;
(statearr_42905_42914[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42915 = state_42890;
state_42890 = G__42915;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37612__auto__ = function(state_42890){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37612__auto____1.call(this,state_42890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37612__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37612__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___42907,ch))
})();
var state__37634__auto__ = (function (){var statearr_42906 = f__37633__auto__.call(null);
(statearr_42906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___42907);

return statearr_42906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___42907,ch))
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
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_42936){
var state_val_42937 = (state_42936[(1)]);
if((state_val_42937 === (1))){
var inst_42931 = cljs.core.async.timeout.call(null,(3000));
var state_42936__$1 = state_42936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42936__$1,(2),inst_42931);
} else {
if((state_val_42937 === (2))){
var inst_42933 = (state_42936[(2)]);
var inst_42934 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42936__$1 = (function (){var statearr_42938 = state_42936;
(statearr_42938[(7)] = inst_42933);

return statearr_42938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42936__$1,inst_42934);
} else {
return null;
}
}
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____0 = (function (){
var statearr_42942 = [null,null,null,null,null,null,null,null];
(statearr_42942[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__);

(statearr_42942[(1)] = (1));

return statearr_42942;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____1 = (function (state_42936){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42943){if((e42943 instanceof Object)){
var ex__37615__auto__ = e42943;
var statearr_42944_42946 = state_42936;
(statearr_42944_42946[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42947 = state_42936;
state_42936 = G__42947;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__ = function(state_42936){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____1.call(this,state_42936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_42945 = f__37633__auto__.call(null);
(statearr_42945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_42945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42948){
var map__42955 = p__42948;
var map__42955__$1 = ((((!((map__42955 == null)))?((((map__42955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42955):map__42955);
var ed = map__42955__$1;
var formatted_exception = cljs.core.get.call(null,map__42955__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42955__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42955__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42957_42961 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42958_42962 = null;
var count__42959_42963 = (0);
var i__42960_42964 = (0);
while(true){
if((i__42960_42964 < count__42959_42963)){
var msg_42965 = cljs.core._nth.call(null,chunk__42958_42962,i__42960_42964);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42965);

var G__42966 = seq__42957_42961;
var G__42967 = chunk__42958_42962;
var G__42968 = count__42959_42963;
var G__42969 = (i__42960_42964 + (1));
seq__42957_42961 = G__42966;
chunk__42958_42962 = G__42967;
count__42959_42963 = G__42968;
i__42960_42964 = G__42969;
continue;
} else {
var temp__4425__auto___42970 = cljs.core.seq.call(null,seq__42957_42961);
if(temp__4425__auto___42970){
var seq__42957_42971__$1 = temp__4425__auto___42970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42957_42971__$1)){
var c__36319__auto___42972 = cljs.core.chunk_first.call(null,seq__42957_42971__$1);
var G__42973 = cljs.core.chunk_rest.call(null,seq__42957_42971__$1);
var G__42974 = c__36319__auto___42972;
var G__42975 = cljs.core.count.call(null,c__36319__auto___42972);
var G__42976 = (0);
seq__42957_42961 = G__42973;
chunk__42958_42962 = G__42974;
count__42959_42963 = G__42975;
i__42960_42964 = G__42976;
continue;
} else {
var msg_42977 = cljs.core.first.call(null,seq__42957_42971__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42977);

var G__42978 = cljs.core.next.call(null,seq__42957_42971__$1);
var G__42979 = null;
var G__42980 = (0);
var G__42981 = (0);
seq__42957_42961 = G__42978;
chunk__42958_42962 = G__42979;
count__42959_42963 = G__42980;
i__42960_42964 = G__42981;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42982){
var map__42985 = p__42982;
var map__42985__$1 = ((((!((map__42985 == null)))?((((map__42985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42985):map__42985);
var w = map__42985__$1;
var message = cljs.core.get.call(null,map__42985__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__35504__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__35504__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__35504__auto__;
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
var seq__42993 = cljs.core.seq.call(null,plugins);
var chunk__42994 = null;
var count__42995 = (0);
var i__42996 = (0);
while(true){
if((i__42996 < count__42995)){
var vec__42997 = cljs.core._nth.call(null,chunk__42994,i__42996);
var k = cljs.core.nth.call(null,vec__42997,(0),null);
var plugin = cljs.core.nth.call(null,vec__42997,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42999 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42993,chunk__42994,count__42995,i__42996,pl_42999,vec__42997,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42999.call(null,msg_hist);
});})(seq__42993,chunk__42994,count__42995,i__42996,pl_42999,vec__42997,k,plugin))
);
} else {
}

var G__43000 = seq__42993;
var G__43001 = chunk__42994;
var G__43002 = count__42995;
var G__43003 = (i__42996 + (1));
seq__42993 = G__43000;
chunk__42994 = G__43001;
count__42995 = G__43002;
i__42996 = G__43003;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42993);
if(temp__4425__auto__){
var seq__42993__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42993__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__42993__$1);
var G__43004 = cljs.core.chunk_rest.call(null,seq__42993__$1);
var G__43005 = c__36319__auto__;
var G__43006 = cljs.core.count.call(null,c__36319__auto__);
var G__43007 = (0);
seq__42993 = G__43004;
chunk__42994 = G__43005;
count__42995 = G__43006;
i__42996 = G__43007;
continue;
} else {
var vec__42998 = cljs.core.first.call(null,seq__42993__$1);
var k = cljs.core.nth.call(null,vec__42998,(0),null);
var plugin = cljs.core.nth.call(null,vec__42998,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43008 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42993,chunk__42994,count__42995,i__42996,pl_43008,vec__42998,k,plugin,seq__42993__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43008.call(null,msg_hist);
});})(seq__42993,chunk__42994,count__42995,i__42996,pl_43008,vec__42998,k,plugin,seq__42993__$1,temp__4425__auto__))
);
} else {
}

var G__43009 = cljs.core.next.call(null,seq__42993__$1);
var G__43010 = null;
var G__43011 = (0);
var G__43012 = (0);
seq__42993 = G__43009;
chunk__42994 = G__43010;
count__42995 = G__43011;
i__42996 = G__43012;
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
var args43013 = [];
var len__36574__auto___43016 = arguments.length;
var i__36575__auto___43017 = (0);
while(true){
if((i__36575__auto___43017 < len__36574__auto___43016)){
args43013.push((arguments[i__36575__auto___43017]));

var G__43018 = (i__36575__auto___43017 + (1));
i__36575__auto___43017 = G__43018;
continue;
} else {
}
break;
}

var G__43015 = args43013.length;
switch (G__43015) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43013.length)].join('')));

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
var args__36581__auto__ = [];
var len__36574__auto___43024 = arguments.length;
var i__36575__auto___43025 = (0);
while(true){
if((i__36575__auto___43025 < len__36574__auto___43024)){
args__36581__auto__.push((arguments[i__36575__auto___43025]));

var G__43026 = (i__36575__auto___43025 + (1));
i__36575__auto___43025 = G__43026;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43021){
var map__43022 = p__43021;
var map__43022__$1 = ((((!((map__43022 == null)))?((((map__43022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43022):map__43022);
var opts = map__43022__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43020){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43020));
});

//# sourceMappingURL=client.js.map?rel=1456713003018