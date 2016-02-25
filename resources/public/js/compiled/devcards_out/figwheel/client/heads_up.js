// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__36579__auto__ = [];
var len__36572__auto___45648 = arguments.length;
var i__36573__auto___45649 = (0);
while(true){
if((i__36573__auto___45649 < len__36572__auto___45648)){
args__36579__auto__.push((arguments[i__36573__auto___45649]));

var G__45650 = (i__36573__auto___45649 + (1));
i__36573__auto___45649 = G__45650;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((2) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36580__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__45640_45651 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__45641_45652 = null;
var count__45642_45653 = (0);
var i__45643_45654 = (0);
while(true){
if((i__45643_45654 < count__45642_45653)){
var k_45655 = cljs.core._nth.call(null,chunk__45641_45652,i__45643_45654);
e.setAttribute(cljs.core.name.call(null,k_45655),cljs.core.get.call(null,attrs,k_45655));

var G__45656 = seq__45640_45651;
var G__45657 = chunk__45641_45652;
var G__45658 = count__45642_45653;
var G__45659 = (i__45643_45654 + (1));
seq__45640_45651 = G__45656;
chunk__45641_45652 = G__45657;
count__45642_45653 = G__45658;
i__45643_45654 = G__45659;
continue;
} else {
var temp__4425__auto___45660 = cljs.core.seq.call(null,seq__45640_45651);
if(temp__4425__auto___45660){
var seq__45640_45661__$1 = temp__4425__auto___45660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45640_45661__$1)){
var c__36317__auto___45662 = cljs.core.chunk_first.call(null,seq__45640_45661__$1);
var G__45663 = cljs.core.chunk_rest.call(null,seq__45640_45661__$1);
var G__45664 = c__36317__auto___45662;
var G__45665 = cljs.core.count.call(null,c__36317__auto___45662);
var G__45666 = (0);
seq__45640_45651 = G__45663;
chunk__45641_45652 = G__45664;
count__45642_45653 = G__45665;
i__45643_45654 = G__45666;
continue;
} else {
var k_45667 = cljs.core.first.call(null,seq__45640_45661__$1);
e.setAttribute(cljs.core.name.call(null,k_45667),cljs.core.get.call(null,attrs,k_45667));

var G__45668 = cljs.core.next.call(null,seq__45640_45661__$1);
var G__45669 = null;
var G__45670 = (0);
var G__45671 = (0);
seq__45640_45651 = G__45668;
chunk__45641_45652 = G__45669;
count__45642_45653 = G__45670;
i__45643_45654 = G__45671;
continue;
}
} else {
}
}
break;
}

var seq__45644_45672 = cljs.core.seq.call(null,children);
var chunk__45645_45673 = null;
var count__45646_45674 = (0);
var i__45647_45675 = (0);
while(true){
if((i__45647_45675 < count__45646_45674)){
var ch_45676 = cljs.core._nth.call(null,chunk__45645_45673,i__45647_45675);
e.appendChild(ch_45676);

var G__45677 = seq__45644_45672;
var G__45678 = chunk__45645_45673;
var G__45679 = count__45646_45674;
var G__45680 = (i__45647_45675 + (1));
seq__45644_45672 = G__45677;
chunk__45645_45673 = G__45678;
count__45646_45674 = G__45679;
i__45647_45675 = G__45680;
continue;
} else {
var temp__4425__auto___45681 = cljs.core.seq.call(null,seq__45644_45672);
if(temp__4425__auto___45681){
var seq__45644_45682__$1 = temp__4425__auto___45681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45644_45682__$1)){
var c__36317__auto___45683 = cljs.core.chunk_first.call(null,seq__45644_45682__$1);
var G__45684 = cljs.core.chunk_rest.call(null,seq__45644_45682__$1);
var G__45685 = c__36317__auto___45683;
var G__45686 = cljs.core.count.call(null,c__36317__auto___45683);
var G__45687 = (0);
seq__45644_45672 = G__45684;
chunk__45645_45673 = G__45685;
count__45646_45674 = G__45686;
i__45647_45675 = G__45687;
continue;
} else {
var ch_45688 = cljs.core.first.call(null,seq__45644_45682__$1);
e.appendChild(ch_45688);

var G__45689 = cljs.core.next.call(null,seq__45644_45682__$1);
var G__45690 = null;
var G__45691 = (0);
var G__45692 = (0);
seq__45644_45672 = G__45689;
chunk__45645_45673 = G__45690;
count__45646_45674 = G__45691;
i__45647_45675 = G__45692;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq45637){
var G__45638 = cljs.core.first.call(null,seq45637);
var seq45637__$1 = cljs.core.next.call(null,seq45637);
var G__45639 = cljs.core.first.call(null,seq45637__$1);
var seq45637__$2 = cljs.core.next.call(null,seq45637__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__45638,G__45639,seq45637__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__36427__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36428__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36431__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__36427__auto__,prefer_table__36428__auto__,method_cache__36429__auto__,cached_hierarchy__36430__auto__,hierarchy__36431__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__36427__auto__,prefer_table__36428__auto__,method_cache__36429__auto__,cached_hierarchy__36430__auto__,hierarchy__36431__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36431__auto__,method_table__36427__auto__,prefer_table__36428__auto__,method_cache__36429__auto__,cached_hierarchy__36430__auto__));
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
var el_45693 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_45693.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_45693.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_45693.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_45693);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__45694,st_map){
var map__45699 = p__45694;
var map__45699__$1 = ((((!((map__45699 == null)))?((((map__45699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45699):map__45699);
var container_el = cljs.core.get.call(null,map__45699__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__45699,map__45699__$1,container_el){
return (function (p__45701){
var vec__45702 = p__45701;
var k = cljs.core.nth.call(null,vec__45702,(0),null);
var v = cljs.core.nth.call(null,vec__45702,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__45699,map__45699__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__45703,dom_str){
var map__45706 = p__45703;
var map__45706__$1 = ((((!((map__45706 == null)))?((((map__45706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45706):map__45706);
var c = map__45706__$1;
var content_area_el = cljs.core.get.call(null,map__45706__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__45708){
var map__45711 = p__45708;
var map__45711__$1 = ((((!((map__45711 == null)))?((((map__45711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45711):map__45711);
var content_area_el = cljs.core.get.call(null,map__45711__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_45754){
var state_val_45755 = (state_45754[(1)]);
if((state_val_45755 === (1))){
var inst_45739 = (state_45754[(7)]);
var inst_45739__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45740 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45741 = ["10px","10px","100%","68px","1.0"];
var inst_45742 = cljs.core.PersistentHashMap.fromArrays(inst_45740,inst_45741);
var inst_45743 = cljs.core.merge.call(null,inst_45742,style);
var inst_45744 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45739__$1,inst_45743);
var inst_45745 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45739__$1,msg);
var inst_45746 = cljs.core.async.timeout.call(null,(300));
var state_45754__$1 = (function (){var statearr_45756 = state_45754;
(statearr_45756[(7)] = inst_45739__$1);

(statearr_45756[(8)] = inst_45744);

(statearr_45756[(9)] = inst_45745);

return statearr_45756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45754__$1,(2),inst_45746);
} else {
if((state_val_45755 === (2))){
var inst_45739 = (state_45754[(7)]);
var inst_45748 = (state_45754[(2)]);
var inst_45749 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_45750 = ["auto"];
var inst_45751 = cljs.core.PersistentHashMap.fromArrays(inst_45749,inst_45750);
var inst_45752 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45739,inst_45751);
var state_45754__$1 = (function (){var statearr_45757 = state_45754;
(statearr_45757[(10)] = inst_45748);

return statearr_45757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45754__$1,inst_45752);
} else {
return null;
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto____0 = (function (){
var statearr_45761 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45761[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto__);

(statearr_45761[(1)] = (1));

return statearr_45761;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto____1 = (function (state_45754){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_45754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e45762){if((e45762 instanceof Object)){
var ex__37573__auto__ = e45762;
var statearr_45763_45765 = state_45754;
(statearr_45763_45765[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45766 = state_45754;
state_45754 = G__45766;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto__ = function(state_45754){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto____1.call(this,state_45754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_45764 = f__37682__auto__.call(null);
(statearr_45764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_45764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
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
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__45768 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__45768,(0),null);
var ln = cljs.core.nth.call(null,vec__45768,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__45771 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__45771,(0),null);
var file_line = cljs.core.nth.call(null,vec__45771,(1),null);
var file_column = cljs.core.nth.call(null,vec__45771,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__45771,file_name,file_line,file_column){
return (function (p1__45769_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__45769_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__45771,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__35514__auto__ = file_line;
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
var and__35502__auto__ = cause;
if(cljs.core.truth_(and__35502__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__35502__auto__;
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
var map__45774 = figwheel.client.heads_up.ensure_container.call(null);
var map__45774__$1 = ((((!((map__45774 == null)))?((((map__45774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45774):map__45774);
var content_area_el = cljs.core.get.call(null,map__45774__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_45822){
var state_val_45823 = (state_45822[(1)]);
if((state_val_45823 === (1))){
var inst_45805 = (state_45822[(7)]);
var inst_45805__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_45806 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_45807 = ["0.0"];
var inst_45808 = cljs.core.PersistentHashMap.fromArrays(inst_45806,inst_45807);
var inst_45809 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45805__$1,inst_45808);
var inst_45810 = cljs.core.async.timeout.call(null,(300));
var state_45822__$1 = (function (){var statearr_45824 = state_45822;
(statearr_45824[(8)] = inst_45809);

(statearr_45824[(7)] = inst_45805__$1);

return statearr_45824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45822__$1,(2),inst_45810);
} else {
if((state_val_45823 === (2))){
var inst_45805 = (state_45822[(7)]);
var inst_45812 = (state_45822[(2)]);
var inst_45813 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_45814 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_45815 = cljs.core.PersistentHashMap.fromArrays(inst_45813,inst_45814);
var inst_45816 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_45805,inst_45815);
var inst_45817 = cljs.core.async.timeout.call(null,(200));
var state_45822__$1 = (function (){var statearr_45825 = state_45822;
(statearr_45825[(9)] = inst_45816);

(statearr_45825[(10)] = inst_45812);

return statearr_45825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45822__$1,(3),inst_45817);
} else {
if((state_val_45823 === (3))){
var inst_45805 = (state_45822[(7)]);
var inst_45819 = (state_45822[(2)]);
var inst_45820 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_45805,"");
var state_45822__$1 = (function (){var statearr_45826 = state_45822;
(statearr_45826[(11)] = inst_45819);

return statearr_45826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45822__$1,inst_45820);
} else {
return null;
}
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__37570__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__37570__auto____0 = (function (){
var statearr_45830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45830[(0)] = figwheel$client$heads_up$clear_$_state_machine__37570__auto__);

(statearr_45830[(1)] = (1));

return statearr_45830;
});
var figwheel$client$heads_up$clear_$_state_machine__37570__auto____1 = (function (state_45822){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_45822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e45831){if((e45831 instanceof Object)){
var ex__37573__auto__ = e45831;
var statearr_45832_45834 = state_45822;
(statearr_45832_45834[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45835 = state_45822;
state_45822 = G__45835;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37570__auto__ = function(state_45822){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37570__auto____1.call(this,state_45822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37570__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37570__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_45833 = f__37682__auto__.call(null);
(statearr_45833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_45833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_45867){
var state_val_45868 = (state_45867[(1)]);
if((state_val_45868 === (1))){
var inst_45857 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_45867__$1 = state_45867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45867__$1,(2),inst_45857);
} else {
if((state_val_45868 === (2))){
var inst_45859 = (state_45867[(2)]);
var inst_45860 = cljs.core.async.timeout.call(null,(400));
var state_45867__$1 = (function (){var statearr_45869 = state_45867;
(statearr_45869[(7)] = inst_45859);

return statearr_45869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45867__$1,(3),inst_45860);
} else {
if((state_val_45868 === (3))){
var inst_45862 = (state_45867[(2)]);
var inst_45863 = figwheel.client.heads_up.clear.call(null);
var state_45867__$1 = (function (){var statearr_45870 = state_45867;
(statearr_45870[(8)] = inst_45862);

return statearr_45870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45867__$1,(4),inst_45863);
} else {
if((state_val_45868 === (4))){
var inst_45865 = (state_45867[(2)]);
var state_45867__$1 = state_45867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45867__$1,inst_45865);
} else {
return null;
}
}
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto____0 = (function (){
var statearr_45874 = [null,null,null,null,null,null,null,null,null];
(statearr_45874[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto__);

(statearr_45874[(1)] = (1));

return statearr_45874;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto____1 = (function (state_45867){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_45867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e45875){if((e45875 instanceof Object)){
var ex__37573__auto__ = e45875;
var statearr_45876_45878 = state_45867;
(statearr_45876_45878[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45879 = state_45867;
state_45867 = G__45879;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto__ = function(state_45867){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto____1.call(this,state_45867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_45877 = f__37682__auto__.call(null);
(statearr_45877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_45877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1456361407586