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
var args__36581__auto__ = [];
var len__36574__auto___48449 = arguments.length;
var i__36575__auto___48450 = (0);
while(true){
if((i__36575__auto___48450 < len__36574__auto___48449)){
args__36581__auto__.push((arguments[i__36575__auto___48450]));

var G__48451 = (i__36575__auto___48450 + (1));
i__36575__auto___48450 = G__48451;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((2) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__36582__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__48441_48452 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__48442_48453 = null;
var count__48443_48454 = (0);
var i__48444_48455 = (0);
while(true){
if((i__48444_48455 < count__48443_48454)){
var k_48456 = cljs.core._nth.call(null,chunk__48442_48453,i__48444_48455);
e.setAttribute(cljs.core.name.call(null,k_48456),cljs.core.get.call(null,attrs,k_48456));

var G__48457 = seq__48441_48452;
var G__48458 = chunk__48442_48453;
var G__48459 = count__48443_48454;
var G__48460 = (i__48444_48455 + (1));
seq__48441_48452 = G__48457;
chunk__48442_48453 = G__48458;
count__48443_48454 = G__48459;
i__48444_48455 = G__48460;
continue;
} else {
var temp__4425__auto___48461 = cljs.core.seq.call(null,seq__48441_48452);
if(temp__4425__auto___48461){
var seq__48441_48462__$1 = temp__4425__auto___48461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48441_48462__$1)){
var c__36319__auto___48463 = cljs.core.chunk_first.call(null,seq__48441_48462__$1);
var G__48464 = cljs.core.chunk_rest.call(null,seq__48441_48462__$1);
var G__48465 = c__36319__auto___48463;
var G__48466 = cljs.core.count.call(null,c__36319__auto___48463);
var G__48467 = (0);
seq__48441_48452 = G__48464;
chunk__48442_48453 = G__48465;
count__48443_48454 = G__48466;
i__48444_48455 = G__48467;
continue;
} else {
var k_48468 = cljs.core.first.call(null,seq__48441_48462__$1);
e.setAttribute(cljs.core.name.call(null,k_48468),cljs.core.get.call(null,attrs,k_48468));

var G__48469 = cljs.core.next.call(null,seq__48441_48462__$1);
var G__48470 = null;
var G__48471 = (0);
var G__48472 = (0);
seq__48441_48452 = G__48469;
chunk__48442_48453 = G__48470;
count__48443_48454 = G__48471;
i__48444_48455 = G__48472;
continue;
}
} else {
}
}
break;
}

var seq__48445_48473 = cljs.core.seq.call(null,children);
var chunk__48446_48474 = null;
var count__48447_48475 = (0);
var i__48448_48476 = (0);
while(true){
if((i__48448_48476 < count__48447_48475)){
var ch_48477 = cljs.core._nth.call(null,chunk__48446_48474,i__48448_48476);
e.appendChild(ch_48477);

var G__48478 = seq__48445_48473;
var G__48479 = chunk__48446_48474;
var G__48480 = count__48447_48475;
var G__48481 = (i__48448_48476 + (1));
seq__48445_48473 = G__48478;
chunk__48446_48474 = G__48479;
count__48447_48475 = G__48480;
i__48448_48476 = G__48481;
continue;
} else {
var temp__4425__auto___48482 = cljs.core.seq.call(null,seq__48445_48473);
if(temp__4425__auto___48482){
var seq__48445_48483__$1 = temp__4425__auto___48482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48445_48483__$1)){
var c__36319__auto___48484 = cljs.core.chunk_first.call(null,seq__48445_48483__$1);
var G__48485 = cljs.core.chunk_rest.call(null,seq__48445_48483__$1);
var G__48486 = c__36319__auto___48484;
var G__48487 = cljs.core.count.call(null,c__36319__auto___48484);
var G__48488 = (0);
seq__48445_48473 = G__48485;
chunk__48446_48474 = G__48486;
count__48447_48475 = G__48487;
i__48448_48476 = G__48488;
continue;
} else {
var ch_48489 = cljs.core.first.call(null,seq__48445_48483__$1);
e.appendChild(ch_48489);

var G__48490 = cljs.core.next.call(null,seq__48445_48483__$1);
var G__48491 = null;
var G__48492 = (0);
var G__48493 = (0);
seq__48445_48473 = G__48490;
chunk__48446_48474 = G__48491;
count__48447_48475 = G__48492;
i__48448_48476 = G__48493;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq48438){
var G__48439 = cljs.core.first.call(null,seq48438);
var seq48438__$1 = cljs.core.next.call(null,seq48438);
var G__48440 = cljs.core.first.call(null,seq48438__$1);
var seq48438__$2 = cljs.core.next.call(null,seq48438__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__48439,G__48440,seq48438__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__36429__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36430__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36431__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36432__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36433__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__36429__auto__,prefer_table__36430__auto__,method_cache__36431__auto__,cached_hierarchy__36432__auto__,hierarchy__36433__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__36429__auto__,prefer_table__36430__auto__,method_cache__36431__auto__,cached_hierarchy__36432__auto__,hierarchy__36433__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36433__auto__,method_table__36429__auto__,prefer_table__36430__auto__,method_cache__36431__auto__,cached_hierarchy__36432__auto__));
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
var el_48494 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_48494.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_48494.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_48494.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_48494);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__48495,st_map){
var map__48500 = p__48495;
var map__48500__$1 = ((((!((map__48500 == null)))?((((map__48500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48500):map__48500);
var container_el = cljs.core.get.call(null,map__48500__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__48500,map__48500__$1,container_el){
return (function (p__48502){
var vec__48503 = p__48502;
var k = cljs.core.nth.call(null,vec__48503,(0),null);
var v = cljs.core.nth.call(null,vec__48503,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__48500,map__48500__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__48504,dom_str){
var map__48507 = p__48504;
var map__48507__$1 = ((((!((map__48507 == null)))?((((map__48507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48507):map__48507);
var c = map__48507__$1;
var content_area_el = cljs.core.get.call(null,map__48507__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__48509){
var map__48512 = p__48509;
var map__48512__$1 = ((((!((map__48512 == null)))?((((map__48512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48512):map__48512);
var content_area_el = cljs.core.get.call(null,map__48512__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_48555){
var state_val_48556 = (state_48555[(1)]);
if((state_val_48556 === (1))){
var inst_48540 = (state_48555[(7)]);
var inst_48540__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48541 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48542 = ["10px","10px","100%","68px","1.0"];
var inst_48543 = cljs.core.PersistentHashMap.fromArrays(inst_48541,inst_48542);
var inst_48544 = cljs.core.merge.call(null,inst_48543,style);
var inst_48545 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48540__$1,inst_48544);
var inst_48546 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48540__$1,msg);
var inst_48547 = cljs.core.async.timeout.call(null,(300));
var state_48555__$1 = (function (){var statearr_48557 = state_48555;
(statearr_48557[(7)] = inst_48540__$1);

(statearr_48557[(8)] = inst_48545);

(statearr_48557[(9)] = inst_48546);

return statearr_48557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48555__$1,(2),inst_48547);
} else {
if((state_val_48556 === (2))){
var inst_48540 = (state_48555[(7)]);
var inst_48549 = (state_48555[(2)]);
var inst_48550 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_48551 = ["auto"];
var inst_48552 = cljs.core.PersistentHashMap.fromArrays(inst_48550,inst_48551);
var inst_48553 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48540,inst_48552);
var state_48555__$1 = (function (){var statearr_48558 = state_48555;
(statearr_48558[(10)] = inst_48549);

return statearr_48558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48555__$1,inst_48553);
} else {
return null;
}
}
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____0 = (function (){
var statearr_48562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48562[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__);

(statearr_48562[(1)] = (1));

return statearr_48562;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____1 = (function (state_48555){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_48555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e48563){if((e48563 instanceof Object)){
var ex__37615__auto__ = e48563;
var statearr_48564_48566 = state_48555;
(statearr_48564_48566[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48567 = state_48555;
state_48555 = G__48567;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__ = function(state_48555){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____1.call(this,state_48555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_48565 = f__37633__auto__.call(null);
(statearr_48565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_48565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
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
var vec__48569 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__48569,(0),null);
var ln = cljs.core.nth.call(null,vec__48569,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__48572 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__48572,(0),null);
var file_line = cljs.core.nth.call(null,vec__48572,(1),null);
var file_column = cljs.core.nth.call(null,vec__48572,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__48572,file_name,file_line,file_column){
return (function (p1__48570_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__48570_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__48572,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__35516__auto__ = file_line;
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
var and__35504__auto__ = cause;
if(cljs.core.truth_(and__35504__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__35504__auto__;
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
var map__48575 = figwheel.client.heads_up.ensure_container.call(null);
var map__48575__$1 = ((((!((map__48575 == null)))?((((map__48575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48575):map__48575);
var content_area_el = cljs.core.get.call(null,map__48575__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_48623){
var state_val_48624 = (state_48623[(1)]);
if((state_val_48624 === (1))){
var inst_48606 = (state_48623[(7)]);
var inst_48606__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_48607 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_48608 = ["0.0"];
var inst_48609 = cljs.core.PersistentHashMap.fromArrays(inst_48607,inst_48608);
var inst_48610 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48606__$1,inst_48609);
var inst_48611 = cljs.core.async.timeout.call(null,(300));
var state_48623__$1 = (function (){var statearr_48625 = state_48623;
(statearr_48625[(8)] = inst_48610);

(statearr_48625[(7)] = inst_48606__$1);

return statearr_48625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48623__$1,(2),inst_48611);
} else {
if((state_val_48624 === (2))){
var inst_48606 = (state_48623[(7)]);
var inst_48613 = (state_48623[(2)]);
var inst_48614 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_48615 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_48616 = cljs.core.PersistentHashMap.fromArrays(inst_48614,inst_48615);
var inst_48617 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_48606,inst_48616);
var inst_48618 = cljs.core.async.timeout.call(null,(200));
var state_48623__$1 = (function (){var statearr_48626 = state_48623;
(statearr_48626[(9)] = inst_48613);

(statearr_48626[(10)] = inst_48617);

return statearr_48626;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48623__$1,(3),inst_48618);
} else {
if((state_val_48624 === (3))){
var inst_48606 = (state_48623[(7)]);
var inst_48620 = (state_48623[(2)]);
var inst_48621 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_48606,"");
var state_48623__$1 = (function (){var statearr_48627 = state_48623;
(statearr_48627[(11)] = inst_48620);

return statearr_48627;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48623__$1,inst_48621);
} else {
return null;
}
}
}
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__37612__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__37612__auto____0 = (function (){
var statearr_48631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48631[(0)] = figwheel$client$heads_up$clear_$_state_machine__37612__auto__);

(statearr_48631[(1)] = (1));

return statearr_48631;
});
var figwheel$client$heads_up$clear_$_state_machine__37612__auto____1 = (function (state_48623){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_48623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e48632){if((e48632 instanceof Object)){
var ex__37615__auto__ = e48632;
var statearr_48633_48635 = state_48623;
(statearr_48633_48635[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48636 = state_48623;
state_48623 = G__48636;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37612__auto__ = function(state_48623){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37612__auto____1.call(this,state_48623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37612__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37612__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_48634 = f__37633__auto__.call(null);
(statearr_48634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_48634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_48668){
var state_val_48669 = (state_48668[(1)]);
if((state_val_48669 === (1))){
var inst_48658 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48668__$1,(2),inst_48658);
} else {
if((state_val_48669 === (2))){
var inst_48660 = (state_48668[(2)]);
var inst_48661 = cljs.core.async.timeout.call(null,(400));
var state_48668__$1 = (function (){var statearr_48670 = state_48668;
(statearr_48670[(7)] = inst_48660);

return statearr_48670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48668__$1,(3),inst_48661);
} else {
if((state_val_48669 === (3))){
var inst_48663 = (state_48668[(2)]);
var inst_48664 = figwheel.client.heads_up.clear.call(null);
var state_48668__$1 = (function (){var statearr_48671 = state_48668;
(statearr_48671[(8)] = inst_48663);

return statearr_48671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48668__$1,(4),inst_48664);
} else {
if((state_val_48669 === (4))){
var inst_48666 = (state_48668[(2)]);
var state_48668__$1 = state_48668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48668__$1,inst_48666);
} else {
return null;
}
}
}
}
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____0 = (function (){
var statearr_48675 = [null,null,null,null,null,null,null,null,null];
(statearr_48675[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__);

(statearr_48675[(1)] = (1));

return statearr_48675;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____1 = (function (state_48668){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_48668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e48676){if((e48676 instanceof Object)){
var ex__37615__auto__ = e48676;
var statearr_48677_48679 = state_48668;
(statearr_48677_48679[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48680 = state_48668;
state_48668 = G__48680;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__ = function(state_48668){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____1.call(this,state_48668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_48678 = f__37633__auto__.call(null);
(statearr_48678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_48678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1456711312731