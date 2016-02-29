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
var len__36574__auto___42066 = arguments.length;
var i__36575__auto___42067 = (0);
while(true){
if((i__36575__auto___42067 < len__36574__auto___42066)){
args__36581__auto__.push((arguments[i__36575__auto___42067]));

var G__42068 = (i__36575__auto___42067 + (1));
i__36575__auto___42067 = G__42068;
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
var seq__42058_42069 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__42059_42070 = null;
var count__42060_42071 = (0);
var i__42061_42072 = (0);
while(true){
if((i__42061_42072 < count__42060_42071)){
var k_42073 = cljs.core._nth.call(null,chunk__42059_42070,i__42061_42072);
e.setAttribute(cljs.core.name.call(null,k_42073),cljs.core.get.call(null,attrs,k_42073));

var G__42074 = seq__42058_42069;
var G__42075 = chunk__42059_42070;
var G__42076 = count__42060_42071;
var G__42077 = (i__42061_42072 + (1));
seq__42058_42069 = G__42074;
chunk__42059_42070 = G__42075;
count__42060_42071 = G__42076;
i__42061_42072 = G__42077;
continue;
} else {
var temp__4425__auto___42078 = cljs.core.seq.call(null,seq__42058_42069);
if(temp__4425__auto___42078){
var seq__42058_42079__$1 = temp__4425__auto___42078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42058_42079__$1)){
var c__36319__auto___42080 = cljs.core.chunk_first.call(null,seq__42058_42079__$1);
var G__42081 = cljs.core.chunk_rest.call(null,seq__42058_42079__$1);
var G__42082 = c__36319__auto___42080;
var G__42083 = cljs.core.count.call(null,c__36319__auto___42080);
var G__42084 = (0);
seq__42058_42069 = G__42081;
chunk__42059_42070 = G__42082;
count__42060_42071 = G__42083;
i__42061_42072 = G__42084;
continue;
} else {
var k_42085 = cljs.core.first.call(null,seq__42058_42079__$1);
e.setAttribute(cljs.core.name.call(null,k_42085),cljs.core.get.call(null,attrs,k_42085));

var G__42086 = cljs.core.next.call(null,seq__42058_42079__$1);
var G__42087 = null;
var G__42088 = (0);
var G__42089 = (0);
seq__42058_42069 = G__42086;
chunk__42059_42070 = G__42087;
count__42060_42071 = G__42088;
i__42061_42072 = G__42089;
continue;
}
} else {
}
}
break;
}

var seq__42062_42090 = cljs.core.seq.call(null,children);
var chunk__42063_42091 = null;
var count__42064_42092 = (0);
var i__42065_42093 = (0);
while(true){
if((i__42065_42093 < count__42064_42092)){
var ch_42094 = cljs.core._nth.call(null,chunk__42063_42091,i__42065_42093);
e.appendChild(ch_42094);

var G__42095 = seq__42062_42090;
var G__42096 = chunk__42063_42091;
var G__42097 = count__42064_42092;
var G__42098 = (i__42065_42093 + (1));
seq__42062_42090 = G__42095;
chunk__42063_42091 = G__42096;
count__42064_42092 = G__42097;
i__42065_42093 = G__42098;
continue;
} else {
var temp__4425__auto___42099 = cljs.core.seq.call(null,seq__42062_42090);
if(temp__4425__auto___42099){
var seq__42062_42100__$1 = temp__4425__auto___42099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42062_42100__$1)){
var c__36319__auto___42101 = cljs.core.chunk_first.call(null,seq__42062_42100__$1);
var G__42102 = cljs.core.chunk_rest.call(null,seq__42062_42100__$1);
var G__42103 = c__36319__auto___42101;
var G__42104 = cljs.core.count.call(null,c__36319__auto___42101);
var G__42105 = (0);
seq__42062_42090 = G__42102;
chunk__42063_42091 = G__42103;
count__42064_42092 = G__42104;
i__42065_42093 = G__42105;
continue;
} else {
var ch_42106 = cljs.core.first.call(null,seq__42062_42100__$1);
e.appendChild(ch_42106);

var G__42107 = cljs.core.next.call(null,seq__42062_42100__$1);
var G__42108 = null;
var G__42109 = (0);
var G__42110 = (0);
seq__42062_42090 = G__42107;
chunk__42063_42091 = G__42108;
count__42064_42092 = G__42109;
i__42065_42093 = G__42110;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq42055){
var G__42056 = cljs.core.first.call(null,seq42055);
var seq42055__$1 = cljs.core.next.call(null,seq42055);
var G__42057 = cljs.core.first.call(null,seq42055__$1);
var seq42055__$2 = cljs.core.next.call(null,seq42055__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__42056,G__42057,seq42055__$2);
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
var el_42111 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_42111.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_42111.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_42111.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_42111);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__42112,st_map){
var map__42117 = p__42112;
var map__42117__$1 = ((((!((map__42117 == null)))?((((map__42117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42117):map__42117);
var container_el = cljs.core.get.call(null,map__42117__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__42117,map__42117__$1,container_el){
return (function (p__42119){
var vec__42120 = p__42119;
var k = cljs.core.nth.call(null,vec__42120,(0),null);
var v = cljs.core.nth.call(null,vec__42120,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__42117,map__42117__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__42121,dom_str){
var map__42124 = p__42121;
var map__42124__$1 = ((((!((map__42124 == null)))?((((map__42124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42124):map__42124);
var c = map__42124__$1;
var content_area_el = cljs.core.get.call(null,map__42124__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__42126){
var map__42129 = p__42126;
var map__42129__$1 = ((((!((map__42129 == null)))?((((map__42129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42129):map__42129);
var content_area_el = cljs.core.get.call(null,map__42129__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
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
return (function (state_42172){
var state_val_42173 = (state_42172[(1)]);
if((state_val_42173 === (1))){
var inst_42157 = (state_42172[(7)]);
var inst_42157__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42158 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42159 = ["10px","10px","100%","68px","1.0"];
var inst_42160 = cljs.core.PersistentHashMap.fromArrays(inst_42158,inst_42159);
var inst_42161 = cljs.core.merge.call(null,inst_42160,style);
var inst_42162 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42157__$1,inst_42161);
var inst_42163 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42157__$1,msg);
var inst_42164 = cljs.core.async.timeout.call(null,(300));
var state_42172__$1 = (function (){var statearr_42174 = state_42172;
(statearr_42174[(7)] = inst_42157__$1);

(statearr_42174[(8)] = inst_42163);

(statearr_42174[(9)] = inst_42162);

return statearr_42174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42172__$1,(2),inst_42164);
} else {
if((state_val_42173 === (2))){
var inst_42157 = (state_42172[(7)]);
var inst_42166 = (state_42172[(2)]);
var inst_42167 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_42168 = ["auto"];
var inst_42169 = cljs.core.PersistentHashMap.fromArrays(inst_42167,inst_42168);
var inst_42170 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42157,inst_42169);
var state_42172__$1 = (function (){var statearr_42175 = state_42172;
(statearr_42175[(10)] = inst_42166);

return statearr_42175;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42172__$1,inst_42170);
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
var statearr_42179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42179[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__);

(statearr_42179[(1)] = (1));

return statearr_42179;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____1 = (function (state_42172){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42180){if((e42180 instanceof Object)){
var ex__37615__auto__ = e42180;
var statearr_42181_42183 = state_42172;
(statearr_42181_42183[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42184 = state_42172;
state_42172 = G__42184;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__ = function(state_42172){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____1.call(this,state_42172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_42182 = f__37633__auto__.call(null);
(statearr_42182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_42182;
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
var vec__42186 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__42186,(0),null);
var ln = cljs.core.nth.call(null,vec__42186,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__42189 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__42189,(0),null);
var file_line = cljs.core.nth.call(null,vec__42189,(1),null);
var file_column = cljs.core.nth.call(null,vec__42189,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__42189,file_name,file_line,file_column){
return (function (p1__42187_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__42187_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__42189,file_name,file_line,file_column))
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
var map__42192 = figwheel.client.heads_up.ensure_container.call(null);
var map__42192__$1 = ((((!((map__42192 == null)))?((((map__42192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42192):map__42192);
var content_area_el = cljs.core.get.call(null,map__42192__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_42240){
var state_val_42241 = (state_42240[(1)]);
if((state_val_42241 === (1))){
var inst_42223 = (state_42240[(7)]);
var inst_42223__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42224 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42225 = ["0.0"];
var inst_42226 = cljs.core.PersistentHashMap.fromArrays(inst_42224,inst_42225);
var inst_42227 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42223__$1,inst_42226);
var inst_42228 = cljs.core.async.timeout.call(null,(300));
var state_42240__$1 = (function (){var statearr_42242 = state_42240;
(statearr_42242[(8)] = inst_42227);

(statearr_42242[(7)] = inst_42223__$1);

return statearr_42242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42240__$1,(2),inst_42228);
} else {
if((state_val_42241 === (2))){
var inst_42223 = (state_42240[(7)]);
var inst_42230 = (state_42240[(2)]);
var inst_42231 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_42232 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_42233 = cljs.core.PersistentHashMap.fromArrays(inst_42231,inst_42232);
var inst_42234 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42223,inst_42233);
var inst_42235 = cljs.core.async.timeout.call(null,(200));
var state_42240__$1 = (function (){var statearr_42243 = state_42240;
(statearr_42243[(9)] = inst_42234);

(statearr_42243[(10)] = inst_42230);

return statearr_42243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42240__$1,(3),inst_42235);
} else {
if((state_val_42241 === (3))){
var inst_42223 = (state_42240[(7)]);
var inst_42237 = (state_42240[(2)]);
var inst_42238 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42223,"");
var state_42240__$1 = (function (){var statearr_42244 = state_42240;
(statearr_42244[(11)] = inst_42237);

return statearr_42244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42240__$1,inst_42238);
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
var statearr_42248 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42248[(0)] = figwheel$client$heads_up$clear_$_state_machine__37612__auto__);

(statearr_42248[(1)] = (1));

return statearr_42248;
});
var figwheel$client$heads_up$clear_$_state_machine__37612__auto____1 = (function (state_42240){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42249){if((e42249 instanceof Object)){
var ex__37615__auto__ = e42249;
var statearr_42250_42252 = state_42240;
(statearr_42250_42252[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42253 = state_42240;
state_42240 = G__42253;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37612__auto__ = function(state_42240){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37612__auto____1.call(this,state_42240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37612__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37612__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_42251 = f__37633__auto__.call(null);
(statearr_42251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_42251;
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
return (function (state_42285){
var state_val_42286 = (state_42285[(1)]);
if((state_val_42286 === (1))){
var inst_42275 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_42285__$1 = state_42285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42285__$1,(2),inst_42275);
} else {
if((state_val_42286 === (2))){
var inst_42277 = (state_42285[(2)]);
var inst_42278 = cljs.core.async.timeout.call(null,(400));
var state_42285__$1 = (function (){var statearr_42287 = state_42285;
(statearr_42287[(7)] = inst_42277);

return statearr_42287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42285__$1,(3),inst_42278);
} else {
if((state_val_42286 === (3))){
var inst_42280 = (state_42285[(2)]);
var inst_42281 = figwheel.client.heads_up.clear.call(null);
var state_42285__$1 = (function (){var statearr_42288 = state_42285;
(statearr_42288[(8)] = inst_42280);

return statearr_42288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42285__$1,(4),inst_42281);
} else {
if((state_val_42286 === (4))){
var inst_42283 = (state_42285[(2)]);
var state_42285__$1 = state_42285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42285__$1,inst_42283);
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
var statearr_42292 = [null,null,null,null,null,null,null,null,null];
(statearr_42292[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__);

(statearr_42292[(1)] = (1));

return statearr_42292;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____1 = (function (state_42285){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_42285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e42293){if((e42293 instanceof Object)){
var ex__37615__auto__ = e42293;
var statearr_42294_42296 = state_42285;
(statearr_42294_42296[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42297 = state_42285;
state_42285 = G__42297;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__ = function(state_42285){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____1.call(this,state_42285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_42295 = f__37633__auto__.call(null);
(statearr_42295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_42295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1456713002412