// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__55141__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__55140 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__55140,(0),null);
var body = cljs.core.nthnext.call(null,vec__55140,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__55141 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55142__i = 0, G__55142__a = new Array(arguments.length -  0);
while (G__55142__i < G__55142__a.length) {G__55142__a[G__55142__i] = arguments[G__55142__i + 0]; ++G__55142__i;}
  args = new cljs.core.IndexedSeq(G__55142__a,0);
} 
return G__55141__delegate.call(this,args);};
G__55141.cljs$lang$maxFixedArity = 0;
G__55141.cljs$lang$applyTo = (function (arglist__55143){
var args = cljs.core.seq(arglist__55143);
return G__55141__delegate(args);
});
G__55141.cljs$core$IFn$_invoke$arity$variadic = G__55141__delegate;
return G__55141;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36288__auto__ = (function sablono$core$update_arglists_$_iter__55148(s__55149){
return (new cljs.core.LazySeq(null,(function (){
var s__55149__$1 = s__55149;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55149__$1);
if(temp__4425__auto__){
var s__55149__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55149__$2)){
var c__36286__auto__ = cljs.core.chunk_first.call(null,s__55149__$2);
var size__36287__auto__ = cljs.core.count.call(null,c__36286__auto__);
var b__55151 = cljs.core.chunk_buffer.call(null,size__36287__auto__);
if((function (){var i__55150 = (0);
while(true){
if((i__55150 < size__36287__auto__)){
var args = cljs.core._nth.call(null,c__36286__auto__,i__55150);
cljs.core.chunk_append.call(null,b__55151,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__55152 = (i__55150 + (1));
i__55150 = G__55152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55151),sablono$core$update_arglists_$_iter__55148.call(null,cljs.core.chunk_rest.call(null,s__55149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55151),null);
}
} else {
var args = cljs.core.first.call(null,s__55149__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__55148.call(null,cljs.core.rest.call(null,s__55149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36288__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__36581__auto__ = [];
var len__36574__auto___55158 = arguments.length;
var i__36575__auto___55159 = (0);
while(true){
if((i__36575__auto___55159 < len__36574__auto___55158)){
args__36581__auto__.push((arguments[i__36575__auto___55159]));

var G__55160 = (i__36575__auto___55159 + (1));
i__36575__auto___55159 = G__55160;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((0) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36582__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36288__auto__ = (function sablono$core$iter__55154(s__55155){
return (new cljs.core.LazySeq(null,(function (){
var s__55155__$1 = s__55155;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55155__$1);
if(temp__4425__auto__){
var s__55155__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55155__$2)){
var c__36286__auto__ = cljs.core.chunk_first.call(null,s__55155__$2);
var size__36287__auto__ = cljs.core.count.call(null,c__36286__auto__);
var b__55157 = cljs.core.chunk_buffer.call(null,size__36287__auto__);
if((function (){var i__55156 = (0);
while(true){
if((i__55156 < size__36287__auto__)){
var style = cljs.core._nth.call(null,c__36286__auto__,i__55156);
cljs.core.chunk_append.call(null,b__55157,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__55161 = (i__55156 + (1));
i__55156 = G__55161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55157),sablono$core$iter__55154.call(null,cljs.core.chunk_rest.call(null,s__55155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55157),null);
}
} else {
var style = cljs.core.first.call(null,s__55155__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__55154.call(null,cljs.core.rest.call(null,s__55155__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36288__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq55153){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55153));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to55162 = (function sablono$core$link_to55162(var_args){
var args__36581__auto__ = [];
var len__36574__auto___55165 = arguments.length;
var i__36575__auto___55166 = (0);
while(true){
if((i__36575__auto___55166 < len__36574__auto___55165)){
args__36581__auto__.push((arguments[i__36575__auto___55166]));

var G__55167 = (i__36575__auto___55166 + (1));
i__36575__auto___55166 = G__55167;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((1) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((1)),(0))):null);
return sablono.core.link_to55162.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36582__auto__);
});

sablono.core.link_to55162.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to55162.cljs$lang$maxFixedArity = (1);

sablono.core.link_to55162.cljs$lang$applyTo = (function (seq55163){
var G__55164 = cljs.core.first.call(null,seq55163);
var seq55163__$1 = cljs.core.next.call(null,seq55163);
return sablono.core.link_to55162.cljs$core$IFn$_invoke$arity$variadic(G__55164,seq55163__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to55162);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to55168 = (function sablono$core$mail_to55168(var_args){
var args__36581__auto__ = [];
var len__36574__auto___55173 = arguments.length;
var i__36575__auto___55174 = (0);
while(true){
if((i__36575__auto___55174 < len__36574__auto___55173)){
args__36581__auto__.push((arguments[i__36575__auto___55174]));

var G__55175 = (i__36575__auto___55174 + (1));
i__36575__auto___55174 = G__55175;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((1) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((1)),(0))):null);
return sablono.core.mail_to55168.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36582__auto__);
});

sablono.core.mail_to55168.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__55171){
var vec__55172 = p__55171;
var content = cljs.core.nth.call(null,vec__55172,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__35516__auto__ = content;
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to55168.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to55168.cljs$lang$applyTo = (function (seq55169){
var G__55170 = cljs.core.first.call(null,seq55169);
var seq55169__$1 = cljs.core.next.call(null,seq55169);
return sablono.core.mail_to55168.cljs$core$IFn$_invoke$arity$variadic(G__55170,seq55169__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to55168);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list55176 = (function sablono$core$unordered_list55176(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36288__auto__ = (function sablono$core$unordered_list55176_$_iter__55181(s__55182){
return (new cljs.core.LazySeq(null,(function (){
var s__55182__$1 = s__55182;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55182__$1);
if(temp__4425__auto__){
var s__55182__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55182__$2)){
var c__36286__auto__ = cljs.core.chunk_first.call(null,s__55182__$2);
var size__36287__auto__ = cljs.core.count.call(null,c__36286__auto__);
var b__55184 = cljs.core.chunk_buffer.call(null,size__36287__auto__);
if((function (){var i__55183 = (0);
while(true){
if((i__55183 < size__36287__auto__)){
var x = cljs.core._nth.call(null,c__36286__auto__,i__55183);
cljs.core.chunk_append.call(null,b__55184,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__55185 = (i__55183 + (1));
i__55183 = G__55185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55184),sablono$core$unordered_list55176_$_iter__55181.call(null,cljs.core.chunk_rest.call(null,s__55182__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55184),null);
}
} else {
var x = cljs.core.first.call(null,s__55182__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list55176_$_iter__55181.call(null,cljs.core.rest.call(null,s__55182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36288__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list55176);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list55186 = (function sablono$core$ordered_list55186(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36288__auto__ = (function sablono$core$ordered_list55186_$_iter__55191(s__55192){
return (new cljs.core.LazySeq(null,(function (){
var s__55192__$1 = s__55192;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55192__$1);
if(temp__4425__auto__){
var s__55192__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55192__$2)){
var c__36286__auto__ = cljs.core.chunk_first.call(null,s__55192__$2);
var size__36287__auto__ = cljs.core.count.call(null,c__36286__auto__);
var b__55194 = cljs.core.chunk_buffer.call(null,size__36287__auto__);
if((function (){var i__55193 = (0);
while(true){
if((i__55193 < size__36287__auto__)){
var x = cljs.core._nth.call(null,c__36286__auto__,i__55193);
cljs.core.chunk_append.call(null,b__55194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__55195 = (i__55193 + (1));
i__55193 = G__55195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55194),sablono$core$ordered_list55186_$_iter__55191.call(null,cljs.core.chunk_rest.call(null,s__55192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55194),null);
}
} else {
var x = cljs.core.first.call(null,s__55192__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list55186_$_iter__55191.call(null,cljs.core.rest.call(null,s__55192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36288__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list55186);
/**
 * Create an image element.
 */
sablono.core.image55196 = (function sablono$core$image55196(var_args){
var args55197 = [];
var len__36574__auto___55200 = arguments.length;
var i__36575__auto___55201 = (0);
while(true){
if((i__36575__auto___55201 < len__36574__auto___55200)){
args55197.push((arguments[i__36575__auto___55201]));

var G__55202 = (i__36575__auto___55201 + (1));
i__36575__auto___55201 = G__55202;
continue;
} else {
}
break;
}

var G__55199 = args55197.length;
switch (G__55199) {
case 1:
return sablono.core.image55196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image55196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55197.length)].join('')));

}
});

sablono.core.image55196.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image55196.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image55196.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image55196);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__55204_SHARP_,p2__55205_SHARP_){
return [cljs.core.str(p1__55204_SHARP_),cljs.core.str("["),cljs.core.str(p2__55205_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__55206_SHARP_,p2__55207_SHARP_){
return [cljs.core.str(p1__55206_SHARP_),cljs.core.str("-"),cljs.core.str(p2__55207_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field55208 = (function sablono$core$color_field55208(var_args){
var args55209 = [];
var len__36574__auto___55276 = arguments.length;
var i__36575__auto___55277 = (0);
while(true){
if((i__36575__auto___55277 < len__36574__auto___55276)){
args55209.push((arguments[i__36575__auto___55277]));

var G__55278 = (i__36575__auto___55277 + (1));
i__36575__auto___55277 = G__55278;
continue;
} else {
}
break;
}

var G__55211 = args55209.length;
switch (G__55211) {
case 1:
return sablono.core.color_field55208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field55208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55209.length)].join('')));

}
});

sablono.core.color_field55208.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.color_field55208.call(null,name__38107__auto__,null);
});

sablono.core.color_field55208.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.color_field55208.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field55208);

/**
 * Creates a date input field.
 */
sablono.core.date_field55212 = (function sablono$core$date_field55212(var_args){
var args55213 = [];
var len__36574__auto___55280 = arguments.length;
var i__36575__auto___55281 = (0);
while(true){
if((i__36575__auto___55281 < len__36574__auto___55280)){
args55213.push((arguments[i__36575__auto___55281]));

var G__55282 = (i__36575__auto___55281 + (1));
i__36575__auto___55281 = G__55282;
continue;
} else {
}
break;
}

var G__55215 = args55213.length;
switch (G__55215) {
case 1:
return sablono.core.date_field55212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field55212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55213.length)].join('')));

}
});

sablono.core.date_field55212.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.date_field55212.call(null,name__38107__auto__,null);
});

sablono.core.date_field55212.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.date_field55212.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field55212);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field55216 = (function sablono$core$datetime_field55216(var_args){
var args55217 = [];
var len__36574__auto___55284 = arguments.length;
var i__36575__auto___55285 = (0);
while(true){
if((i__36575__auto___55285 < len__36574__auto___55284)){
args55217.push((arguments[i__36575__auto___55285]));

var G__55286 = (i__36575__auto___55285 + (1));
i__36575__auto___55285 = G__55286;
continue;
} else {
}
break;
}

var G__55219 = args55217.length;
switch (G__55219) {
case 1:
return sablono.core.datetime_field55216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field55216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55217.length)].join('')));

}
});

sablono.core.datetime_field55216.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.datetime_field55216.call(null,name__38107__auto__,null);
});

sablono.core.datetime_field55216.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.datetime_field55216.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field55216);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field55220 = (function sablono$core$datetime_local_field55220(var_args){
var args55221 = [];
var len__36574__auto___55288 = arguments.length;
var i__36575__auto___55289 = (0);
while(true){
if((i__36575__auto___55289 < len__36574__auto___55288)){
args55221.push((arguments[i__36575__auto___55289]));

var G__55290 = (i__36575__auto___55289 + (1));
i__36575__auto___55289 = G__55290;
continue;
} else {
}
break;
}

var G__55223 = args55221.length;
switch (G__55223) {
case 1:
return sablono.core.datetime_local_field55220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field55220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55221.length)].join('')));

}
});

sablono.core.datetime_local_field55220.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.datetime_local_field55220.call(null,name__38107__auto__,null);
});

sablono.core.datetime_local_field55220.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.datetime_local_field55220.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field55220);

/**
 * Creates a email input field.
 */
sablono.core.email_field55224 = (function sablono$core$email_field55224(var_args){
var args55225 = [];
var len__36574__auto___55292 = arguments.length;
var i__36575__auto___55293 = (0);
while(true){
if((i__36575__auto___55293 < len__36574__auto___55292)){
args55225.push((arguments[i__36575__auto___55293]));

var G__55294 = (i__36575__auto___55293 + (1));
i__36575__auto___55293 = G__55294;
continue;
} else {
}
break;
}

var G__55227 = args55225.length;
switch (G__55227) {
case 1:
return sablono.core.email_field55224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field55224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55225.length)].join('')));

}
});

sablono.core.email_field55224.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.email_field55224.call(null,name__38107__auto__,null);
});

sablono.core.email_field55224.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.email_field55224.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field55224);

/**
 * Creates a file input field.
 */
sablono.core.file_field55228 = (function sablono$core$file_field55228(var_args){
var args55229 = [];
var len__36574__auto___55296 = arguments.length;
var i__36575__auto___55297 = (0);
while(true){
if((i__36575__auto___55297 < len__36574__auto___55296)){
args55229.push((arguments[i__36575__auto___55297]));

var G__55298 = (i__36575__auto___55297 + (1));
i__36575__auto___55297 = G__55298;
continue;
} else {
}
break;
}

var G__55231 = args55229.length;
switch (G__55231) {
case 1:
return sablono.core.file_field55228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field55228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55229.length)].join('')));

}
});

sablono.core.file_field55228.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.file_field55228.call(null,name__38107__auto__,null);
});

sablono.core.file_field55228.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.file_field55228.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field55228);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field55232 = (function sablono$core$hidden_field55232(var_args){
var args55233 = [];
var len__36574__auto___55300 = arguments.length;
var i__36575__auto___55301 = (0);
while(true){
if((i__36575__auto___55301 < len__36574__auto___55300)){
args55233.push((arguments[i__36575__auto___55301]));

var G__55302 = (i__36575__auto___55301 + (1));
i__36575__auto___55301 = G__55302;
continue;
} else {
}
break;
}

var G__55235 = args55233.length;
switch (G__55235) {
case 1:
return sablono.core.hidden_field55232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field55232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55233.length)].join('')));

}
});

sablono.core.hidden_field55232.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.hidden_field55232.call(null,name__38107__auto__,null);
});

sablono.core.hidden_field55232.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.hidden_field55232.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field55232);

/**
 * Creates a month input field.
 */
sablono.core.month_field55236 = (function sablono$core$month_field55236(var_args){
var args55237 = [];
var len__36574__auto___55304 = arguments.length;
var i__36575__auto___55305 = (0);
while(true){
if((i__36575__auto___55305 < len__36574__auto___55304)){
args55237.push((arguments[i__36575__auto___55305]));

var G__55306 = (i__36575__auto___55305 + (1));
i__36575__auto___55305 = G__55306;
continue;
} else {
}
break;
}

var G__55239 = args55237.length;
switch (G__55239) {
case 1:
return sablono.core.month_field55236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field55236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55237.length)].join('')));

}
});

sablono.core.month_field55236.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.month_field55236.call(null,name__38107__auto__,null);
});

sablono.core.month_field55236.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.month_field55236.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field55236);

/**
 * Creates a number input field.
 */
sablono.core.number_field55240 = (function sablono$core$number_field55240(var_args){
var args55241 = [];
var len__36574__auto___55308 = arguments.length;
var i__36575__auto___55309 = (0);
while(true){
if((i__36575__auto___55309 < len__36574__auto___55308)){
args55241.push((arguments[i__36575__auto___55309]));

var G__55310 = (i__36575__auto___55309 + (1));
i__36575__auto___55309 = G__55310;
continue;
} else {
}
break;
}

var G__55243 = args55241.length;
switch (G__55243) {
case 1:
return sablono.core.number_field55240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field55240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55241.length)].join('')));

}
});

sablono.core.number_field55240.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.number_field55240.call(null,name__38107__auto__,null);
});

sablono.core.number_field55240.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.number_field55240.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field55240);

/**
 * Creates a password input field.
 */
sablono.core.password_field55244 = (function sablono$core$password_field55244(var_args){
var args55245 = [];
var len__36574__auto___55312 = arguments.length;
var i__36575__auto___55313 = (0);
while(true){
if((i__36575__auto___55313 < len__36574__auto___55312)){
args55245.push((arguments[i__36575__auto___55313]));

var G__55314 = (i__36575__auto___55313 + (1));
i__36575__auto___55313 = G__55314;
continue;
} else {
}
break;
}

var G__55247 = args55245.length;
switch (G__55247) {
case 1:
return sablono.core.password_field55244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field55244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55245.length)].join('')));

}
});

sablono.core.password_field55244.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.password_field55244.call(null,name__38107__auto__,null);
});

sablono.core.password_field55244.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.password_field55244.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field55244);

/**
 * Creates a range input field.
 */
sablono.core.range_field55248 = (function sablono$core$range_field55248(var_args){
var args55249 = [];
var len__36574__auto___55316 = arguments.length;
var i__36575__auto___55317 = (0);
while(true){
if((i__36575__auto___55317 < len__36574__auto___55316)){
args55249.push((arguments[i__36575__auto___55317]));

var G__55318 = (i__36575__auto___55317 + (1));
i__36575__auto___55317 = G__55318;
continue;
} else {
}
break;
}

var G__55251 = args55249.length;
switch (G__55251) {
case 1:
return sablono.core.range_field55248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field55248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55249.length)].join('')));

}
});

sablono.core.range_field55248.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.range_field55248.call(null,name__38107__auto__,null);
});

sablono.core.range_field55248.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.range_field55248.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field55248);

/**
 * Creates a search input field.
 */
sablono.core.search_field55252 = (function sablono$core$search_field55252(var_args){
var args55253 = [];
var len__36574__auto___55320 = arguments.length;
var i__36575__auto___55321 = (0);
while(true){
if((i__36575__auto___55321 < len__36574__auto___55320)){
args55253.push((arguments[i__36575__auto___55321]));

var G__55322 = (i__36575__auto___55321 + (1));
i__36575__auto___55321 = G__55322;
continue;
} else {
}
break;
}

var G__55255 = args55253.length;
switch (G__55255) {
case 1:
return sablono.core.search_field55252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field55252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55253.length)].join('')));

}
});

sablono.core.search_field55252.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.search_field55252.call(null,name__38107__auto__,null);
});

sablono.core.search_field55252.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.search_field55252.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field55252);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field55256 = (function sablono$core$tel_field55256(var_args){
var args55257 = [];
var len__36574__auto___55324 = arguments.length;
var i__36575__auto___55325 = (0);
while(true){
if((i__36575__auto___55325 < len__36574__auto___55324)){
args55257.push((arguments[i__36575__auto___55325]));

var G__55326 = (i__36575__auto___55325 + (1));
i__36575__auto___55325 = G__55326;
continue;
} else {
}
break;
}

var G__55259 = args55257.length;
switch (G__55259) {
case 1:
return sablono.core.tel_field55256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field55256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55257.length)].join('')));

}
});

sablono.core.tel_field55256.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.tel_field55256.call(null,name__38107__auto__,null);
});

sablono.core.tel_field55256.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.tel_field55256.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field55256);

/**
 * Creates a text input field.
 */
sablono.core.text_field55260 = (function sablono$core$text_field55260(var_args){
var args55261 = [];
var len__36574__auto___55328 = arguments.length;
var i__36575__auto___55329 = (0);
while(true){
if((i__36575__auto___55329 < len__36574__auto___55328)){
args55261.push((arguments[i__36575__auto___55329]));

var G__55330 = (i__36575__auto___55329 + (1));
i__36575__auto___55329 = G__55330;
continue;
} else {
}
break;
}

var G__55263 = args55261.length;
switch (G__55263) {
case 1:
return sablono.core.text_field55260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field55260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55261.length)].join('')));

}
});

sablono.core.text_field55260.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.text_field55260.call(null,name__38107__auto__,null);
});

sablono.core.text_field55260.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.text_field55260.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field55260);

/**
 * Creates a time input field.
 */
sablono.core.time_field55264 = (function sablono$core$time_field55264(var_args){
var args55265 = [];
var len__36574__auto___55332 = arguments.length;
var i__36575__auto___55333 = (0);
while(true){
if((i__36575__auto___55333 < len__36574__auto___55332)){
args55265.push((arguments[i__36575__auto___55333]));

var G__55334 = (i__36575__auto___55333 + (1));
i__36575__auto___55333 = G__55334;
continue;
} else {
}
break;
}

var G__55267 = args55265.length;
switch (G__55267) {
case 1:
return sablono.core.time_field55264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field55264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55265.length)].join('')));

}
});

sablono.core.time_field55264.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.time_field55264.call(null,name__38107__auto__,null);
});

sablono.core.time_field55264.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.time_field55264.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field55264);

/**
 * Creates a url input field.
 */
sablono.core.url_field55268 = (function sablono$core$url_field55268(var_args){
var args55269 = [];
var len__36574__auto___55336 = arguments.length;
var i__36575__auto___55337 = (0);
while(true){
if((i__36575__auto___55337 < len__36574__auto___55336)){
args55269.push((arguments[i__36575__auto___55337]));

var G__55338 = (i__36575__auto___55337 + (1));
i__36575__auto___55337 = G__55338;
continue;
} else {
}
break;
}

var G__55271 = args55269.length;
switch (G__55271) {
case 1:
return sablono.core.url_field55268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field55268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55269.length)].join('')));

}
});

sablono.core.url_field55268.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.url_field55268.call(null,name__38107__auto__,null);
});

sablono.core.url_field55268.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.url_field55268.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field55268);

/**
 * Creates a week input field.
 */
sablono.core.week_field55272 = (function sablono$core$week_field55272(var_args){
var args55273 = [];
var len__36574__auto___55340 = arguments.length;
var i__36575__auto___55341 = (0);
while(true){
if((i__36575__auto___55341 < len__36574__auto___55340)){
args55273.push((arguments[i__36575__auto___55341]));

var G__55342 = (i__36575__auto___55341 + (1));
i__36575__auto___55341 = G__55342;
continue;
} else {
}
break;
}

var G__55275 = args55273.length;
switch (G__55275) {
case 1:
return sablono.core.week_field55272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field55272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55273.length)].join('')));

}
});

sablono.core.week_field55272.cljs$core$IFn$_invoke$arity$1 = (function (name__38107__auto__){
return sablono.core.week_field55272.call(null,name__38107__auto__,null);
});

sablono.core.week_field55272.cljs$core$IFn$_invoke$arity$2 = (function (name__38107__auto__,value__38108__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38107__auto__,value__38108__auto__);
});

sablono.core.week_field55272.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field55272);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box55344 = (function sablono$core$check_box55344(var_args){
var args55345 = [];
var len__36574__auto___55348 = arguments.length;
var i__36575__auto___55349 = (0);
while(true){
if((i__36575__auto___55349 < len__36574__auto___55348)){
args55345.push((arguments[i__36575__auto___55349]));

var G__55350 = (i__36575__auto___55349 + (1));
i__36575__auto___55349 = G__55350;
continue;
} else {
}
break;
}

var G__55347 = args55345.length;
switch (G__55347) {
case 1:
return sablono.core.check_box55344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box55344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box55344.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55345.length)].join('')));

}
});

sablono.core.check_box55344.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box55344.call(null,name,null);
});

sablono.core.check_box55344.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box55344.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box55344.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box55344.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box55344);
/**
 * Creates a radio button.
 */
sablono.core.radio_button55352 = (function sablono$core$radio_button55352(var_args){
var args55353 = [];
var len__36574__auto___55356 = arguments.length;
var i__36575__auto___55357 = (0);
while(true){
if((i__36575__auto___55357 < len__36574__auto___55356)){
args55353.push((arguments[i__36575__auto___55357]));

var G__55358 = (i__36575__auto___55357 + (1));
i__36575__auto___55357 = G__55358;
continue;
} else {
}
break;
}

var G__55355 = args55353.length;
switch (G__55355) {
case 1:
return sablono.core.radio_button55352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button55352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button55352.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55353.length)].join('')));

}
});

sablono.core.radio_button55352.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button55352.call(null,group,null);
});

sablono.core.radio_button55352.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button55352.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button55352.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button55352.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button55352);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options55360 = (function sablono$core$select_options55360(coll){
var iter__36288__auto__ = (function sablono$core$select_options55360_$_iter__55369(s__55370){
return (new cljs.core.LazySeq(null,(function (){
var s__55370__$1 = s__55370;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__55370__$1);
if(temp__4425__auto__){
var s__55370__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55370__$2)){
var c__36286__auto__ = cljs.core.chunk_first.call(null,s__55370__$2);
var size__36287__auto__ = cljs.core.count.call(null,c__36286__auto__);
var b__55372 = cljs.core.chunk_buffer.call(null,size__36287__auto__);
if((function (){var i__55371 = (0);
while(true){
if((i__55371 < size__36287__auto__)){
var x = cljs.core._nth.call(null,c__36286__auto__,i__55371);
cljs.core.chunk_append.call(null,b__55372,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55375 = x;
var text = cljs.core.nth.call(null,vec__55375,(0),null);
var val = cljs.core.nth.call(null,vec__55375,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__55375,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options55360.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__55377 = (i__55371 + (1));
i__55371 = G__55377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55372),sablono$core$select_options55360_$_iter__55369.call(null,cljs.core.chunk_rest.call(null,s__55370__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55372),null);
}
} else {
var x = cljs.core.first.call(null,s__55370__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__55376 = x;
var text = cljs.core.nth.call(null,vec__55376,(0),null);
var val = cljs.core.nth.call(null,vec__55376,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__55376,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options55360.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options55360_$_iter__55369.call(null,cljs.core.rest.call(null,s__55370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36288__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options55360);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down55378 = (function sablono$core$drop_down55378(var_args){
var args55379 = [];
var len__36574__auto___55382 = arguments.length;
var i__36575__auto___55383 = (0);
while(true){
if((i__36575__auto___55383 < len__36574__auto___55382)){
args55379.push((arguments[i__36575__auto___55383]));

var G__55384 = (i__36575__auto___55383 + (1));
i__36575__auto___55383 = G__55384;
continue;
} else {
}
break;
}

var G__55381 = args55379.length;
switch (G__55381) {
case 2:
return sablono.core.drop_down55378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down55378.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55379.length)].join('')));

}
});

sablono.core.drop_down55378.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down55378.call(null,name,options,null);
});

sablono.core.drop_down55378.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down55378.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down55378);
/**
 * Creates a text area element.
 */
sablono.core.text_area55386 = (function sablono$core$text_area55386(var_args){
var args55387 = [];
var len__36574__auto___55390 = arguments.length;
var i__36575__auto___55391 = (0);
while(true){
if((i__36575__auto___55391 < len__36574__auto___55390)){
args55387.push((arguments[i__36575__auto___55391]));

var G__55392 = (i__36575__auto___55391 + (1));
i__36575__auto___55391 = G__55392;
continue;
} else {
}
break;
}

var G__55389 = args55387.length;
switch (G__55389) {
case 1:
return sablono.core.text_area55386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area55386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55387.length)].join('')));

}
});

sablono.core.text_area55386.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area55386.call(null,name,null);
});

sablono.core.text_area55386.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area55386.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area55386);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label55394 = (function sablono$core$label55394(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label55394);
/**
 * Creates a submit button.
 */
sablono.core.submit_button55395 = (function sablono$core$submit_button55395(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button55395);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button55396 = (function sablono$core$reset_button55396(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button55396);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to55397 = (function sablono$core$form_to55397(var_args){
var args__36581__auto__ = [];
var len__36574__auto___55402 = arguments.length;
var i__36575__auto___55403 = (0);
while(true){
if((i__36575__auto___55403 < len__36574__auto___55402)){
args__36581__auto__.push((arguments[i__36575__auto___55403]));

var G__55404 = (i__36575__auto___55403 + (1));
i__36575__auto___55403 = G__55404;
continue;
} else {
}
break;
}

var argseq__36582__auto__ = ((((1) < args__36581__auto__.length))?(new cljs.core.IndexedSeq(args__36581__auto__.slice((1)),(0))):null);
return sablono.core.form_to55397.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36582__auto__);
});

sablono.core.form_to55397.cljs$core$IFn$_invoke$arity$variadic = (function (p__55400,body){
var vec__55401 = p__55400;
var method = cljs.core.nth.call(null,vec__55401,(0),null);
var action = cljs.core.nth.call(null,vec__55401,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to55397.cljs$lang$maxFixedArity = (1);

sablono.core.form_to55397.cljs$lang$applyTo = (function (seq55398){
var G__55399 = cljs.core.first.call(null,seq55398);
var seq55398__$1 = cljs.core.next.call(null,seq55398);
return sablono.core.form_to55397.cljs$core$IFn$_invoke$arity$variadic(G__55399,seq55398__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to55397);

//# sourceMappingURL=core.js.map?rel=1456712366309