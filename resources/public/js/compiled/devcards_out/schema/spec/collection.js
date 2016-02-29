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
schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36130__auto__,k__36131__auto__){
var self__ = this;
var this__36130__auto____$1 = this;
return cljs.core._lookup.call(null,this__36130__auto____$1,k__36131__auto__,null);
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36132__auto__,k50466,else__36133__auto__){
var self__ = this;
var this__36132__auto____$1 = this;
var G__50468 = (((k50466 instanceof cljs.core.Keyword))?k50466.fqn:null);
switch (G__50468) {
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
return cljs.core.get.call(null,self__.__extmap,k50466,else__36133__auto__);

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
var or__35516__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var remaining = t.call(null,res,x);
var res__$1 = cljs.core.deref.call(null,res);
if(cljs.core.truth_((function (){var or__35516__auto____$1 = cljs.core.seq.call(null,remaining);
if(or__35516__auto____$1){
return or__35516__auto____$1;
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

schema.spec.collection.CollectionSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36144__auto__,writer__36145__auto__,opts__36146__auto__){
var self__ = this;
var this__36144__auto____$1 = this;
var pr_pair__36147__auto__ = ((function (this__36144__auto____$1){
return (function (keyval__36148__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36145__auto__,cljs.core.pr_writer,""," ","",opts__36146__auto__,keyval__36148__auto__);
});})(this__36144__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36145__auto__,pr_pair__36147__auto__,"#schema.spec.collection.CollectionSpec{",", ","}",opts__36146__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.collection.CollectionSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50465){
var self__ = this;
var G__50465__$1 = this;
return (new cljs.core.RecordIter((0),G__50465__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36128__auto__){
var self__ = this;
var this__36128__auto____$1 = this;
return self__.__meta;
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36124__auto__){
var self__ = this;
var this__36124__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36134__auto__){
var self__ = this;
var this__36134__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36125__auto__){
var self__ = this;
var this__36125__auto____$1 = this;
var h__35951__auto__ = self__.__hash;
if(!((h__35951__auto__ == null))){
return h__35951__auto__;
} else {
var h__35951__auto____$1 = cljs.core.hash_imap.call(null,this__36125__auto____$1);
self__.__hash = h__35951__auto____$1;

return h__35951__auto____$1;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36126__auto__,other__36127__auto__){
var self__ = this;
var this__36126__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35504__auto__ = other__36127__auto__;
if(cljs.core.truth_(and__35504__auto__)){
var and__35504__auto____$1 = (this__36126__auto____$1.constructor === other__36127__auto__.constructor);
if(and__35504__auto____$1){
return cljs.core.equiv_map.call(null,this__36126__auto____$1,other__36127__auto__);
} else {
return and__35504__auto____$1;
}
} else {
return and__35504__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36139__auto__,k__36140__auto__){
var self__ = this;
var this__36139__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pre","pre",2118456869),null,new cljs.core.Keyword(null,"elements","elements",657646735),null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),null], null), null),k__36140__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36139__auto____$1),self__.__meta),k__36140__auto__);
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36140__auto__)),null));
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36137__auto__,k__36138__auto__,G__50465){
var self__ = this;
var this__36137__auto____$1 = this;
var pred__50469 = cljs.core.keyword_identical_QMARK_;
var expr__50470 = k__36138__auto__;
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__50470))){
return (new schema.spec.collection.CollectionSpec(G__50465,self__.constructor,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"constructor","constructor",-1953928811),expr__50470))){
return (new schema.spec.collection.CollectionSpec(self__.pre,G__50465,self__.elements,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__50470))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,G__50465,self__.on_error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50469.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530),expr__50470))){
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,G__50465,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36138__auto__,G__50465),null));
}
}
}
}
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36142__auto__){
var self__ = this;
var this__36142__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"constructor","constructor",-1953928811),self__.constructor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-error","on-error",1728533530),self__.on_error],null))], null),self__.__extmap));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36129__auto__,G__50465){
var self__ = this;
var this__36129__auto____$1 = this;
return (new schema.spec.collection.CollectionSpec(self__.pre,self__.constructor,self__.elements,self__.on_error,G__50465,self__.__extmap,self__.__hash));
});

schema.spec.collection.CollectionSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36135__auto__,entry__36136__auto__){
var self__ = this;
var this__36135__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36136__auto__)){
return cljs.core._assoc.call(null,this__36135__auto____$1,cljs.core._nth.call(null,entry__36136__auto__,(0)),cljs.core._nth.call(null,entry__36136__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36135__auto____$1,entry__36136__auto__);
}
});

schema.spec.collection.CollectionSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"constructor","constructor",-313397284,null),new cljs.core.Symbol(null,"elements","elements",-1996789034,null),new cljs.core.Symbol(null,"on-error","on-error",-925902239,null)], null);
});

schema.spec.collection.CollectionSpec.cljs$lang$type = true;

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrSeq = (function (this__36164__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.CollectionSpec.cljs$lang$ctorPrWriter = (function (this__36164__auto__,writer__36165__auto__){
return cljs.core._write.call(null,writer__36165__auto__,"schema.spec.collection/CollectionSpec");
});

schema.spec.collection.__GT_CollectionSpec = (function schema$spec$collection$__GT_CollectionSpec(pre,constructor,elements,on_error){
return (new schema.spec.collection.CollectionSpec(pre,constructor,elements,on_error,null,null,null));
});

schema.spec.collection.map__GT_CollectionSpec = (function schema$spec$collection$map__GT_CollectionSpec(G__50467){
return (new schema.spec.collection.CollectionSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__50467),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(G__50467),new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__50467),new cljs.core.Keyword(null,"on-error","on-error",1728533530).cljs$core$IFn$_invoke$arity$1(G__50467),null,cljs.core.dissoc.call(null,G__50467,new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword(null,"elements","elements",657646735),new cljs.core.Keyword(null,"on-error","on-error",1728533530)),null));
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
var seq__50477_50481 = cljs.core.seq.call(null,coll);
var chunk__50478_50482 = null;
var count__50479_50483 = (0);
var i__50480_50484 = (0);
while(true){
if((i__50480_50484 < count__50479_50483)){
var x_50485 = cljs.core._nth.call(null,chunk__50478_50482,i__50480_50484);
item_fn.call(null,x_50485);

var G__50486 = seq__50477_50481;
var G__50487 = chunk__50478_50482;
var G__50488 = count__50479_50483;
var G__50489 = (i__50480_50484 + (1));
seq__50477_50481 = G__50486;
chunk__50478_50482 = G__50487;
count__50479_50483 = G__50488;
i__50480_50484 = G__50489;
continue;
} else {
var temp__4425__auto___50490 = cljs.core.seq.call(null,seq__50477_50481);
if(temp__4425__auto___50490){
var seq__50477_50491__$1 = temp__4425__auto___50490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50477_50491__$1)){
var c__36319__auto___50492 = cljs.core.chunk_first.call(null,seq__50477_50491__$1);
var G__50493 = cljs.core.chunk_rest.call(null,seq__50477_50491__$1);
var G__50494 = c__36319__auto___50492;
var G__50495 = cljs.core.count.call(null,c__36319__auto___50492);
var G__50496 = (0);
seq__50477_50481 = G__50493;
chunk__50478_50482 = G__50494;
count__50479_50483 = G__50495;
i__50480_50484 = G__50496;
continue;
} else {
var x_50497 = cljs.core.first.call(null,seq__50477_50491__$1);
item_fn.call(null,x_50497);

var G__50498 = cljs.core.next.call(null,seq__50477_50491__$1);
var G__50499 = null;
var G__50500 = (0);
var G__50501 = (0);
seq__50477_50481 = G__50498;
chunk__50478_50482 = G__50499;
count__50479_50483 = G__50500;
i__50480_50484 = G__50501;
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

//# sourceMappingURL=collection.js.map?rel=1456712357631