// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.spec.leaf');
goog.require('cljs.core');
goog.require('schema.spec.core');

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
schema.spec.leaf.LeafSpec = (function (pre,__meta,__extmap,__hash){
this.pre = pre;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36130__auto__,k__36131__auto__){
var self__ = this;
var this__36130__auto____$1 = this;
return cljs.core._lookup.call(null,this__36130__auto____$1,k__36131__auto__,null);
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36132__auto__,k50524,else__36133__auto__){
var self__ = this;
var this__36132__auto____$1 = this;
var G__50526 = (((k50524 instanceof cljs.core.Keyword))?k50524.fqn:null);
switch (G__50526) {
case "pre":
return self__.pre;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50524,else__36133__auto__);

}
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

schema.spec.leaf.LeafSpec.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function (x){
var or__35516__auto__ = self__.pre.call(null,x);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return x;
}
});
;})(this$__$1))
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36144__auto__,writer__36145__auto__,opts__36146__auto__){
var self__ = this;
var this__36144__auto____$1 = this;
var pr_pair__36147__auto__ = ((function (this__36144__auto____$1){
return (function (keyval__36148__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36145__auto__,cljs.core.pr_writer,""," ","",opts__36146__auto__,keyval__36148__auto__);
});})(this__36144__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36145__auto__,pr_pair__36147__auto__,"#schema.spec.leaf.LeafSpec{",", ","}",opts__36146__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$ = true;

schema.spec.leaf.LeafSpec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50523){
var self__ = this;
var G__50523__$1 = this;
return (new cljs.core.RecordIter((0),G__50523__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36128__auto__){
var self__ = this;
var this__36128__auto____$1 = this;
return self__.__meta;
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36124__auto__){
var self__ = this;
var this__36124__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36134__auto__){
var self__ = this;
var this__36134__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36125__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36126__auto__,other__36127__auto__){
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

schema.spec.leaf.LeafSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36139__auto__,k__36140__auto__){
var self__ = this;
var this__36139__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),null], null), null),k__36140__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36139__auto____$1),self__.__meta),k__36140__auto__);
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36140__auto__)),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36137__auto__,k__36138__auto__,G__50523){
var self__ = this;
var this__36137__auto____$1 = this;
var pred__50527 = cljs.core.keyword_identical_QMARK_;
var expr__50528 = k__36138__auto__;
if(cljs.core.truth_(pred__50527.call(null,new cljs.core.Keyword(null,"pre","pre",2118456869),expr__50528))){
return (new schema.spec.leaf.LeafSpec(G__50523,self__.__meta,self__.__extmap,null));
} else {
return (new schema.spec.leaf.LeafSpec(self__.pre,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36138__auto__,G__50523),null));
}
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36142__auto__){
var self__ = this;
var this__36142__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pre","pre",2118456869),self__.pre],null))], null),self__.__extmap));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36129__auto__,G__50523){
var self__ = this;
var this__36129__auto____$1 = this;
return (new schema.spec.leaf.LeafSpec(self__.pre,G__50523,self__.__extmap,self__.__hash));
});

schema.spec.leaf.LeafSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36135__auto__,entry__36136__auto__){
var self__ = this;
var this__36135__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36136__auto__)){
return cljs.core._assoc.call(null,this__36135__auto____$1,cljs.core._nth.call(null,entry__36136__auto__,(0)),cljs.core._nth.call(null,entry__36136__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36135__auto____$1,entry__36136__auto__);
}
});

schema.spec.leaf.LeafSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pre","pre",-535978900,null)], null);
});

schema.spec.leaf.LeafSpec.cljs$lang$type = true;

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrSeq = (function (this__36164__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.LeafSpec.cljs$lang$ctorPrWriter = (function (this__36164__auto__,writer__36165__auto__){
return cljs.core._write.call(null,writer__36165__auto__,"schema.spec.leaf/LeafSpec");
});

schema.spec.leaf.__GT_LeafSpec = (function schema$spec$leaf$__GT_LeafSpec(pre){
return (new schema.spec.leaf.LeafSpec(pre,null,null,null));
});

schema.spec.leaf.map__GT_LeafSpec = (function schema$spec$leaf$map__GT_LeafSpec(G__50525){
return (new schema.spec.leaf.LeafSpec(new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(G__50525),null,cljs.core.dissoc.call(null,G__50525,new cljs.core.Keyword(null,"pre","pre",2118456869)),null));
});

/**
 * A leaf spec represents an atomic datum that is checked completely
 * with a single precondition, and is otherwise a black box to Schema.
 */
schema.spec.leaf.leaf_spec = (function schema$spec$leaf$leaf_spec(pre){
return schema.spec.leaf.__GT_LeafSpec.call(null,pre);
});

//# sourceMappingURL=leaf.js.map?rel=1456712357777