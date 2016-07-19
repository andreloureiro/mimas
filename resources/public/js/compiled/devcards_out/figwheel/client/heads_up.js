// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__38508__auto__ = [];
var len__38501__auto___53578 = arguments.length;
var i__38502__auto___53579 = (0);
while(true){
if((i__38502__auto___53579 < len__38501__auto___53578)){
args__38508__auto__.push((arguments[i__38502__auto___53579]));

var G__53580 = (i__38502__auto___53579 + (1));
i__38502__auto___53579 = G__53580;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((2) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__38509__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__53570_53581 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__53571_53582 = null;
var count__53572_53583 = (0);
var i__53573_53584 = (0);
while(true){
if((i__53573_53584 < count__53572_53583)){
var k_53585 = cljs.core._nth.call(null,chunk__53571_53582,i__53573_53584);
e.setAttribute(cljs.core.name.call(null,k_53585),cljs.core.get.call(null,attrs,k_53585));

var G__53586 = seq__53570_53581;
var G__53587 = chunk__53571_53582;
var G__53588 = count__53572_53583;
var G__53589 = (i__53573_53584 + (1));
seq__53570_53581 = G__53586;
chunk__53571_53582 = G__53587;
count__53572_53583 = G__53588;
i__53573_53584 = G__53589;
continue;
} else {
var temp__4657__auto___53590 = cljs.core.seq.call(null,seq__53570_53581);
if(temp__4657__auto___53590){
var seq__53570_53591__$1 = temp__4657__auto___53590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53570_53591__$1)){
var c__38246__auto___53592 = cljs.core.chunk_first.call(null,seq__53570_53591__$1);
var G__53593 = cljs.core.chunk_rest.call(null,seq__53570_53591__$1);
var G__53594 = c__38246__auto___53592;
var G__53595 = cljs.core.count.call(null,c__38246__auto___53592);
var G__53596 = (0);
seq__53570_53581 = G__53593;
chunk__53571_53582 = G__53594;
count__53572_53583 = G__53595;
i__53573_53584 = G__53596;
continue;
} else {
var k_53597 = cljs.core.first.call(null,seq__53570_53591__$1);
e.setAttribute(cljs.core.name.call(null,k_53597),cljs.core.get.call(null,attrs,k_53597));

var G__53598 = cljs.core.next.call(null,seq__53570_53591__$1);
var G__53599 = null;
var G__53600 = (0);
var G__53601 = (0);
seq__53570_53581 = G__53598;
chunk__53571_53582 = G__53599;
count__53572_53583 = G__53600;
i__53573_53584 = G__53601;
continue;
}
} else {
}
}
break;
}

var seq__53574_53602 = cljs.core.seq.call(null,children);
var chunk__53575_53603 = null;
var count__53576_53604 = (0);
var i__53577_53605 = (0);
while(true){
if((i__53577_53605 < count__53576_53604)){
var ch_53606 = cljs.core._nth.call(null,chunk__53575_53603,i__53577_53605);
e.appendChild(ch_53606);

var G__53607 = seq__53574_53602;
var G__53608 = chunk__53575_53603;
var G__53609 = count__53576_53604;
var G__53610 = (i__53577_53605 + (1));
seq__53574_53602 = G__53607;
chunk__53575_53603 = G__53608;
count__53576_53604 = G__53609;
i__53577_53605 = G__53610;
continue;
} else {
var temp__4657__auto___53611 = cljs.core.seq.call(null,seq__53574_53602);
if(temp__4657__auto___53611){
var seq__53574_53612__$1 = temp__4657__auto___53611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53574_53612__$1)){
var c__38246__auto___53613 = cljs.core.chunk_first.call(null,seq__53574_53612__$1);
var G__53614 = cljs.core.chunk_rest.call(null,seq__53574_53612__$1);
var G__53615 = c__38246__auto___53613;
var G__53616 = cljs.core.count.call(null,c__38246__auto___53613);
var G__53617 = (0);
seq__53574_53602 = G__53614;
chunk__53575_53603 = G__53615;
count__53576_53604 = G__53616;
i__53577_53605 = G__53617;
continue;
} else {
var ch_53618 = cljs.core.first.call(null,seq__53574_53612__$1);
e.appendChild(ch_53618);

var G__53619 = cljs.core.next.call(null,seq__53574_53612__$1);
var G__53620 = null;
var G__53621 = (0);
var G__53622 = (0);
seq__53574_53602 = G__53619;
chunk__53575_53603 = G__53620;
count__53576_53604 = G__53621;
i__53577_53605 = G__53622;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq53567){
var G__53568 = cljs.core.first.call(null,seq53567);
var seq53567__$1 = cljs.core.next.call(null,seq53567);
var G__53569 = cljs.core.first.call(null,seq53567__$1);
var seq53567__$2 = cljs.core.next.call(null,seq53567__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__53568,G__53569,seq53567__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__38356__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__38357__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__38358__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__38359__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__38360__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__38356__auto__,prefer_table__38357__auto__,method_cache__38358__auto__,cached_hierarchy__38359__auto__,hierarchy__38360__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__38356__auto__,prefer_table__38357__auto__,method_cache__38358__auto__,cached_hierarchy__38359__auto__,hierarchy__38360__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__38360__auto__,method_table__38356__auto__,prefer_table__38357__auto__,method_cache__38358__auto__,cached_hierarchy__38359__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_53623 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_53623.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_53623.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_53623.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_53623);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__53624,st_map){
var map__53629 = p__53624;
var map__53629__$1 = ((((!((map__53629 == null)))?((((map__53629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53629):map__53629);
var container_el = cljs.core.get.call(null,map__53629__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__53629,map__53629__$1,container_el){
return (function (p__53631){
var vec__53632 = p__53631;
var k = cljs.core.nth.call(null,vec__53632,(0),null);
var v = cljs.core.nth.call(null,vec__53632,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__53629,map__53629__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__53633,dom_str){
var map__53636 = p__53633;
var map__53636__$1 = ((((!((map__53636 == null)))?((((map__53636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53636):map__53636);
var c = map__53636__$1;
var content_area_el = cljs.core.get.call(null,map__53636__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__53638){
var map__53641 = p__53638;
var map__53641__$1 = ((((!((map__53641 == null)))?((((map__53641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53641):map__53641);
var content_area_el = cljs.core.get.call(null,map__53641__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_53684){
var state_val_53685 = (state_53684[(1)]);
if((state_val_53685 === (1))){
var inst_53669 = (state_53684[(7)]);
var inst_53669__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_53670 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_53671 = ["10px","10px","100%","68px","1.0"];
var inst_53672 = cljs.core.PersistentHashMap.fromArrays(inst_53670,inst_53671);
var inst_53673 = cljs.core.merge.call(null,inst_53672,style);
var inst_53674 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_53669__$1,inst_53673);
var inst_53675 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_53669__$1,msg);
var inst_53676 = cljs.core.async.timeout.call(null,(300));
var state_53684__$1 = (function (){var statearr_53686 = state_53684;
(statearr_53686[(8)] = inst_53674);

(statearr_53686[(7)] = inst_53669__$1);

(statearr_53686[(9)] = inst_53675);

return statearr_53686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53684__$1,(2),inst_53676);
} else {
if((state_val_53685 === (2))){
var inst_53669 = (state_53684[(7)]);
var inst_53678 = (state_53684[(2)]);
var inst_53679 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_53680 = ["auto"];
var inst_53681 = cljs.core.PersistentHashMap.fromArrays(inst_53679,inst_53680);
var inst_53682 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_53669,inst_53681);
var state_53684__$1 = (function (){var statearr_53687 = state_53684;
(statearr_53687[(10)] = inst_53678);

return statearr_53687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53684__$1,inst_53682);
} else {
return null;
}
}
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto____0 = (function (){
var statearr_53691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53691[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto__);

(statearr_53691[(1)] = (1));

return statearr_53691;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto____1 = (function (state_53684){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_53684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e53692){if((e53692 instanceof Object)){
var ex__41357__auto__ = e53692;
var statearr_53693_53695 = state_53684;
(statearr_53693_53695[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53696 = state_53684;
state_53684 = G__53696;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto__ = function(state_53684){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto____1.call(this,state_53684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_53694 = f__41375__auto__.call(null);
(statearr_53694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_53694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__53698 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__53698,(0),null);
var ln = cljs.core.nth.call(null,vec__53698,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__53701 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__53701,(0),null);
var file_line = cljs.core.nth.call(null,vec__53701,(1),null);
var file_column = cljs.core.nth.call(null,vec__53701,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__53701,file_name,file_line,file_column){
return (function (p1__53699_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__53699_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__53701,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__37443__auto__ = file_line;
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
var and__37431__auto__ = cause;
if(cljs.core.truth_(and__37431__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__37431__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__53704 = figwheel.client.heads_up.ensure_container.call(null);
var map__53704__$1 = ((((!((map__53704 == null)))?((((map__53704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53704):map__53704);
var content_area_el = cljs.core.get.call(null,map__53704__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_53752){
var state_val_53753 = (state_53752[(1)]);
if((state_val_53753 === (1))){
var inst_53735 = (state_53752[(7)]);
var inst_53735__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_53736 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_53737 = ["0.0"];
var inst_53738 = cljs.core.PersistentHashMap.fromArrays(inst_53736,inst_53737);
var inst_53739 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_53735__$1,inst_53738);
var inst_53740 = cljs.core.async.timeout.call(null,(300));
var state_53752__$1 = (function (){var statearr_53754 = state_53752;
(statearr_53754[(8)] = inst_53739);

(statearr_53754[(7)] = inst_53735__$1);

return statearr_53754;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53752__$1,(2),inst_53740);
} else {
if((state_val_53753 === (2))){
var inst_53735 = (state_53752[(7)]);
var inst_53742 = (state_53752[(2)]);
var inst_53743 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_53744 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_53745 = cljs.core.PersistentHashMap.fromArrays(inst_53743,inst_53744);
var inst_53746 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_53735,inst_53745);
var inst_53747 = cljs.core.async.timeout.call(null,(200));
var state_53752__$1 = (function (){var statearr_53755 = state_53752;
(statearr_53755[(9)] = inst_53746);

(statearr_53755[(10)] = inst_53742);

return statearr_53755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53752__$1,(3),inst_53747);
} else {
if((state_val_53753 === (3))){
var inst_53735 = (state_53752[(7)]);
var inst_53749 = (state_53752[(2)]);
var inst_53750 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_53735,"");
var state_53752__$1 = (function (){var statearr_53756 = state_53752;
(statearr_53756[(11)] = inst_53749);

return statearr_53756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53752__$1,inst_53750);
} else {
return null;
}
}
}
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__41354__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__41354__auto____0 = (function (){
var statearr_53760 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53760[(0)] = figwheel$client$heads_up$clear_$_state_machine__41354__auto__);

(statearr_53760[(1)] = (1));

return statearr_53760;
});
var figwheel$client$heads_up$clear_$_state_machine__41354__auto____1 = (function (state_53752){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_53752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e53761){if((e53761 instanceof Object)){
var ex__41357__auto__ = e53761;
var statearr_53762_53764 = state_53752;
(statearr_53762_53764[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53765 = state_53752;
state_53752 = G__53765;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__41354__auto__ = function(state_53752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__41354__auto____1.call(this,state_53752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__41354__auto____0;
figwheel$client$heads_up$clear_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__41354__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_53763 = f__41375__auto__.call(null);
(statearr_53763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_53763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_53797){
var state_val_53798 = (state_53797[(1)]);
if((state_val_53798 === (1))){
var inst_53787 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_53797__$1 = state_53797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53797__$1,(2),inst_53787);
} else {
if((state_val_53798 === (2))){
var inst_53789 = (state_53797[(2)]);
var inst_53790 = cljs.core.async.timeout.call(null,(400));
var state_53797__$1 = (function (){var statearr_53799 = state_53797;
(statearr_53799[(7)] = inst_53789);

return statearr_53799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53797__$1,(3),inst_53790);
} else {
if((state_val_53798 === (3))){
var inst_53792 = (state_53797[(2)]);
var inst_53793 = figwheel.client.heads_up.clear.call(null);
var state_53797__$1 = (function (){var statearr_53800 = state_53797;
(statearr_53800[(8)] = inst_53792);

return statearr_53800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53797__$1,(4),inst_53793);
} else {
if((state_val_53798 === (4))){
var inst_53795 = (state_53797[(2)]);
var state_53797__$1 = state_53797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53797__$1,inst_53795);
} else {
return null;
}
}
}
}
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto____0 = (function (){
var statearr_53804 = [null,null,null,null,null,null,null,null,null];
(statearr_53804[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto__);

(statearr_53804[(1)] = (1));

return statearr_53804;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto____1 = (function (state_53797){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_53797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e53805){if((e53805 instanceof Object)){
var ex__41357__auto__ = e53805;
var statearr_53806_53808 = state_53797;
(statearr_53806_53808[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53809 = state_53797;
state_53797 = G__53809;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto__ = function(state_53797){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto____1.call(this,state_53797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_53807 = f__41375__auto__.call(null);
(statearr_53807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_53807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1459008361551