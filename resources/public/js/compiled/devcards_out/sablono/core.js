// Compiled by ClojureScript 1.7.228 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__50667__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__50666 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__50666,(0),null);
var body = cljs.core.nthnext.call(null,vec__50666,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__50667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50668__i = 0, G__50668__a = new Array(arguments.length -  0);
while (G__50668__i < G__50668__a.length) {G__50668__a[G__50668__i] = arguments[G__50668__i + 0]; ++G__50668__i;}
  args = new cljs.core.IndexedSeq(G__50668__a,0);
} 
return G__50667__delegate.call(this,args);};
G__50667.cljs$lang$maxFixedArity = 0;
G__50667.cljs$lang$applyTo = (function (arglist__50669){
var args = cljs.core.seq(arglist__50669);
return G__50667__delegate(args);
});
G__50667.cljs$core$IFn$_invoke$arity$variadic = G__50667__delegate;
return G__50667;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__38215__auto__ = (function sablono$core$update_arglists_$_iter__50674(s__50675){
return (new cljs.core.LazySeq(null,(function (){
var s__50675__$1 = s__50675;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50675__$1);
if(temp__4657__auto__){
var s__50675__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50675__$2)){
var c__38213__auto__ = cljs.core.chunk_first.call(null,s__50675__$2);
var size__38214__auto__ = cljs.core.count.call(null,c__38213__auto__);
var b__50677 = cljs.core.chunk_buffer.call(null,size__38214__auto__);
if((function (){var i__50676 = (0);
while(true){
if((i__50676 < size__38214__auto__)){
var args = cljs.core._nth.call(null,c__38213__auto__,i__50676);
cljs.core.chunk_append.call(null,b__50677,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__50678 = (i__50676 + (1));
i__50676 = G__50678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50677),sablono$core$update_arglists_$_iter__50674.call(null,cljs.core.chunk_rest.call(null,s__50675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50677),null);
}
} else {
var args = cljs.core.first.call(null,s__50675__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__50674.call(null,cljs.core.rest.call(null,s__50675__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38215__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__38508__auto__ = [];
var len__38501__auto___50684 = arguments.length;
var i__38502__auto___50685 = (0);
while(true){
if((i__38502__auto___50685 < len__38501__auto___50684)){
args__38508__auto__.push((arguments[i__38502__auto___50685]));

var G__50686 = (i__38502__auto___50685 + (1));
i__38502__auto___50685 = G__50686;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((0) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__38509__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__38215__auto__ = (function sablono$core$iter__50680(s__50681){
return (new cljs.core.LazySeq(null,(function (){
var s__50681__$1 = s__50681;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50681__$1);
if(temp__4657__auto__){
var s__50681__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50681__$2)){
var c__38213__auto__ = cljs.core.chunk_first.call(null,s__50681__$2);
var size__38214__auto__ = cljs.core.count.call(null,c__38213__auto__);
var b__50683 = cljs.core.chunk_buffer.call(null,size__38214__auto__);
if((function (){var i__50682 = (0);
while(true){
if((i__50682 < size__38214__auto__)){
var style = cljs.core._nth.call(null,c__38213__auto__,i__50682);
cljs.core.chunk_append.call(null,b__50683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__50687 = (i__50682 + (1));
i__50682 = G__50687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50683),sablono$core$iter__50680.call(null,cljs.core.chunk_rest.call(null,s__50681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50683),null);
}
} else {
var style = cljs.core.first.call(null,s__50681__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__50680.call(null,cljs.core.rest.call(null,s__50681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38215__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq50679){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50679));
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
sablono.core.link_to50688 = (function sablono$core$link_to50688(var_args){
var args__38508__auto__ = [];
var len__38501__auto___50691 = arguments.length;
var i__38502__auto___50692 = (0);
while(true){
if((i__38502__auto___50692 < len__38501__auto___50691)){
args__38508__auto__.push((arguments[i__38502__auto___50692]));

var G__50693 = (i__38502__auto___50692 + (1));
i__38502__auto___50692 = G__50693;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((1) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((1)),(0))):null);
return sablono.core.link_to50688.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38509__auto__);
});

sablono.core.link_to50688.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to50688.cljs$lang$maxFixedArity = (1);

sablono.core.link_to50688.cljs$lang$applyTo = (function (seq50689){
var G__50690 = cljs.core.first.call(null,seq50689);
var seq50689__$1 = cljs.core.next.call(null,seq50689);
return sablono.core.link_to50688.cljs$core$IFn$_invoke$arity$variadic(G__50690,seq50689__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to50688);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to50694 = (function sablono$core$mail_to50694(var_args){
var args__38508__auto__ = [];
var len__38501__auto___50699 = arguments.length;
var i__38502__auto___50700 = (0);
while(true){
if((i__38502__auto___50700 < len__38501__auto___50699)){
args__38508__auto__.push((arguments[i__38502__auto___50700]));

var G__50701 = (i__38502__auto___50700 + (1));
i__38502__auto___50700 = G__50701;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((1) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((1)),(0))):null);
return sablono.core.mail_to50694.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38509__auto__);
});

sablono.core.mail_to50694.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__50697){
var vec__50698 = p__50697;
var content = cljs.core.nth.call(null,vec__50698,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__37443__auto__ = content;
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to50694.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to50694.cljs$lang$applyTo = (function (seq50695){
var G__50696 = cljs.core.first.call(null,seq50695);
var seq50695__$1 = cljs.core.next.call(null,seq50695);
return sablono.core.mail_to50694.cljs$core$IFn$_invoke$arity$variadic(G__50696,seq50695__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to50694);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list50702 = (function sablono$core$unordered_list50702(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__38215__auto__ = (function sablono$core$unordered_list50702_$_iter__50707(s__50708){
return (new cljs.core.LazySeq(null,(function (){
var s__50708__$1 = s__50708;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50708__$1);
if(temp__4657__auto__){
var s__50708__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50708__$2)){
var c__38213__auto__ = cljs.core.chunk_first.call(null,s__50708__$2);
var size__38214__auto__ = cljs.core.count.call(null,c__38213__auto__);
var b__50710 = cljs.core.chunk_buffer.call(null,size__38214__auto__);
if((function (){var i__50709 = (0);
while(true){
if((i__50709 < size__38214__auto__)){
var x = cljs.core._nth.call(null,c__38213__auto__,i__50709);
cljs.core.chunk_append.call(null,b__50710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50711 = (i__50709 + (1));
i__50709 = G__50711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50710),sablono$core$unordered_list50702_$_iter__50707.call(null,cljs.core.chunk_rest.call(null,s__50708__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50710),null);
}
} else {
var x = cljs.core.first.call(null,s__50708__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list50702_$_iter__50707.call(null,cljs.core.rest.call(null,s__50708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38215__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list50702);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list50712 = (function sablono$core$ordered_list50712(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__38215__auto__ = (function sablono$core$ordered_list50712_$_iter__50717(s__50718){
return (new cljs.core.LazySeq(null,(function (){
var s__50718__$1 = s__50718;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50718__$1);
if(temp__4657__auto__){
var s__50718__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50718__$2)){
var c__38213__auto__ = cljs.core.chunk_first.call(null,s__50718__$2);
var size__38214__auto__ = cljs.core.count.call(null,c__38213__auto__);
var b__50720 = cljs.core.chunk_buffer.call(null,size__38214__auto__);
if((function (){var i__50719 = (0);
while(true){
if((i__50719 < size__38214__auto__)){
var x = cljs.core._nth.call(null,c__38213__auto__,i__50719);
cljs.core.chunk_append.call(null,b__50720,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__50721 = (i__50719 + (1));
i__50719 = G__50721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50720),sablono$core$ordered_list50712_$_iter__50717.call(null,cljs.core.chunk_rest.call(null,s__50718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50720),null);
}
} else {
var x = cljs.core.first.call(null,s__50718__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list50712_$_iter__50717.call(null,cljs.core.rest.call(null,s__50718__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38215__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list50712);
/**
 * Create an image element.
 */
sablono.core.image50722 = (function sablono$core$image50722(var_args){
var args50723 = [];
var len__38501__auto___50726 = arguments.length;
var i__38502__auto___50727 = (0);
while(true){
if((i__38502__auto___50727 < len__38501__auto___50726)){
args50723.push((arguments[i__38502__auto___50727]));

var G__50728 = (i__38502__auto___50727 + (1));
i__38502__auto___50727 = G__50728;
continue;
} else {
}
break;
}

var G__50725 = args50723.length;
switch (G__50725) {
case 1:
return sablono.core.image50722.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image50722.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50723.length)].join('')));

}
});

sablono.core.image50722.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image50722.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image50722.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image50722);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__50730_SHARP_,p2__50731_SHARP_){
return [cljs.core.str(p1__50730_SHARP_),cljs.core.str("["),cljs.core.str(p2__50731_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__50732_SHARP_,p2__50733_SHARP_){
return [cljs.core.str(p1__50732_SHARP_),cljs.core.str("-"),cljs.core.str(p2__50733_SHARP_)].join('');
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
sablono.core.color_field50734 = (function sablono$core$color_field50734(var_args){
var args50735 = [];
var len__38501__auto___50802 = arguments.length;
var i__38502__auto___50803 = (0);
while(true){
if((i__38502__auto___50803 < len__38501__auto___50802)){
args50735.push((arguments[i__38502__auto___50803]));

var G__50804 = (i__38502__auto___50803 + (1));
i__38502__auto___50803 = G__50804;
continue;
} else {
}
break;
}

var G__50737 = args50735.length;
switch (G__50737) {
case 1:
return sablono.core.color_field50734.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field50734.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50735.length)].join('')));

}
});

sablono.core.color_field50734.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.color_field50734.call(null,name__50655__auto__,null);
});

sablono.core.color_field50734.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.color_field50734.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field50734);

/**
 * Creates a date input field.
 */
sablono.core.date_field50738 = (function sablono$core$date_field50738(var_args){
var args50739 = [];
var len__38501__auto___50806 = arguments.length;
var i__38502__auto___50807 = (0);
while(true){
if((i__38502__auto___50807 < len__38501__auto___50806)){
args50739.push((arguments[i__38502__auto___50807]));

var G__50808 = (i__38502__auto___50807 + (1));
i__38502__auto___50807 = G__50808;
continue;
} else {
}
break;
}

var G__50741 = args50739.length;
switch (G__50741) {
case 1:
return sablono.core.date_field50738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field50738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50739.length)].join('')));

}
});

sablono.core.date_field50738.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.date_field50738.call(null,name__50655__auto__,null);
});

sablono.core.date_field50738.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.date_field50738.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field50738);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field50742 = (function sablono$core$datetime_field50742(var_args){
var args50743 = [];
var len__38501__auto___50810 = arguments.length;
var i__38502__auto___50811 = (0);
while(true){
if((i__38502__auto___50811 < len__38501__auto___50810)){
args50743.push((arguments[i__38502__auto___50811]));

var G__50812 = (i__38502__auto___50811 + (1));
i__38502__auto___50811 = G__50812;
continue;
} else {
}
break;
}

var G__50745 = args50743.length;
switch (G__50745) {
case 1:
return sablono.core.datetime_field50742.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field50742.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50743.length)].join('')));

}
});

sablono.core.datetime_field50742.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.datetime_field50742.call(null,name__50655__auto__,null);
});

sablono.core.datetime_field50742.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.datetime_field50742.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field50742);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field50746 = (function sablono$core$datetime_local_field50746(var_args){
var args50747 = [];
var len__38501__auto___50814 = arguments.length;
var i__38502__auto___50815 = (0);
while(true){
if((i__38502__auto___50815 < len__38501__auto___50814)){
args50747.push((arguments[i__38502__auto___50815]));

var G__50816 = (i__38502__auto___50815 + (1));
i__38502__auto___50815 = G__50816;
continue;
} else {
}
break;
}

var G__50749 = args50747.length;
switch (G__50749) {
case 1:
return sablono.core.datetime_local_field50746.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field50746.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50747.length)].join('')));

}
});

sablono.core.datetime_local_field50746.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.datetime_local_field50746.call(null,name__50655__auto__,null);
});

sablono.core.datetime_local_field50746.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.datetime_local_field50746.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field50746);

/**
 * Creates a email input field.
 */
sablono.core.email_field50750 = (function sablono$core$email_field50750(var_args){
var args50751 = [];
var len__38501__auto___50818 = arguments.length;
var i__38502__auto___50819 = (0);
while(true){
if((i__38502__auto___50819 < len__38501__auto___50818)){
args50751.push((arguments[i__38502__auto___50819]));

var G__50820 = (i__38502__auto___50819 + (1));
i__38502__auto___50819 = G__50820;
continue;
} else {
}
break;
}

var G__50753 = args50751.length;
switch (G__50753) {
case 1:
return sablono.core.email_field50750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field50750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50751.length)].join('')));

}
});

sablono.core.email_field50750.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.email_field50750.call(null,name__50655__auto__,null);
});

sablono.core.email_field50750.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.email_field50750.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field50750);

/**
 * Creates a file input field.
 */
sablono.core.file_field50754 = (function sablono$core$file_field50754(var_args){
var args50755 = [];
var len__38501__auto___50822 = arguments.length;
var i__38502__auto___50823 = (0);
while(true){
if((i__38502__auto___50823 < len__38501__auto___50822)){
args50755.push((arguments[i__38502__auto___50823]));

var G__50824 = (i__38502__auto___50823 + (1));
i__38502__auto___50823 = G__50824;
continue;
} else {
}
break;
}

var G__50757 = args50755.length;
switch (G__50757) {
case 1:
return sablono.core.file_field50754.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field50754.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50755.length)].join('')));

}
});

sablono.core.file_field50754.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.file_field50754.call(null,name__50655__auto__,null);
});

sablono.core.file_field50754.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.file_field50754.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field50754);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field50758 = (function sablono$core$hidden_field50758(var_args){
var args50759 = [];
var len__38501__auto___50826 = arguments.length;
var i__38502__auto___50827 = (0);
while(true){
if((i__38502__auto___50827 < len__38501__auto___50826)){
args50759.push((arguments[i__38502__auto___50827]));

var G__50828 = (i__38502__auto___50827 + (1));
i__38502__auto___50827 = G__50828;
continue;
} else {
}
break;
}

var G__50761 = args50759.length;
switch (G__50761) {
case 1:
return sablono.core.hidden_field50758.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field50758.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50759.length)].join('')));

}
});

sablono.core.hidden_field50758.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.hidden_field50758.call(null,name__50655__auto__,null);
});

sablono.core.hidden_field50758.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.hidden_field50758.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field50758);

/**
 * Creates a month input field.
 */
sablono.core.month_field50762 = (function sablono$core$month_field50762(var_args){
var args50763 = [];
var len__38501__auto___50830 = arguments.length;
var i__38502__auto___50831 = (0);
while(true){
if((i__38502__auto___50831 < len__38501__auto___50830)){
args50763.push((arguments[i__38502__auto___50831]));

var G__50832 = (i__38502__auto___50831 + (1));
i__38502__auto___50831 = G__50832;
continue;
} else {
}
break;
}

var G__50765 = args50763.length;
switch (G__50765) {
case 1:
return sablono.core.month_field50762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field50762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50763.length)].join('')));

}
});

sablono.core.month_field50762.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.month_field50762.call(null,name__50655__auto__,null);
});

sablono.core.month_field50762.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.month_field50762.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field50762);

/**
 * Creates a number input field.
 */
sablono.core.number_field50766 = (function sablono$core$number_field50766(var_args){
var args50767 = [];
var len__38501__auto___50834 = arguments.length;
var i__38502__auto___50835 = (0);
while(true){
if((i__38502__auto___50835 < len__38501__auto___50834)){
args50767.push((arguments[i__38502__auto___50835]));

var G__50836 = (i__38502__auto___50835 + (1));
i__38502__auto___50835 = G__50836;
continue;
} else {
}
break;
}

var G__50769 = args50767.length;
switch (G__50769) {
case 1:
return sablono.core.number_field50766.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field50766.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50767.length)].join('')));

}
});

sablono.core.number_field50766.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.number_field50766.call(null,name__50655__auto__,null);
});

sablono.core.number_field50766.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.number_field50766.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field50766);

/**
 * Creates a password input field.
 */
sablono.core.password_field50770 = (function sablono$core$password_field50770(var_args){
var args50771 = [];
var len__38501__auto___50838 = arguments.length;
var i__38502__auto___50839 = (0);
while(true){
if((i__38502__auto___50839 < len__38501__auto___50838)){
args50771.push((arguments[i__38502__auto___50839]));

var G__50840 = (i__38502__auto___50839 + (1));
i__38502__auto___50839 = G__50840;
continue;
} else {
}
break;
}

var G__50773 = args50771.length;
switch (G__50773) {
case 1:
return sablono.core.password_field50770.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field50770.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50771.length)].join('')));

}
});

sablono.core.password_field50770.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.password_field50770.call(null,name__50655__auto__,null);
});

sablono.core.password_field50770.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.password_field50770.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field50770);

/**
 * Creates a range input field.
 */
sablono.core.range_field50774 = (function sablono$core$range_field50774(var_args){
var args50775 = [];
var len__38501__auto___50842 = arguments.length;
var i__38502__auto___50843 = (0);
while(true){
if((i__38502__auto___50843 < len__38501__auto___50842)){
args50775.push((arguments[i__38502__auto___50843]));

var G__50844 = (i__38502__auto___50843 + (1));
i__38502__auto___50843 = G__50844;
continue;
} else {
}
break;
}

var G__50777 = args50775.length;
switch (G__50777) {
case 1:
return sablono.core.range_field50774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field50774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50775.length)].join('')));

}
});

sablono.core.range_field50774.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.range_field50774.call(null,name__50655__auto__,null);
});

sablono.core.range_field50774.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.range_field50774.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field50774);

/**
 * Creates a search input field.
 */
sablono.core.search_field50778 = (function sablono$core$search_field50778(var_args){
var args50779 = [];
var len__38501__auto___50846 = arguments.length;
var i__38502__auto___50847 = (0);
while(true){
if((i__38502__auto___50847 < len__38501__auto___50846)){
args50779.push((arguments[i__38502__auto___50847]));

var G__50848 = (i__38502__auto___50847 + (1));
i__38502__auto___50847 = G__50848;
continue;
} else {
}
break;
}

var G__50781 = args50779.length;
switch (G__50781) {
case 1:
return sablono.core.search_field50778.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field50778.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50779.length)].join('')));

}
});

sablono.core.search_field50778.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.search_field50778.call(null,name__50655__auto__,null);
});

sablono.core.search_field50778.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.search_field50778.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field50778);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field50782 = (function sablono$core$tel_field50782(var_args){
var args50783 = [];
var len__38501__auto___50850 = arguments.length;
var i__38502__auto___50851 = (0);
while(true){
if((i__38502__auto___50851 < len__38501__auto___50850)){
args50783.push((arguments[i__38502__auto___50851]));

var G__50852 = (i__38502__auto___50851 + (1));
i__38502__auto___50851 = G__50852;
continue;
} else {
}
break;
}

var G__50785 = args50783.length;
switch (G__50785) {
case 1:
return sablono.core.tel_field50782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field50782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50783.length)].join('')));

}
});

sablono.core.tel_field50782.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.tel_field50782.call(null,name__50655__auto__,null);
});

sablono.core.tel_field50782.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.tel_field50782.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field50782);

/**
 * Creates a text input field.
 */
sablono.core.text_field50786 = (function sablono$core$text_field50786(var_args){
var args50787 = [];
var len__38501__auto___50854 = arguments.length;
var i__38502__auto___50855 = (0);
while(true){
if((i__38502__auto___50855 < len__38501__auto___50854)){
args50787.push((arguments[i__38502__auto___50855]));

var G__50856 = (i__38502__auto___50855 + (1));
i__38502__auto___50855 = G__50856;
continue;
} else {
}
break;
}

var G__50789 = args50787.length;
switch (G__50789) {
case 1:
return sablono.core.text_field50786.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field50786.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50787.length)].join('')));

}
});

sablono.core.text_field50786.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.text_field50786.call(null,name__50655__auto__,null);
});

sablono.core.text_field50786.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.text_field50786.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field50786);

/**
 * Creates a time input field.
 */
sablono.core.time_field50790 = (function sablono$core$time_field50790(var_args){
var args50791 = [];
var len__38501__auto___50858 = arguments.length;
var i__38502__auto___50859 = (0);
while(true){
if((i__38502__auto___50859 < len__38501__auto___50858)){
args50791.push((arguments[i__38502__auto___50859]));

var G__50860 = (i__38502__auto___50859 + (1));
i__38502__auto___50859 = G__50860;
continue;
} else {
}
break;
}

var G__50793 = args50791.length;
switch (G__50793) {
case 1:
return sablono.core.time_field50790.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field50790.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50791.length)].join('')));

}
});

sablono.core.time_field50790.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.time_field50790.call(null,name__50655__auto__,null);
});

sablono.core.time_field50790.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.time_field50790.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field50790);

/**
 * Creates a url input field.
 */
sablono.core.url_field50794 = (function sablono$core$url_field50794(var_args){
var args50795 = [];
var len__38501__auto___50862 = arguments.length;
var i__38502__auto___50863 = (0);
while(true){
if((i__38502__auto___50863 < len__38501__auto___50862)){
args50795.push((arguments[i__38502__auto___50863]));

var G__50864 = (i__38502__auto___50863 + (1));
i__38502__auto___50863 = G__50864;
continue;
} else {
}
break;
}

var G__50797 = args50795.length;
switch (G__50797) {
case 1:
return sablono.core.url_field50794.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field50794.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50795.length)].join('')));

}
});

sablono.core.url_field50794.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.url_field50794.call(null,name__50655__auto__,null);
});

sablono.core.url_field50794.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.url_field50794.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field50794);

/**
 * Creates a week input field.
 */
sablono.core.week_field50798 = (function sablono$core$week_field50798(var_args){
var args50799 = [];
var len__38501__auto___50866 = arguments.length;
var i__38502__auto___50867 = (0);
while(true){
if((i__38502__auto___50867 < len__38501__auto___50866)){
args50799.push((arguments[i__38502__auto___50867]));

var G__50868 = (i__38502__auto___50867 + (1));
i__38502__auto___50867 = G__50868;
continue;
} else {
}
break;
}

var G__50801 = args50799.length;
switch (G__50801) {
case 1:
return sablono.core.week_field50798.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field50798.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50799.length)].join('')));

}
});

sablono.core.week_field50798.cljs$core$IFn$_invoke$arity$1 = (function (name__50655__auto__){
return sablono.core.week_field50798.call(null,name__50655__auto__,null);
});

sablono.core.week_field50798.cljs$core$IFn$_invoke$arity$2 = (function (name__50655__auto__,value__50656__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__50655__auto__,value__50656__auto__);
});

sablono.core.week_field50798.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field50798);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box50870 = (function sablono$core$check_box50870(var_args){
var args50871 = [];
var len__38501__auto___50874 = arguments.length;
var i__38502__auto___50875 = (0);
while(true){
if((i__38502__auto___50875 < len__38501__auto___50874)){
args50871.push((arguments[i__38502__auto___50875]));

var G__50876 = (i__38502__auto___50875 + (1));
i__38502__auto___50875 = G__50876;
continue;
} else {
}
break;
}

var G__50873 = args50871.length;
switch (G__50873) {
case 1:
return sablono.core.check_box50870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box50870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box50870.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50871.length)].join('')));

}
});

sablono.core.check_box50870.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box50870.call(null,name,null);
});

sablono.core.check_box50870.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box50870.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box50870.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box50870.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box50870);
/**
 * Creates a radio button.
 */
sablono.core.radio_button50878 = (function sablono$core$radio_button50878(var_args){
var args50879 = [];
var len__38501__auto___50882 = arguments.length;
var i__38502__auto___50883 = (0);
while(true){
if((i__38502__auto___50883 < len__38501__auto___50882)){
args50879.push((arguments[i__38502__auto___50883]));

var G__50884 = (i__38502__auto___50883 + (1));
i__38502__auto___50883 = G__50884;
continue;
} else {
}
break;
}

var G__50881 = args50879.length;
switch (G__50881) {
case 1:
return sablono.core.radio_button50878.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button50878.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button50878.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50879.length)].join('')));

}
});

sablono.core.radio_button50878.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button50878.call(null,group,null);
});

sablono.core.radio_button50878.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button50878.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button50878.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button50878.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button50878);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options50886 = (function sablono$core$select_options50886(coll){
var iter__38215__auto__ = (function sablono$core$select_options50886_$_iter__50895(s__50896){
return (new cljs.core.LazySeq(null,(function (){
var s__50896__$1 = s__50896;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50896__$1);
if(temp__4657__auto__){
var s__50896__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50896__$2)){
var c__38213__auto__ = cljs.core.chunk_first.call(null,s__50896__$2);
var size__38214__auto__ = cljs.core.count.call(null,c__38213__auto__);
var b__50898 = cljs.core.chunk_buffer.call(null,size__38214__auto__);
if((function (){var i__50897 = (0);
while(true){
if((i__50897 < size__38214__auto__)){
var x = cljs.core._nth.call(null,c__38213__auto__,i__50897);
cljs.core.chunk_append.call(null,b__50898,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50901 = x;
var text = cljs.core.nth.call(null,vec__50901,(0),null);
var val = cljs.core.nth.call(null,vec__50901,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__50901,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options50886.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__50903 = (i__50897 + (1));
i__50897 = G__50903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50898),sablono$core$select_options50886_$_iter__50895.call(null,cljs.core.chunk_rest.call(null,s__50896__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50898),null);
}
} else {
var x = cljs.core.first.call(null,s__50896__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__50902 = x;
var text = cljs.core.nth.call(null,vec__50902,(0),null);
var val = cljs.core.nth.call(null,vec__50902,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__50902,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options50886.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options50886_$_iter__50895.call(null,cljs.core.rest.call(null,s__50896__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__38215__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options50886);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down50904 = (function sablono$core$drop_down50904(var_args){
var args50905 = [];
var len__38501__auto___50908 = arguments.length;
var i__38502__auto___50909 = (0);
while(true){
if((i__38502__auto___50909 < len__38501__auto___50908)){
args50905.push((arguments[i__38502__auto___50909]));

var G__50910 = (i__38502__auto___50909 + (1));
i__38502__auto___50909 = G__50910;
continue;
} else {
}
break;
}

var G__50907 = args50905.length;
switch (G__50907) {
case 2:
return sablono.core.drop_down50904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down50904.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50905.length)].join('')));

}
});

sablono.core.drop_down50904.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down50904.call(null,name,options,null);
});

sablono.core.drop_down50904.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down50904.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down50904);
/**
 * Creates a text area element.
 */
sablono.core.text_area50912 = (function sablono$core$text_area50912(var_args){
var args50913 = [];
var len__38501__auto___50916 = arguments.length;
var i__38502__auto___50917 = (0);
while(true){
if((i__38502__auto___50917 < len__38501__auto___50916)){
args50913.push((arguments[i__38502__auto___50917]));

var G__50918 = (i__38502__auto___50917 + (1));
i__38502__auto___50917 = G__50918;
continue;
} else {
}
break;
}

var G__50915 = args50913.length;
switch (G__50915) {
case 1:
return sablono.core.text_area50912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area50912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50913.length)].join('')));

}
});

sablono.core.text_area50912.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area50912.call(null,name,null);
});

sablono.core.text_area50912.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area50912.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area50912);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label50920 = (function sablono$core$label50920(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label50920);
/**
 * Creates a submit button.
 */
sablono.core.submit_button50921 = (function sablono$core$submit_button50921(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button50921);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button50922 = (function sablono$core$reset_button50922(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button50922);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to50923 = (function sablono$core$form_to50923(var_args){
var args__38508__auto__ = [];
var len__38501__auto___50928 = arguments.length;
var i__38502__auto___50929 = (0);
while(true){
if((i__38502__auto___50929 < len__38501__auto___50928)){
args__38508__auto__.push((arguments[i__38502__auto___50929]));

var G__50930 = (i__38502__auto___50929 + (1));
i__38502__auto___50929 = G__50930;
continue;
} else {
}
break;
}

var argseq__38509__auto__ = ((((1) < args__38508__auto__.length))?(new cljs.core.IndexedSeq(args__38508__auto__.slice((1)),(0))):null);
return sablono.core.form_to50923.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38509__auto__);
});

sablono.core.form_to50923.cljs$core$IFn$_invoke$arity$variadic = (function (p__50926,body){
var vec__50927 = p__50926;
var method = cljs.core.nth.call(null,vec__50927,(0),null);
var action = cljs.core.nth.call(null,vec__50927,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to50923.cljs$lang$maxFixedArity = (1);

sablono.core.form_to50923.cljs$lang$applyTo = (function (seq50924){
var G__50925 = cljs.core.first.call(null,seq50924);
var seq50924__$1 = cljs.core.next.call(null,seq50924);
return sablono.core.form_to50923.cljs$core$IFn$_invoke$arity$variadic(G__50925,seq50924__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to50923);

//# sourceMappingURL=core.js.map?rel=1459008357379