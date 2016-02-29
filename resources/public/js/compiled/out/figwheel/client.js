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
var pred__48683 = cljs.core._EQ_;
var expr__48684 = (function (){var or__35516__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e48687){if((e48687 instanceof Error)){
var e = e48687;
return false;
} else {
throw e48687;

}
}})();
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__48683.call(null,"true",expr__48684))){
return true;
} else {
if(cljs.core.truth_(pred__48683.call(null,"false",expr__48684))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__48684)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e48689){if((e48689 instanceof Error)){
var e = e48689;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e48689;

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
var len__36574__auto___48691 = arguments.length;
var i__36575__auto___48692 = (0);
while(true){
if((i__36575__auto___48692 < len__36574__auto___48691)){
args__36581__auto__.push((arguments[i__36575__auto___48692]));

var G__48693 = (i__36575__auto___48692 + (1));
i__36575__auto___48692 = G__48693;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq48690){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48690));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48694){
var map__48697 = p__48694;
var map__48697__$1 = ((((!((map__48697 == null)))?((((map__48697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48697):map__48697);
var message = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48697__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__37632__auto___48859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___48859,ch){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___48859,ch){
return (function (state_48828){
var state_val_48829 = (state_48828[(1)]);
if((state_val_48829 === (7))){
var inst_48824 = (state_48828[(2)]);
var state_48828__$1 = state_48828;
var statearr_48830_48860 = state_48828__$1;
(statearr_48830_48860[(2)] = inst_48824);

(statearr_48830_48860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (1))){
var state_48828__$1 = state_48828;
var statearr_48831_48861 = state_48828__$1;
(statearr_48831_48861[(2)] = null);

(statearr_48831_48861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (4))){
var inst_48781 = (state_48828[(7)]);
var inst_48781__$1 = (state_48828[(2)]);
var state_48828__$1 = (function (){var statearr_48832 = state_48828;
(statearr_48832[(7)] = inst_48781__$1);

return statearr_48832;
})();
if(cljs.core.truth_(inst_48781__$1)){
var statearr_48833_48862 = state_48828__$1;
(statearr_48833_48862[(1)] = (5));

} else {
var statearr_48834_48863 = state_48828__$1;
(statearr_48834_48863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (15))){
var inst_48788 = (state_48828[(8)]);
var inst_48803 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48788);
var inst_48804 = cljs.core.first.call(null,inst_48803);
var inst_48805 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48804);
var inst_48806 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48805)].join('');
var inst_48807 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48806);
var state_48828__$1 = state_48828;
var statearr_48835_48864 = state_48828__$1;
(statearr_48835_48864[(2)] = inst_48807);

(statearr_48835_48864[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (13))){
var inst_48812 = (state_48828[(2)]);
var state_48828__$1 = state_48828;
var statearr_48836_48865 = state_48828__$1;
(statearr_48836_48865[(2)] = inst_48812);

(statearr_48836_48865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (6))){
var state_48828__$1 = state_48828;
var statearr_48837_48866 = state_48828__$1;
(statearr_48837_48866[(2)] = null);

(statearr_48837_48866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (17))){
var inst_48810 = (state_48828[(2)]);
var state_48828__$1 = state_48828;
var statearr_48838_48867 = state_48828__$1;
(statearr_48838_48867[(2)] = inst_48810);

(statearr_48838_48867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (3))){
var inst_48826 = (state_48828[(2)]);
var state_48828__$1 = state_48828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48828__$1,inst_48826);
} else {
if((state_val_48829 === (12))){
var inst_48787 = (state_48828[(9)]);
var inst_48801 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48787,opts);
var state_48828__$1 = state_48828;
if(cljs.core.truth_(inst_48801)){
var statearr_48839_48868 = state_48828__$1;
(statearr_48839_48868[(1)] = (15));

} else {
var statearr_48840_48869 = state_48828__$1;
(statearr_48840_48869[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (2))){
var state_48828__$1 = state_48828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48828__$1,(4),ch);
} else {
if((state_val_48829 === (11))){
var inst_48788 = (state_48828[(8)]);
var inst_48793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48794 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48788);
var inst_48795 = cljs.core.async.timeout.call(null,(1000));
var inst_48796 = [inst_48794,inst_48795];
var inst_48797 = (new cljs.core.PersistentVector(null,2,(5),inst_48793,inst_48796,null));
var state_48828__$1 = state_48828;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48828__$1,(14),inst_48797);
} else {
if((state_val_48829 === (9))){
var inst_48788 = (state_48828[(8)]);
var inst_48814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48815 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48788);
var inst_48816 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48815);
var inst_48817 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48816)].join('');
var inst_48818 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48817);
var state_48828__$1 = (function (){var statearr_48841 = state_48828;
(statearr_48841[(10)] = inst_48814);

return statearr_48841;
})();
var statearr_48842_48870 = state_48828__$1;
(statearr_48842_48870[(2)] = inst_48818);

(statearr_48842_48870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (5))){
var inst_48781 = (state_48828[(7)]);
var inst_48783 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48784 = (new cljs.core.PersistentArrayMap(null,2,inst_48783,null));
var inst_48785 = (new cljs.core.PersistentHashSet(null,inst_48784,null));
var inst_48786 = figwheel.client.focus_msgs.call(null,inst_48785,inst_48781);
var inst_48787 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48786);
var inst_48788 = cljs.core.first.call(null,inst_48786);
var inst_48789 = figwheel.client.autoload_QMARK_.call(null);
var state_48828__$1 = (function (){var statearr_48843 = state_48828;
(statearr_48843[(8)] = inst_48788);

(statearr_48843[(9)] = inst_48787);

return statearr_48843;
})();
if(cljs.core.truth_(inst_48789)){
var statearr_48844_48871 = state_48828__$1;
(statearr_48844_48871[(1)] = (8));

} else {
var statearr_48845_48872 = state_48828__$1;
(statearr_48845_48872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (14))){
var inst_48799 = (state_48828[(2)]);
var state_48828__$1 = state_48828;
var statearr_48846_48873 = state_48828__$1;
(statearr_48846_48873[(2)] = inst_48799);

(statearr_48846_48873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (16))){
var state_48828__$1 = state_48828;
var statearr_48847_48874 = state_48828__$1;
(statearr_48847_48874[(2)] = null);

(statearr_48847_48874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (10))){
var inst_48820 = (state_48828[(2)]);
var state_48828__$1 = (function (){var statearr_48848 = state_48828;
(statearr_48848[(11)] = inst_48820);

return statearr_48848;
})();
var statearr_48849_48875 = state_48828__$1;
(statearr_48849_48875[(2)] = null);

(statearr_48849_48875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48829 === (8))){
var inst_48787 = (state_48828[(9)]);
var inst_48791 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48787,opts);
var state_48828__$1 = state_48828;
if(cljs.core.truth_(inst_48791)){
var statearr_48850_48876 = state_48828__$1;
(statearr_48850_48876[(1)] = (11));

} else {
var statearr_48851_48877 = state_48828__$1;
(statearr_48851_48877[(1)] = (12));

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
});})(c__37632__auto___48859,ch))
;
return ((function (switch__37611__auto__,c__37632__auto___48859,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____0 = (function (){
var statearr_48855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48855[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__);

(statearr_48855[(1)] = (1));

return statearr_48855;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____1 = (function (state_48828){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_48828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e48856){if((e48856 instanceof Object)){
var ex__37615__auto__ = e48856;
var statearr_48857_48878 = state_48828;
(statearr_48857_48878[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48879 = state_48828;
state_48828 = G__48879;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__ = function(state_48828){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____1.call(this,state_48828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37612__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___48859,ch))
})();
var state__37634__auto__ = (function (){var statearr_48858 = f__37633__auto__.call(null);
(statearr_48858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___48859);

return statearr_48858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___48859,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48880_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48880_SHARP_));
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
var base_path_48887 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48887){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_48885 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_48886 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48886;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48885;
}}catch (e48884){if((e48884 instanceof Error)){
var e = e48884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48887], null));
} else {
var e = e48884;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_48887))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48888){
var map__48895 = p__48888;
var map__48895__$1 = ((((!((map__48895 == null)))?((((map__48895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48895):map__48895);
var opts = map__48895__$1;
var build_id = cljs.core.get.call(null,map__48895__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48895,map__48895__$1,opts,build_id){
return (function (p__48897){
var vec__48898 = p__48897;
var map__48899 = cljs.core.nth.call(null,vec__48898,(0),null);
var map__48899__$1 = ((((!((map__48899 == null)))?((((map__48899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48899):map__48899);
var msg = map__48899__$1;
var msg_name = cljs.core.get.call(null,map__48899__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__48898,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48898,map__48899,map__48899__$1,msg,msg_name,_,map__48895,map__48895__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48898,map__48899,map__48899__$1,msg,msg_name,_,map__48895,map__48895__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48895,map__48895__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48905){
var vec__48906 = p__48905;
var map__48907 = cljs.core.nth.call(null,vec__48906,(0),null);
var map__48907__$1 = ((((!((map__48907 == null)))?((((map__48907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48907):map__48907);
var msg = map__48907__$1;
var msg_name = cljs.core.get.call(null,map__48907__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__48906,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48909){
var map__48919 = p__48909;
var map__48919__$1 = ((((!((map__48919 == null)))?((((map__48919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48919):map__48919);
var on_compile_warning = cljs.core.get.call(null,map__48919__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48919__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48919,map__48919__$1,on_compile_warning,on_compile_fail){
return (function (p__48921){
var vec__48922 = p__48921;
var map__48923 = cljs.core.nth.call(null,vec__48922,(0),null);
var map__48923__$1 = ((((!((map__48923 == null)))?((((map__48923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48923):map__48923);
var msg = map__48923__$1;
var msg_name = cljs.core.get.call(null,map__48923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__48922,(1));
var pred__48925 = cljs.core._EQ_;
var expr__48926 = msg_name;
if(cljs.core.truth_(pred__48925.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48926))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48925.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48926))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48919,map__48919__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__,msg_hist,msg_names,msg){
return (function (state_49142){
var state_val_49143 = (state_49142[(1)]);
if((state_val_49143 === (7))){
var inst_49066 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49066)){
var statearr_49144_49190 = state_49142__$1;
(statearr_49144_49190[(1)] = (8));

} else {
var statearr_49145_49191 = state_49142__$1;
(statearr_49145_49191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (20))){
var inst_49136 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49146_49192 = state_49142__$1;
(statearr_49146_49192[(2)] = inst_49136);

(statearr_49146_49192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (27))){
var inst_49132 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49147_49193 = state_49142__$1;
(statearr_49147_49193[(2)] = inst_49132);

(statearr_49147_49193[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (1))){
var inst_49059 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49059)){
var statearr_49148_49194 = state_49142__$1;
(statearr_49148_49194[(1)] = (2));

} else {
var statearr_49149_49195 = state_49142__$1;
(statearr_49149_49195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (24))){
var inst_49134 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49150_49196 = state_49142__$1;
(statearr_49150_49196[(2)] = inst_49134);

(statearr_49150_49196[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (4))){
var inst_49140 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49142__$1,inst_49140);
} else {
if((state_val_49143 === (15))){
var inst_49138 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49151_49197 = state_49142__$1;
(statearr_49151_49197[(2)] = inst_49138);

(statearr_49151_49197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (21))){
var inst_49097 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49152_49198 = state_49142__$1;
(statearr_49152_49198[(2)] = inst_49097);

(statearr_49152_49198[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (31))){
var inst_49121 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49121)){
var statearr_49153_49199 = state_49142__$1;
(statearr_49153_49199[(1)] = (34));

} else {
var statearr_49154_49200 = state_49142__$1;
(statearr_49154_49200[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (32))){
var inst_49130 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49155_49201 = state_49142__$1;
(statearr_49155_49201[(2)] = inst_49130);

(statearr_49155_49201[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (33))){
var inst_49119 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49156_49202 = state_49142__$1;
(statearr_49156_49202[(2)] = inst_49119);

(statearr_49156_49202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (13))){
var inst_49080 = figwheel.client.heads_up.clear.call(null);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(16),inst_49080);
} else {
if((state_val_49143 === (22))){
var inst_49101 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49102 = figwheel.client.heads_up.append_message.call(null,inst_49101);
var state_49142__$1 = state_49142;
var statearr_49157_49203 = state_49142__$1;
(statearr_49157_49203[(2)] = inst_49102);

(statearr_49157_49203[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (36))){
var inst_49128 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49158_49204 = state_49142__$1;
(statearr_49158_49204[(2)] = inst_49128);

(statearr_49158_49204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (29))){
var inst_49112 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49159_49205 = state_49142__$1;
(statearr_49159_49205[(2)] = inst_49112);

(statearr_49159_49205[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (6))){
var inst_49061 = (state_49142[(7)]);
var state_49142__$1 = state_49142;
var statearr_49160_49206 = state_49142__$1;
(statearr_49160_49206[(2)] = inst_49061);

(statearr_49160_49206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (28))){
var inst_49108 = (state_49142[(2)]);
var inst_49109 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49110 = figwheel.client.heads_up.display_warning.call(null,inst_49109);
var state_49142__$1 = (function (){var statearr_49161 = state_49142;
(statearr_49161[(8)] = inst_49108);

return statearr_49161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(29),inst_49110);
} else {
if((state_val_49143 === (25))){
var inst_49106 = figwheel.client.heads_up.clear.call(null);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(28),inst_49106);
} else {
if((state_val_49143 === (34))){
var inst_49123 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(37),inst_49123);
} else {
if((state_val_49143 === (17))){
var inst_49088 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49162_49207 = state_49142__$1;
(statearr_49162_49207[(2)] = inst_49088);

(statearr_49162_49207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (3))){
var inst_49078 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49078)){
var statearr_49163_49208 = state_49142__$1;
(statearr_49163_49208[(1)] = (13));

} else {
var statearr_49164_49209 = state_49142__$1;
(statearr_49164_49209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (12))){
var inst_49074 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49165_49210 = state_49142__$1;
(statearr_49165_49210[(2)] = inst_49074);

(statearr_49165_49210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (2))){
var inst_49061 = (state_49142[(7)]);
var inst_49061__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_49142__$1 = (function (){var statearr_49166 = state_49142;
(statearr_49166[(7)] = inst_49061__$1);

return statearr_49166;
})();
if(cljs.core.truth_(inst_49061__$1)){
var statearr_49167_49211 = state_49142__$1;
(statearr_49167_49211[(1)] = (5));

} else {
var statearr_49168_49212 = state_49142__$1;
(statearr_49168_49212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (23))){
var inst_49104 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49104)){
var statearr_49169_49213 = state_49142__$1;
(statearr_49169_49213[(1)] = (25));

} else {
var statearr_49170_49214 = state_49142__$1;
(statearr_49170_49214[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (35))){
var state_49142__$1 = state_49142;
var statearr_49171_49215 = state_49142__$1;
(statearr_49171_49215[(2)] = null);

(statearr_49171_49215[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (19))){
var inst_49099 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49099)){
var statearr_49172_49216 = state_49142__$1;
(statearr_49172_49216[(1)] = (22));

} else {
var statearr_49173_49217 = state_49142__$1;
(statearr_49173_49217[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (11))){
var inst_49070 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49174_49218 = state_49142__$1;
(statearr_49174_49218[(2)] = inst_49070);

(statearr_49174_49218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (9))){
var inst_49072 = figwheel.client.heads_up.clear.call(null);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(12),inst_49072);
} else {
if((state_val_49143 === (5))){
var inst_49063 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_49142__$1 = state_49142;
var statearr_49175_49219 = state_49142__$1;
(statearr_49175_49219[(2)] = inst_49063);

(statearr_49175_49219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (14))){
var inst_49090 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49090)){
var statearr_49176_49220 = state_49142__$1;
(statearr_49176_49220[(1)] = (18));

} else {
var statearr_49177_49221 = state_49142__$1;
(statearr_49177_49221[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (26))){
var inst_49114 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_49142__$1 = state_49142;
if(cljs.core.truth_(inst_49114)){
var statearr_49178_49222 = state_49142__$1;
(statearr_49178_49222[(1)] = (30));

} else {
var statearr_49179_49223 = state_49142__$1;
(statearr_49179_49223[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (16))){
var inst_49082 = (state_49142[(2)]);
var inst_49083 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49084 = figwheel.client.format_messages.call(null,inst_49083);
var inst_49085 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49086 = figwheel.client.heads_up.display_error.call(null,inst_49084,inst_49085);
var state_49142__$1 = (function (){var statearr_49180 = state_49142;
(statearr_49180[(9)] = inst_49082);

return statearr_49180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(17),inst_49086);
} else {
if((state_val_49143 === (30))){
var inst_49116 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49117 = figwheel.client.heads_up.display_warning.call(null,inst_49116);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(33),inst_49117);
} else {
if((state_val_49143 === (10))){
var inst_49076 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49181_49224 = state_49142__$1;
(statearr_49181_49224[(2)] = inst_49076);

(statearr_49181_49224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (18))){
var inst_49092 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49093 = figwheel.client.format_messages.call(null,inst_49092);
var inst_49094 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_49095 = figwheel.client.heads_up.display_error.call(null,inst_49093,inst_49094);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(21),inst_49095);
} else {
if((state_val_49143 === (37))){
var inst_49125 = (state_49142[(2)]);
var state_49142__$1 = state_49142;
var statearr_49182_49225 = state_49142__$1;
(statearr_49182_49225[(2)] = inst_49125);

(statearr_49182_49225[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49143 === (8))){
var inst_49068 = figwheel.client.heads_up.flash_loaded.call(null);
var state_49142__$1 = state_49142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49142__$1,(11),inst_49068);
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
var statearr_49186 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49186[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__);

(statearr_49186[(1)] = (1));

return statearr_49186;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____1 = (function (state_49142){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_49142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e49187){if((e49187 instanceof Object)){
var ex__37615__auto__ = e49187;
var statearr_49188_49226 = state_49142;
(statearr_49188_49226[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49227 = state_49142;
state_49142 = G__49227;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__ = function(state_49142){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____1.call(this,state_49142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__,msg_hist,msg_names,msg))
})();
var state__37634__auto__ = (function (){var statearr_49189 = f__37633__auto__.call(null);
(statearr_49189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_49189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__,msg_hist,msg_names,msg))
);

return c__37632__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37632__auto___49290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___49290,ch){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___49290,ch){
return (function (state_49273){
var state_val_49274 = (state_49273[(1)]);
if((state_val_49274 === (1))){
var state_49273__$1 = state_49273;
var statearr_49275_49291 = state_49273__$1;
(statearr_49275_49291[(2)] = null);

(statearr_49275_49291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (2))){
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49273__$1,(4),ch);
} else {
if((state_val_49274 === (3))){
var inst_49271 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49273__$1,inst_49271);
} else {
if((state_val_49274 === (4))){
var inst_49261 = (state_49273[(7)]);
var inst_49261__$1 = (state_49273[(2)]);
var state_49273__$1 = (function (){var statearr_49276 = state_49273;
(statearr_49276[(7)] = inst_49261__$1);

return statearr_49276;
})();
if(cljs.core.truth_(inst_49261__$1)){
var statearr_49277_49292 = state_49273__$1;
(statearr_49277_49292[(1)] = (5));

} else {
var statearr_49278_49293 = state_49273__$1;
(statearr_49278_49293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (5))){
var inst_49261 = (state_49273[(7)]);
var inst_49263 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_49261);
var state_49273__$1 = state_49273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49273__$1,(8),inst_49263);
} else {
if((state_val_49274 === (6))){
var state_49273__$1 = state_49273;
var statearr_49279_49294 = state_49273__$1;
(statearr_49279_49294[(2)] = null);

(statearr_49279_49294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (7))){
var inst_49269 = (state_49273[(2)]);
var state_49273__$1 = state_49273;
var statearr_49280_49295 = state_49273__$1;
(statearr_49280_49295[(2)] = inst_49269);

(statearr_49280_49295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49274 === (8))){
var inst_49265 = (state_49273[(2)]);
var state_49273__$1 = (function (){var statearr_49281 = state_49273;
(statearr_49281[(8)] = inst_49265);

return statearr_49281;
})();
var statearr_49282_49296 = state_49273__$1;
(statearr_49282_49296[(2)] = null);

(statearr_49282_49296[(1)] = (2));


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
});})(c__37632__auto___49290,ch))
;
return ((function (switch__37611__auto__,c__37632__auto___49290,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37612__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37612__auto____0 = (function (){
var statearr_49286 = [null,null,null,null,null,null,null,null,null];
(statearr_49286[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37612__auto__);

(statearr_49286[(1)] = (1));

return statearr_49286;
});
var figwheel$client$heads_up_plugin_$_state_machine__37612__auto____1 = (function (state_49273){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_49273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e49287){if((e49287 instanceof Object)){
var ex__37615__auto__ = e49287;
var statearr_49288_49297 = state_49273;
(statearr_49288_49297[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49298 = state_49273;
state_49273 = G__49298;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37612__auto__ = function(state_49273){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37612__auto____1.call(this,state_49273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37612__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37612__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___49290,ch))
})();
var state__37634__auto__ = (function (){var statearr_49289 = f__37633__auto__.call(null);
(statearr_49289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___49290);

return statearr_49289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___49290,ch))
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
return (function (state_49319){
var state_val_49320 = (state_49319[(1)]);
if((state_val_49320 === (1))){
var inst_49314 = cljs.core.async.timeout.call(null,(3000));
var state_49319__$1 = state_49319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49319__$1,(2),inst_49314);
} else {
if((state_val_49320 === (2))){
var inst_49316 = (state_49319[(2)]);
var inst_49317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49319__$1 = (function (){var statearr_49321 = state_49319;
(statearr_49321[(7)] = inst_49316);

return statearr_49321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49319__$1,inst_49317);
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
var statearr_49325 = [null,null,null,null,null,null,null,null];
(statearr_49325[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__);

(statearr_49325[(1)] = (1));

return statearr_49325;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____1 = (function (state_49319){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_49319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e49326){if((e49326 instanceof Object)){
var ex__37615__auto__ = e49326;
var statearr_49327_49329 = state_49319;
(statearr_49327_49329[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49330 = state_49319;
state_49319 = G__49330;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__ = function(state_49319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____1.call(this,state_49319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37612__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_49328 = f__37633__auto__.call(null);
(statearr_49328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_49328;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49331){
var map__49338 = p__49331;
var map__49338__$1 = ((((!((map__49338 == null)))?((((map__49338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49338):map__49338);
var ed = map__49338__$1;
var formatted_exception = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49338__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49340_49344 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49341_49345 = null;
var count__49342_49346 = (0);
var i__49343_49347 = (0);
while(true){
if((i__49343_49347 < count__49342_49346)){
var msg_49348 = cljs.core._nth.call(null,chunk__49341_49345,i__49343_49347);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49348);

var G__49349 = seq__49340_49344;
var G__49350 = chunk__49341_49345;
var G__49351 = count__49342_49346;
var G__49352 = (i__49343_49347 + (1));
seq__49340_49344 = G__49349;
chunk__49341_49345 = G__49350;
count__49342_49346 = G__49351;
i__49343_49347 = G__49352;
continue;
} else {
var temp__4425__auto___49353 = cljs.core.seq.call(null,seq__49340_49344);
if(temp__4425__auto___49353){
var seq__49340_49354__$1 = temp__4425__auto___49353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49340_49354__$1)){
var c__36319__auto___49355 = cljs.core.chunk_first.call(null,seq__49340_49354__$1);
var G__49356 = cljs.core.chunk_rest.call(null,seq__49340_49354__$1);
var G__49357 = c__36319__auto___49355;
var G__49358 = cljs.core.count.call(null,c__36319__auto___49355);
var G__49359 = (0);
seq__49340_49344 = G__49356;
chunk__49341_49345 = G__49357;
count__49342_49346 = G__49358;
i__49343_49347 = G__49359;
continue;
} else {
var msg_49360 = cljs.core.first.call(null,seq__49340_49354__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49360);

var G__49361 = cljs.core.next.call(null,seq__49340_49354__$1);
var G__49362 = null;
var G__49363 = (0);
var G__49364 = (0);
seq__49340_49344 = G__49361;
chunk__49341_49345 = G__49362;
count__49342_49346 = G__49363;
i__49343_49347 = G__49364;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49365){
var map__49368 = p__49365;
var map__49368__$1 = ((((!((map__49368 == null)))?((((map__49368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49368):map__49368);
var w = map__49368__$1;
var message = cljs.core.get.call(null,map__49368__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__49376 = cljs.core.seq.call(null,plugins);
var chunk__49377 = null;
var count__49378 = (0);
var i__49379 = (0);
while(true){
if((i__49379 < count__49378)){
var vec__49380 = cljs.core._nth.call(null,chunk__49377,i__49379);
var k = cljs.core.nth.call(null,vec__49380,(0),null);
var plugin = cljs.core.nth.call(null,vec__49380,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49382 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49376,chunk__49377,count__49378,i__49379,pl_49382,vec__49380,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49382.call(null,msg_hist);
});})(seq__49376,chunk__49377,count__49378,i__49379,pl_49382,vec__49380,k,plugin))
);
} else {
}

var G__49383 = seq__49376;
var G__49384 = chunk__49377;
var G__49385 = count__49378;
var G__49386 = (i__49379 + (1));
seq__49376 = G__49383;
chunk__49377 = G__49384;
count__49378 = G__49385;
i__49379 = G__49386;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__49376);
if(temp__4425__auto__){
var seq__49376__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49376__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__49376__$1);
var G__49387 = cljs.core.chunk_rest.call(null,seq__49376__$1);
var G__49388 = c__36319__auto__;
var G__49389 = cljs.core.count.call(null,c__36319__auto__);
var G__49390 = (0);
seq__49376 = G__49387;
chunk__49377 = G__49388;
count__49378 = G__49389;
i__49379 = G__49390;
continue;
} else {
var vec__49381 = cljs.core.first.call(null,seq__49376__$1);
var k = cljs.core.nth.call(null,vec__49381,(0),null);
var plugin = cljs.core.nth.call(null,vec__49381,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49391 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49376,chunk__49377,count__49378,i__49379,pl_49391,vec__49381,k,plugin,seq__49376__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49391.call(null,msg_hist);
});})(seq__49376,chunk__49377,count__49378,i__49379,pl_49391,vec__49381,k,plugin,seq__49376__$1,temp__4425__auto__))
);
} else {
}

var G__49392 = cljs.core.next.call(null,seq__49376__$1);
var G__49393 = null;
var G__49394 = (0);
var G__49395 = (0);
seq__49376 = G__49392;
chunk__49377 = G__49393;
count__49378 = G__49394;
i__49379 = G__49395;
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
var args49396 = [];
var len__36574__auto___49399 = arguments.length;
var i__36575__auto___49400 = (0);
while(true){
if((i__36575__auto___49400 < len__36574__auto___49399)){
args49396.push((arguments[i__36575__auto___49400]));

var G__49401 = (i__36575__auto___49400 + (1));
i__36575__auto___49400 = G__49401;
continue;
} else {
}
break;
}

var G__49398 = args49396.length;
switch (G__49398) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49396.length)].join('')));

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
var len__36574__auto___49407 = arguments.length;
var i__36575__auto___49408 = (0);
while(true){
if((i__36575__auto___49408 < len__36574__auto___49407)){
args__36581__auto__.push((arguments[i__36575__auto___49408]));

var G__49409 = (i__36575__auto___49408 + (1));
i__36575__auto___49408 = G__49409;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49404){
var map__49405 = p__49404;
var map__49405__$1 = ((((!((map__49405 == null)))?((((map__49405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49405):map__49405);
var opts = map__49405__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49403){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49403));
});

//# sourceMappingURL=client.js.map?rel=1456711313248