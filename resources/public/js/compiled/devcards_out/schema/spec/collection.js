// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.spec.collection');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.spec.core');
schema.spec.collection.element_transformer = (function schema$spec$collection$element_transformer(e,params,then){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(e);
var c = schema.spec.core.sub_checker.call(null,e,params);
return ((function (parser,c){
return (function (res,x){
return then.call(null,res,parser.call(null,((function (parser,c){
return (function (t){
return cljs.core.swap_BANG_.call(null,res,cljs.core.conj,(cljs.core.truth_(schema.utils.error_QMARK_.call(null,t))?t:c.call(null,t)));
});})(parser,c))
,x));
});
;})(parser,c))
});
schema.spec.collection.has_error_QMARK_ = (function schema$spec$collection$has_error_QMARK_(l){
return cljs.core.some.call(null,schema.utils.error_QMARK_,l);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.spec.collection.CollectionSpec = (function (pre,constructor,elements,on_error,__meta,__extmap,__hash){
this.pre = pre;
this.constructor = constructor;
this.elements = elements;
this.on_error = on_error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36127__auto__,k__36128__auto__){
var self__ = this;
var this__36127__auto____$1 = this;
return cljs.core._lookup.call(null,this__36127__auto____$1,k__36128__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36129__auto__,k43098,else__36130__auto__){
var self__ = this;
var this__36129__auto____$1 = this;
var G__43100 = (((k43098 instanceof cljs.core.Keyword))?k43098.fqn:null);
switch (G__43100) {
case "pre":
return self__.pre;

break;
case "constructor":
return self__.constructor;

break;
case "elements":
return self__.elements;

break;
case "on-error":
return self__.on_error;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43098,else__36130__auto__);

}
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.map.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.elements);
});

schema.spec.collection.CollectionSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
var constructor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"return-walked?","return-walked?",-1684646015).cljs$core$IFn$_invoke$arity$1(params))?self__.constructor:((function (this$__$1){
return (function (_){
return null;
});})(this$__$1))
);
var t = cljs.core.reduce.call(null,((function (constructor__$1,this$__$1){
return (function (f,e){
return schema.spec.collection.element_transformer.call(null,e,params,f);
});})(constructor__$1,this$__$1))
,((function (constructor__$1,this$__$1){
return (function (_,x){
return x;
});})(constructor__$1,this$__$1))
,cljs.core.reverse.call(null,self__.elements));
return ((function (constructor__$1,t,this$__$1){
return (function (x){
var or__35513__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__35513__auto__)){
return or__35513__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__35513__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__35513__auto____$1){
return or__35513__auto____$1;
} else {
return schema.spec.collection.has_error_QMARK_.call(null,res__$1);
}
})())){
return schema.utils.error.call(null,self__.on_error.call(null,x,res__$1,remaining));
} else {
return constructor__$1.call(null,res__$1);
}
}
});
;})(constructor__$1,t,this$__$1))
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36141__auto__,writer__36142__auto__,opts__36143__auto__){
var self__ = this;
var this__36141__auto____$1 = this;
var pr_pair__36144__auto__ = ((function (this__36141__auto____$1){
return (function (keyval__36145__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36142__auto__,cljs.core.pr_writer,""," ","",opts__36143__auto__,keyval__36145__auto__);
});})(this__36141__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36142__auto__,pr_pair__36144__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__36143__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43097){
var self__ = this;
var G__43097__$1 = this;
return (new cljs.core.RecordIter((0),G__43097__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36125__auto__){
var self__ = this;
var this__36125__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36121__auto__){
var self__ = this;
var this__36121__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36131__auto__){
var self__ = this;
var this__36131__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36122__auto__){
var self__ = this;
var this__36122__auto____$1 = this;
var h__35948__auto__ = self__.__hash;
if(!((h__35948__auto__ == null))){
return h__35948__auto__;
} else {
var h__35948__auto____$1 = cljs.core.hash_imap.call(null,this__36122__auto____$1);
self__.__hash = h__35948__auto____$1;

return h__35948__auto____$1;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36123__auto__,other__36124__auto__){
var self__ = this;
var this__36123__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35501__auto__ = other__36124__auto__;
if(cljs.core.truth_(and__35501__auto__)){
var and__35501__auto____$1 = (this__36123__auto____$1.constructor === other__36124__auto__.constructor);
if(and__35501__auto____$1){
return cljs.core.equiv_map.call(null,this__36123__auto____$1,other__36124__auto__);
} else {
return and__35501__auto____$1;
}
} else {
return and__35501__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36136__auto__,k__36137__auto__){
var self__ = this;
var this__36136__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__36137__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36136__auto____$1),self__.__meta),k__36137__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36137__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36134__auto__,k__36135__auto__,G__43097){
var self__ = this;
var this__36134__auto____$1 = this;
var pred__43101 = cljs.core.keyword_identical_QMARK_;
var expr__43102 = k__36135__auto__;
if(cljs.core.truth_(pred__43101.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__43102))){
return (new schema.spec.collection.CollectionSpec(G__43097,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43101.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__43102))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__43097,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43101.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__43102))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,G__43097,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__43101.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__43102))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,G__43097,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36135__auto__,G__43097),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36139__auto__){
var self__ = this;
var this__36139__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36126__auto__,G__43097){
var self__ = this;
var this__36126__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,G__43097,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36132__auto__,entry__36133__auto__){
var self__ = this;
var this__36132__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36133__auto__)){
return cljs.core._assoc.call(null,this__36132__auto____$1,cljs.core._nth.call(null,entry__36133__auto__,(0)),cljs.core._nth.call(null,entry__36133__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36132__auto____$1,entry__36133__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__36161__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__36161__auto__,writer__36162__auto__){
return cljs.core._write.call(null,writer__36162__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__43099){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__43099),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__43099),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__43099),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__43099),null,cljs.core.dissoc.call(null,G__43099,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)),null));
});

/**
 * A collection represents a collection of elements, each of which is itself
 * schematized.  At the top level, the collection has a precondition
 * (presumably on the overall type), a constructor for the collection from a
 * sequence of items, an element spec, and a function that constructs a
 * descriptive error on failure.
 * 
 * The element spec is a sequence of maps, each of which provides an element
 * schema, cardinality, parser (allowing for efficient processing of
 * structured collections), and optional error wrapper.
 */
schema.spec.collection.collection_spec = (function schema$spec$collection$collection_spec(pre,constructor,elements,on_error){
return schema.spec.collection.__GT_CollectionSpec.call(null,pre,constructor,elements,on_error);
});
schema.spec.collection.all_elements = (function schema$spec$collection$all_elements(schema__$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),new cljs.core.Keyword(null,"zero-or-more","zero-or-more",-1629905900),new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (item_fn,coll){
var seq__43109_43113 = cljs.core.seq.call(null,coll);
var chunk__43110_43114 = null;
var count__43111_43115 = (0);
var i__43112_43116 = (0);
while(true){
if((i__43112_43116 < count__43111_43115)){
var x_43117 = cljs.core._nth.call(null,chunk__43110_43114,i__43112_43116);
item_fn.call(null,x_43117);

var G__43118 = seq__43109_43113;
var G__43119 = chunk__43110_43114;
var G__43120 = count__43111_43115;
var G__43121 = (i__43112_43116 + (1));
seq__43109_43113 = G__43118;
chunk__43110_43114 = G__43119;
count__43111_43115 = G__43120;
i__43112_43116 = G__43121;
continue;
} else {
var temp__4425__auto___43122 = cljs.core.seq.call(null,seq__43109_43113);
if(temp__4425__auto___43122){
var seq__43109_43123__$1 = temp__4425__auto___43122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43109_43123__$1)){
var c__36316__auto___43124 = cljs.core.chunk_first.call(null,seq__43109_43123__$1);
var G__43125 = cljs.core.chunk_rest.call(null,seq__43109_43123__$1);
var G__43126 = c__36316__auto___43124;
var G__43127 = cljs.core.count.call(null,c__36316__auto___43124);
var G__43128 = (0);
seq__43109_43113 = G__43125;
chunk__43110_43114 = G__43126;
count__43111_43115 = G__43127;
i__43112_43116 = G__43128;
continue;
} else {
var x_43129 = cljs.core.first.call(null,seq__43109_43123__$1);
item_fn.call(null,x_43129);

var G__43130 = cljs.core.next.call(null,seq__43109_43123__$1);
var G__43131 = null;
var G__43132 = (0);
var G__43133 = (0);
seq__43109_43113 = G__43130;
chunk__43110_43114 = G__43131;
count__43111_43115 = G__43132;
i__43112_43116 = G__43133;
continue;
}
} else {
}
}
break;
}

return null;
})], null);
});
schema.spec.collection.one_element = (function schema$spec$collection$one_element(required_QMARK_,schema__$1,parser){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"cardinality","cardinality",-104971109),(cljs.core.truth_(required_QMARK_)?new cljs.core.Keyword(null,"exactly-one","exactly-one",-294043587):new cljs.core.Keyword(null,"at-most-one","at-most-one",-1612772829)),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});

//# sourceMappingURL=collection.js.map?rel=1456408488357