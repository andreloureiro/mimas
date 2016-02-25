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
var G__43696__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__43695 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__43695,(0),null);
var body = cljs.core.nthnext.call(null,vec__43695,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__43696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43697__i = 0, G__43697__a = new Array(arguments.length -  0);
while (G__43697__i < G__43697__a.length) {G__43697__a[G__43697__i] = arguments[G__43697__i + 0]; ++G__43697__i;}
  args = new cljs.core.IndexedSeq(G__43697__a,0);
} 
return G__43696__delegate.call(this,args);};
G__43696.cljs$lang$maxFixedArity = 0;
G__43696.cljs$lang$applyTo = (function (arglist__43698){
var args = cljs.core.seq(arglist__43698);
return G__43696__delegate(args);
});
G__43696.cljs$core$IFn$_invoke$arity$variadic = G__43696__delegate;
return G__43696;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36286__auto__ = (function sablono$core$update_arglists_$_iter__43703(s__43704){
return (new cljs.core.LazySeq(null,(function (){
var s__43704__$1 = s__43704;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43704__$1);
if(temp__4425__auto__){
var s__43704__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43704__$2)){
var c__36284__auto__ = cljs.core.chunk_first.call(null,s__43704__$2);
var size__36285__auto__ = cljs.core.count.call(null,c__36284__auto__);
var b__43706 = cljs.core.chunk_buffer.call(null,size__36285__auto__);
if((function (){var i__43705 = (0);
while(true){
if((i__43705 < size__36285__auto__)){
var args = cljs.core._nth.call(null,c__36284__auto__,i__43705);
cljs.core.chunk_append.call(null,b__43706,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__43707 = (i__43705 + (1));
i__43705 = G__43707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43706),sablono$core$update_arglists_$_iter__43703.call(null,cljs.core.chunk_rest.call(null,s__43704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43706),null);
}
} else {
var args = cljs.core.first.call(null,s__43704__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__43703.call(null,cljs.core.rest.call(null,s__43704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36286__auto__.call(null,arglists);
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
var args__36579__auto__ = [];
var len__36572__auto___43713 = arguments.length;
var i__36573__auto___43714 = (0);
while(true){
if((i__36573__auto___43714 < len__36572__auto___43713)){
args__36579__auto__.push((arguments[i__36573__auto___43714]));

var G__43715 = (i__36573__auto___43714 + (1));
i__36573__auto___43714 = G__43715;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((0) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__36580__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36286__auto__ = (function sablono$core$iter__43709(s__43710){
return (new cljs.core.LazySeq(null,(function (){
var s__43710__$1 = s__43710;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43710__$1);
if(temp__4425__auto__){
var s__43710__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43710__$2)){
var c__36284__auto__ = cljs.core.chunk_first.call(null,s__43710__$2);
var size__36285__auto__ = cljs.core.count.call(null,c__36284__auto__);
var b__43712 = cljs.core.chunk_buffer.call(null,size__36285__auto__);
if((function (){var i__43711 = (0);
while(true){
if((i__43711 < size__36285__auto__)){
var style = cljs.core._nth.call(null,c__36284__auto__,i__43711);
cljs.core.chunk_append.call(null,b__43712,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__43716 = (i__43711 + (1));
i__43711 = G__43716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43712),sablono$core$iter__43709.call(null,cljs.core.chunk_rest.call(null,s__43710__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43712),null);
}
} else {
var style = cljs.core.first.call(null,s__43710__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__43709.call(null,cljs.core.rest.call(null,s__43710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36286__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq43708){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43708));
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
sablono.core.link_to43717 = (function sablono$core$link_to43717(var_args){
var args__36579__auto__ = [];
var len__36572__auto___43720 = arguments.length;
var i__36573__auto___43721 = (0);
while(true){
if((i__36573__auto___43721 < len__36572__auto___43720)){
args__36579__auto__.push((arguments[i__36573__auto___43721]));

var G__43722 = (i__36573__auto___43721 + (1));
i__36573__auto___43721 = G__43722;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((1) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((1)),(0))):null);
return sablono.core.link_to43717.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36580__auto__);
});

sablono.core.link_to43717.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to43717.cljs$lang$maxFixedArity = (1);

sablono.core.link_to43717.cljs$lang$applyTo = (function (seq43718){
var G__43719 = cljs.core.first.call(null,seq43718);
var seq43718__$1 = cljs.core.next.call(null,seq43718);
return sablono.core.link_to43717.cljs$core$IFn$_invoke$arity$variadic(G__43719,seq43718__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to43717);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to43723 = (function sablono$core$mail_to43723(var_args){
var args__36579__auto__ = [];
var len__36572__auto___43728 = arguments.length;
var i__36573__auto___43729 = (0);
while(true){
if((i__36573__auto___43729 < len__36572__auto___43728)){
args__36579__auto__.push((arguments[i__36573__auto___43729]));

var G__43730 = (i__36573__auto___43729 + (1));
i__36573__auto___43729 = G__43730;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((1) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((1)),(0))):null);
return sablono.core.mail_to43723.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36580__auto__);
});

sablono.core.mail_to43723.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__43726){
var vec__43727 = p__43726;
var content = cljs.core.nth.call(null,vec__43727,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__35514__auto__ = content;
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to43723.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to43723.cljs$lang$applyTo = (function (seq43724){
var G__43725 = cljs.core.first.call(null,seq43724);
var seq43724__$1 = cljs.core.next.call(null,seq43724);
return sablono.core.mail_to43723.cljs$core$IFn$_invoke$arity$variadic(G__43725,seq43724__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to43723);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list43731 = (function sablono$core$unordered_list43731(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36286__auto__ = (function sablono$core$unordered_list43731_$_iter__43736(s__43737){
return (new cljs.core.LazySeq(null,(function (){
var s__43737__$1 = s__43737;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43737__$1);
if(temp__4425__auto__){
var s__43737__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43737__$2)){
var c__36284__auto__ = cljs.core.chunk_first.call(null,s__43737__$2);
var size__36285__auto__ = cljs.core.count.call(null,c__36284__auto__);
var b__43739 = cljs.core.chunk_buffer.call(null,size__36285__auto__);
if((function (){var i__43738 = (0);
while(true){
if((i__43738 < size__36285__auto__)){
var x = cljs.core._nth.call(null,c__36284__auto__,i__43738);
cljs.core.chunk_append.call(null,b__43739,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__43740 = (i__43738 + (1));
i__43738 = G__43740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43739),sablono$core$unordered_list43731_$_iter__43736.call(null,cljs.core.chunk_rest.call(null,s__43737__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43739),null);
}
} else {
var x = cljs.core.first.call(null,s__43737__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list43731_$_iter__43736.call(null,cljs.core.rest.call(null,s__43737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36286__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list43731);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list43741 = (function sablono$core$ordered_list43741(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36286__auto__ = (function sablono$core$ordered_list43741_$_iter__43746(s__43747){
return (new cljs.core.LazySeq(null,(function (){
var s__43747__$1 = s__43747;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43747__$1);
if(temp__4425__auto__){
var s__43747__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43747__$2)){
var c__36284__auto__ = cljs.core.chunk_first.call(null,s__43747__$2);
var size__36285__auto__ = cljs.core.count.call(null,c__36284__auto__);
var b__43749 = cljs.core.chunk_buffer.call(null,size__36285__auto__);
if((function (){var i__43748 = (0);
while(true){
if((i__43748 < size__36285__auto__)){
var x = cljs.core._nth.call(null,c__36284__auto__,i__43748);
cljs.core.chunk_append.call(null,b__43749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__43750 = (i__43748 + (1));
i__43748 = G__43750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43749),sablono$core$ordered_list43741_$_iter__43746.call(null,cljs.core.chunk_rest.call(null,s__43747__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43749),null);
}
} else {
var x = cljs.core.first.call(null,s__43747__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list43741_$_iter__43746.call(null,cljs.core.rest.call(null,s__43747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36286__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list43741);
/**
 * Create an image element.
 */
sablono.core.image43751 = (function sablono$core$image43751(var_args){
var args43752 = [];
var len__36572__auto___43755 = arguments.length;
var i__36573__auto___43756 = (0);
while(true){
if((i__36573__auto___43756 < len__36572__auto___43755)){
args43752.push((arguments[i__36573__auto___43756]));

var G__43757 = (i__36573__auto___43756 + (1));
i__36573__auto___43756 = G__43757;
continue;
} else {
}
break;
}

var G__43754 = args43752.length;
switch (G__43754) {
case 1:
return sablono.core.image43751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image43751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43752.length)].join('')));

}
});

sablono.core.image43751.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image43751.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image43751.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image43751);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__43759_SHARP_,p2__43760_SHARP_){
return [cljs.core.str(p1__43759_SHARP_),cljs.core.str("["),cljs.core.str(p2__43760_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__43761_SHARP_,p2__43762_SHARP_){
return [cljs.core.str(p1__43761_SHARP_),cljs.core.str("-"),cljs.core.str(p2__43762_SHARP_)].join('');
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
sablono.core.color_field43763 = (function sablono$core$color_field43763(var_args){
var args43764 = [];
var len__36572__auto___43831 = arguments.length;
var i__36573__auto___43832 = (0);
while(true){
if((i__36573__auto___43832 < len__36572__auto___43831)){
args43764.push((arguments[i__36573__auto___43832]));

var G__43833 = (i__36573__auto___43832 + (1));
i__36573__auto___43832 = G__43833;
continue;
} else {
}
break;
}

var G__43766 = args43764.length;
switch (G__43766) {
case 1:
return sablono.core.color_field43763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field43763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43764.length)].join('')));

}
});

sablono.core.color_field43763.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.color_field43763.call(null,name__43684__auto__,null);
});

sablono.core.color_field43763.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.color_field43763.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field43763);

/**
 * Creates a date input field.
 */
sablono.core.date_field43767 = (function sablono$core$date_field43767(var_args){
var args43768 = [];
var len__36572__auto___43835 = arguments.length;
var i__36573__auto___43836 = (0);
while(true){
if((i__36573__auto___43836 < len__36572__auto___43835)){
args43768.push((arguments[i__36573__auto___43836]));

var G__43837 = (i__36573__auto___43836 + (1));
i__36573__auto___43836 = G__43837;
continue;
} else {
}
break;
}

var G__43770 = args43768.length;
switch (G__43770) {
case 1:
return sablono.core.date_field43767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field43767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43768.length)].join('')));

}
});

sablono.core.date_field43767.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.date_field43767.call(null,name__43684__auto__,null);
});

sablono.core.date_field43767.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.date_field43767.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field43767);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field43771 = (function sablono$core$datetime_field43771(var_args){
var args43772 = [];
var len__36572__auto___43839 = arguments.length;
var i__36573__auto___43840 = (0);
while(true){
if((i__36573__auto___43840 < len__36572__auto___43839)){
args43772.push((arguments[i__36573__auto___43840]));

var G__43841 = (i__36573__auto___43840 + (1));
i__36573__auto___43840 = G__43841;
continue;
} else {
}
break;
}

var G__43774 = args43772.length;
switch (G__43774) {
case 1:
return sablono.core.datetime_field43771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field43771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43772.length)].join('')));

}
});

sablono.core.datetime_field43771.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.datetime_field43771.call(null,name__43684__auto__,null);
});

sablono.core.datetime_field43771.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.datetime_field43771.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field43771);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field43775 = (function sablono$core$datetime_local_field43775(var_args){
var args43776 = [];
var len__36572__auto___43843 = arguments.length;
var i__36573__auto___43844 = (0);
while(true){
if((i__36573__auto___43844 < len__36572__auto___43843)){
args43776.push((arguments[i__36573__auto___43844]));

var G__43845 = (i__36573__auto___43844 + (1));
i__36573__auto___43844 = G__43845;
continue;
} else {
}
break;
}

var G__43778 = args43776.length;
switch (G__43778) {
case 1:
return sablono.core.datetime_local_field43775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field43775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43776.length)].join('')));

}
});

sablono.core.datetime_local_field43775.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.datetime_local_field43775.call(null,name__43684__auto__,null);
});

sablono.core.datetime_local_field43775.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.datetime_local_field43775.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field43775);

/**
 * Creates a email input field.
 */
sablono.core.email_field43779 = (function sablono$core$email_field43779(var_args){
var args43780 = [];
var len__36572__auto___43847 = arguments.length;
var i__36573__auto___43848 = (0);
while(true){
if((i__36573__auto___43848 < len__36572__auto___43847)){
args43780.push((arguments[i__36573__auto___43848]));

var G__43849 = (i__36573__auto___43848 + (1));
i__36573__auto___43848 = G__43849;
continue;
} else {
}
break;
}

var G__43782 = args43780.length;
switch (G__43782) {
case 1:
return sablono.core.email_field43779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field43779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43780.length)].join('')));

}
});

sablono.core.email_field43779.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.email_field43779.call(null,name__43684__auto__,null);
});

sablono.core.email_field43779.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.email_field43779.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field43779);

/**
 * Creates a file input field.
 */
sablono.core.file_field43783 = (function sablono$core$file_field43783(var_args){
var args43784 = [];
var len__36572__auto___43851 = arguments.length;
var i__36573__auto___43852 = (0);
while(true){
if((i__36573__auto___43852 < len__36572__auto___43851)){
args43784.push((arguments[i__36573__auto___43852]));

var G__43853 = (i__36573__auto___43852 + (1));
i__36573__auto___43852 = G__43853;
continue;
} else {
}
break;
}

var G__43786 = args43784.length;
switch (G__43786) {
case 1:
return sablono.core.file_field43783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field43783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43784.length)].join('')));

}
});

sablono.core.file_field43783.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.file_field43783.call(null,name__43684__auto__,null);
});

sablono.core.file_field43783.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.file_field43783.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field43783);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field43787 = (function sablono$core$hidden_field43787(var_args){
var args43788 = [];
var len__36572__auto___43855 = arguments.length;
var i__36573__auto___43856 = (0);
while(true){
if((i__36573__auto___43856 < len__36572__auto___43855)){
args43788.push((arguments[i__36573__auto___43856]));

var G__43857 = (i__36573__auto___43856 + (1));
i__36573__auto___43856 = G__43857;
continue;
} else {
}
break;
}

var G__43790 = args43788.length;
switch (G__43790) {
case 1:
return sablono.core.hidden_field43787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field43787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43788.length)].join('')));

}
});

sablono.core.hidden_field43787.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.hidden_field43787.call(null,name__43684__auto__,null);
});

sablono.core.hidden_field43787.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.hidden_field43787.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field43787);

/**
 * Creates a month input field.
 */
sablono.core.month_field43791 = (function sablono$core$month_field43791(var_args){
var args43792 = [];
var len__36572__auto___43859 = arguments.length;
var i__36573__auto___43860 = (0);
while(true){
if((i__36573__auto___43860 < len__36572__auto___43859)){
args43792.push((arguments[i__36573__auto___43860]));

var G__43861 = (i__36573__auto___43860 + (1));
i__36573__auto___43860 = G__43861;
continue;
} else {
}
break;
}

var G__43794 = args43792.length;
switch (G__43794) {
case 1:
return sablono.core.month_field43791.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field43791.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43792.length)].join('')));

}
});

sablono.core.month_field43791.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.month_field43791.call(null,name__43684__auto__,null);
});

sablono.core.month_field43791.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.month_field43791.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field43791);

/**
 * Creates a number input field.
 */
sablono.core.number_field43795 = (function sablono$core$number_field43795(var_args){
var args43796 = [];
var len__36572__auto___43863 = arguments.length;
var i__36573__auto___43864 = (0);
while(true){
if((i__36573__auto___43864 < len__36572__auto___43863)){
args43796.push((arguments[i__36573__auto___43864]));

var G__43865 = (i__36573__auto___43864 + (1));
i__36573__auto___43864 = G__43865;
continue;
} else {
}
break;
}

var G__43798 = args43796.length;
switch (G__43798) {
case 1:
return sablono.core.number_field43795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field43795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43796.length)].join('')));

}
});

sablono.core.number_field43795.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.number_field43795.call(null,name__43684__auto__,null);
});

sablono.core.number_field43795.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.number_field43795.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field43795);

/**
 * Creates a password input field.
 */
sablono.core.password_field43799 = (function sablono$core$password_field43799(var_args){
var args43800 = [];
var len__36572__auto___43867 = arguments.length;
var i__36573__auto___43868 = (0);
while(true){
if((i__36573__auto___43868 < len__36572__auto___43867)){
args43800.push((arguments[i__36573__auto___43868]));

var G__43869 = (i__36573__auto___43868 + (1));
i__36573__auto___43868 = G__43869;
continue;
} else {
}
break;
}

var G__43802 = args43800.length;
switch (G__43802) {
case 1:
return sablono.core.password_field43799.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field43799.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43800.length)].join('')));

}
});

sablono.core.password_field43799.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.password_field43799.call(null,name__43684__auto__,null);
});

sablono.core.password_field43799.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.password_field43799.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field43799);

/**
 * Creates a range input field.
 */
sablono.core.range_field43803 = (function sablono$core$range_field43803(var_args){
var args43804 = [];
var len__36572__auto___43871 = arguments.length;
var i__36573__auto___43872 = (0);
while(true){
if((i__36573__auto___43872 < len__36572__auto___43871)){
args43804.push((arguments[i__36573__auto___43872]));

var G__43873 = (i__36573__auto___43872 + (1));
i__36573__auto___43872 = G__43873;
continue;
} else {
}
break;
}

var G__43806 = args43804.length;
switch (G__43806) {
case 1:
return sablono.core.range_field43803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field43803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43804.length)].join('')));

}
});

sablono.core.range_field43803.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.range_field43803.call(null,name__43684__auto__,null);
});

sablono.core.range_field43803.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.range_field43803.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field43803);

/**
 * Creates a search input field.
 */
sablono.core.search_field43807 = (function sablono$core$search_field43807(var_args){
var args43808 = [];
var len__36572__auto___43875 = arguments.length;
var i__36573__auto___43876 = (0);
while(true){
if((i__36573__auto___43876 < len__36572__auto___43875)){
args43808.push((arguments[i__36573__auto___43876]));

var G__43877 = (i__36573__auto___43876 + (1));
i__36573__auto___43876 = G__43877;
continue;
} else {
}
break;
}

var G__43810 = args43808.length;
switch (G__43810) {
case 1:
return sablono.core.search_field43807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field43807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43808.length)].join('')));

}
});

sablono.core.search_field43807.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.search_field43807.call(null,name__43684__auto__,null);
});

sablono.core.search_field43807.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.search_field43807.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field43807);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field43811 = (function sablono$core$tel_field43811(var_args){
var args43812 = [];
var len__36572__auto___43879 = arguments.length;
var i__36573__auto___43880 = (0);
while(true){
if((i__36573__auto___43880 < len__36572__auto___43879)){
args43812.push((arguments[i__36573__auto___43880]));

var G__43881 = (i__36573__auto___43880 + (1));
i__36573__auto___43880 = G__43881;
continue;
} else {
}
break;
}

var G__43814 = args43812.length;
switch (G__43814) {
case 1:
return sablono.core.tel_field43811.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field43811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43812.length)].join('')));

}
});

sablono.core.tel_field43811.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.tel_field43811.call(null,name__43684__auto__,null);
});

sablono.core.tel_field43811.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.tel_field43811.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field43811);

/**
 * Creates a text input field.
 */
sablono.core.text_field43815 = (function sablono$core$text_field43815(var_args){
var args43816 = [];
var len__36572__auto___43883 = arguments.length;
var i__36573__auto___43884 = (0);
while(true){
if((i__36573__auto___43884 < len__36572__auto___43883)){
args43816.push((arguments[i__36573__auto___43884]));

var G__43885 = (i__36573__auto___43884 + (1));
i__36573__auto___43884 = G__43885;
continue;
} else {
}
break;
}

var G__43818 = args43816.length;
switch (G__43818) {
case 1:
return sablono.core.text_field43815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field43815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43816.length)].join('')));

}
});

sablono.core.text_field43815.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.text_field43815.call(null,name__43684__auto__,null);
});

sablono.core.text_field43815.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.text_field43815.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field43815);

/**
 * Creates a time input field.
 */
sablono.core.time_field43819 = (function sablono$core$time_field43819(var_args){
var args43820 = [];
var len__36572__auto___43887 = arguments.length;
var i__36573__auto___43888 = (0);
while(true){
if((i__36573__auto___43888 < len__36572__auto___43887)){
args43820.push((arguments[i__36573__auto___43888]));

var G__43889 = (i__36573__auto___43888 + (1));
i__36573__auto___43888 = G__43889;
continue;
} else {
}
break;
}

var G__43822 = args43820.length;
switch (G__43822) {
case 1:
return sablono.core.time_field43819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field43819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43820.length)].join('')));

}
});

sablono.core.time_field43819.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.time_field43819.call(null,name__43684__auto__,null);
});

sablono.core.time_field43819.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.time_field43819.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field43819);

/**
 * Creates a url input field.
 */
sablono.core.url_field43823 = (function sablono$core$url_field43823(var_args){
var args43824 = [];
var len__36572__auto___43891 = arguments.length;
var i__36573__auto___43892 = (0);
while(true){
if((i__36573__auto___43892 < len__36572__auto___43891)){
args43824.push((arguments[i__36573__auto___43892]));

var G__43893 = (i__36573__auto___43892 + (1));
i__36573__auto___43892 = G__43893;
continue;
} else {
}
break;
}

var G__43826 = args43824.length;
switch (G__43826) {
case 1:
return sablono.core.url_field43823.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field43823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43824.length)].join('')));

}
});

sablono.core.url_field43823.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.url_field43823.call(null,name__43684__auto__,null);
});

sablono.core.url_field43823.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.url_field43823.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field43823);

/**
 * Creates a week input field.
 */
sablono.core.week_field43827 = (function sablono$core$week_field43827(var_args){
var args43828 = [];
var len__36572__auto___43895 = arguments.length;
var i__36573__auto___43896 = (0);
while(true){
if((i__36573__auto___43896 < len__36572__auto___43895)){
args43828.push((arguments[i__36573__auto___43896]));

var G__43897 = (i__36573__auto___43896 + (1));
i__36573__auto___43896 = G__43897;
continue;
} else {
}
break;
}

var G__43830 = args43828.length;
switch (G__43830) {
case 1:
return sablono.core.week_field43827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field43827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43828.length)].join('')));

}
});

sablono.core.week_field43827.cljs$core$IFn$_invoke$arity$1 = (function (name__43684__auto__){
return sablono.core.week_field43827.call(null,name__43684__auto__,null);
});

sablono.core.week_field43827.cljs$core$IFn$_invoke$arity$2 = (function (name__43684__auto__,value__43685__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__43684__auto__,value__43685__auto__);
});

sablono.core.week_field43827.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field43827);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box43899 = (function sablono$core$check_box43899(var_args){
var args43900 = [];
var len__36572__auto___43903 = arguments.length;
var i__36573__auto___43904 = (0);
while(true){
if((i__36573__auto___43904 < len__36572__auto___43903)){
args43900.push((arguments[i__36573__auto___43904]));

var G__43905 = (i__36573__auto___43904 + (1));
i__36573__auto___43904 = G__43905;
continue;
} else {
}
break;
}

var G__43902 = args43900.length;
switch (G__43902) {
case 1:
return sablono.core.check_box43899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box43899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box43899.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43900.length)].join('')));

}
});

sablono.core.check_box43899.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box43899.call(null,name,null);
});

sablono.core.check_box43899.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box43899.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box43899.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box43899.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box43899);
/**
 * Creates a radio button.
 */
sablono.core.radio_button43907 = (function sablono$core$radio_button43907(var_args){
var args43908 = [];
var len__36572__auto___43911 = arguments.length;
var i__36573__auto___43912 = (0);
while(true){
if((i__36573__auto___43912 < len__36572__auto___43911)){
args43908.push((arguments[i__36573__auto___43912]));

var G__43913 = (i__36573__auto___43912 + (1));
i__36573__auto___43912 = G__43913;
continue;
} else {
}
break;
}

var G__43910 = args43908.length;
switch (G__43910) {
case 1:
return sablono.core.radio_button43907.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button43907.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button43907.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43908.length)].join('')));

}
});

sablono.core.radio_button43907.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button43907.call(null,group,null);
});

sablono.core.radio_button43907.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button43907.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button43907.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button43907.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button43907);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options43915 = (function sablono$core$select_options43915(coll){
var iter__36286__auto__ = (function sablono$core$select_options43915_$_iter__43924(s__43925){
return (new cljs.core.LazySeq(null,(function (){
var s__43925__$1 = s__43925;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43925__$1);
if(temp__4425__auto__){
var s__43925__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43925__$2)){
var c__36284__auto__ = cljs.core.chunk_first.call(null,s__43925__$2);
var size__36285__auto__ = cljs.core.count.call(null,c__36284__auto__);
var b__43927 = cljs.core.chunk_buffer.call(null,size__36285__auto__);
if((function (){var i__43926 = (0);
while(true){
if((i__43926 < size__36285__auto__)){
var x = cljs.core._nth.call(null,c__36284__auto__,i__43926);
cljs.core.chunk_append.call(null,b__43927,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43930 = x;
var text = cljs.core.nth.call(null,vec__43930,(0),null);
var val = cljs.core.nth.call(null,vec__43930,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__43930,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options43915.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__43932 = (i__43926 + (1));
i__43926 = G__43932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43927),sablono$core$select_options43915_$_iter__43924.call(null,cljs.core.chunk_rest.call(null,s__43925__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43927),null);
}
} else {
var x = cljs.core.first.call(null,s__43925__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__43931 = x;
var text = cljs.core.nth.call(null,vec__43931,(0),null);
var val = cljs.core.nth.call(null,vec__43931,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__43931,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options43915.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options43915_$_iter__43924.call(null,cljs.core.rest.call(null,s__43925__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36286__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options43915);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down43933 = (function sablono$core$drop_down43933(var_args){
var args43934 = [];
var len__36572__auto___43937 = arguments.length;
var i__36573__auto___43938 = (0);
while(true){
if((i__36573__auto___43938 < len__36572__auto___43937)){
args43934.push((arguments[i__36573__auto___43938]));

var G__43939 = (i__36573__auto___43938 + (1));
i__36573__auto___43938 = G__43939;
continue;
} else {
}
break;
}

var G__43936 = args43934.length;
switch (G__43936) {
case 2:
return sablono.core.drop_down43933.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down43933.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43934.length)].join('')));

}
});

sablono.core.drop_down43933.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down43933.call(null,name,options,null);
});

sablono.core.drop_down43933.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down43933.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down43933);
/**
 * Creates a text area element.
 */
sablono.core.text_area43941 = (function sablono$core$text_area43941(var_args){
var args43942 = [];
var len__36572__auto___43945 = arguments.length;
var i__36573__auto___43946 = (0);
while(true){
if((i__36573__auto___43946 < len__36572__auto___43945)){
args43942.push((arguments[i__36573__auto___43946]));

var G__43947 = (i__36573__auto___43946 + (1));
i__36573__auto___43946 = G__43947;
continue;
} else {
}
break;
}

var G__43944 = args43942.length;
switch (G__43944) {
case 1:
return sablono.core.text_area43941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area43941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43942.length)].join('')));

}
});

sablono.core.text_area43941.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area43941.call(null,name,null);
});

sablono.core.text_area43941.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area43941.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area43941);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label43949 = (function sablono$core$label43949(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label43949);
/**
 * Creates a submit button.
 */
sablono.core.submit_button43950 = (function sablono$core$submit_button43950(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button43950);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button43951 = (function sablono$core$reset_button43951(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button43951);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to43952 = (function sablono$core$form_to43952(var_args){
var args__36579__auto__ = [];
var len__36572__auto___43957 = arguments.length;
var i__36573__auto___43958 = (0);
while(true){
if((i__36573__auto___43958 < len__36572__auto___43957)){
args__36579__auto__.push((arguments[i__36573__auto___43958]));

var G__43959 = (i__36573__auto___43958 + (1));
i__36573__auto___43958 = G__43959;
continue;
} else {
}
break;
}

var argseq__36580__auto__ = ((((1) < args__36579__auto__.length))?(new cljs.core.IndexedSeq(args__36579__auto__.slice((1)),(0))):null);
return sablono.core.form_to43952.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__36580__auto__);
});

sablono.core.form_to43952.cljs$core$IFn$_invoke$arity$variadic = (function (p__43955,body){
var vec__43956 = p__43955;
var method = cljs.core.nth.call(null,vec__43956,(0),null);
var action = cljs.core.nth.call(null,vec__43956,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to43952.cljs$lang$maxFixedArity = (1);

sablono.core.form_to43952.cljs$lang$applyTo = (function (seq43953){
var G__43954 = cljs.core.first.call(null,seq43953);
var seq43953__$1 = cljs.core.next.call(null,seq43953);
return sablono.core.form_to43952.cljs$core$IFn$_invoke$arity$variadic(G__43954,seq43953__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to43952);

//# sourceMappingURL=core.js.map?rel=1456361404773