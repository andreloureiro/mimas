// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__35514__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__35514__auto__){
return or__35514__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__35514__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40624_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40624_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40629 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40630 = null;
var count__40631 = (0);
var i__40632 = (0);
while(true){
if((i__40632 < count__40631)){
var n = cljs.core._nth.call(null,chunk__40630,i__40632);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40633 = seq__40629;
var G__40634 = chunk__40630;
var G__40635 = count__40631;
var G__40636 = (i__40632 + (1));
seq__40629 = G__40633;
chunk__40630 = G__40634;
count__40631 = G__40635;
i__40632 = G__40636;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40629);
if(temp__4425__auto__){
var seq__40629__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40629__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__40629__$1);
var G__40637 = cljs.core.chunk_rest.call(null,seq__40629__$1);
var G__40638 = c__36317__auto__;
var G__40639 = cljs.core.count.call(null,c__36317__auto__);
var G__40640 = (0);
seq__40629 = G__40637;
chunk__40630 = G__40638;
count__40631 = G__40639;
i__40632 = G__40640;
continue;
} else {
var n = cljs.core.first.call(null,seq__40629__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40641 = cljs.core.next.call(null,seq__40629__$1);
var G__40642 = null;
var G__40643 = (0);
var G__40644 = (0);
seq__40629 = G__40641;
chunk__40630 = G__40642;
count__40631 = G__40643;
i__40632 = G__40644;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40683_40690 = cljs.core.seq.call(null,deps);
var chunk__40684_40691 = null;
var count__40685_40692 = (0);
var i__40686_40693 = (0);
while(true){
if((i__40686_40693 < count__40685_40692)){
var dep_40694 = cljs.core._nth.call(null,chunk__40684_40691,i__40686_40693);
topo_sort_helper_STAR_.call(null,dep_40694,(depth + (1)),state);

var G__40695 = seq__40683_40690;
var G__40696 = chunk__40684_40691;
var G__40697 = count__40685_40692;
var G__40698 = (i__40686_40693 + (1));
seq__40683_40690 = G__40695;
chunk__40684_40691 = G__40696;
count__40685_40692 = G__40697;
i__40686_40693 = G__40698;
continue;
} else {
var temp__4425__auto___40699 = cljs.core.seq.call(null,seq__40683_40690);
if(temp__4425__auto___40699){
var seq__40683_40700__$1 = temp__4425__auto___40699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40683_40700__$1)){
var c__36317__auto___40701 = cljs.core.chunk_first.call(null,seq__40683_40700__$1);
var G__40702 = cljs.core.chunk_rest.call(null,seq__40683_40700__$1);
var G__40703 = c__36317__auto___40701;
var G__40704 = cljs.core.count.call(null,c__36317__auto___40701);
var G__40705 = (0);
seq__40683_40690 = G__40702;
chunk__40684_40691 = G__40703;
count__40685_40692 = G__40704;
i__40686_40693 = G__40705;
continue;
} else {
var dep_40706 = cljs.core.first.call(null,seq__40683_40700__$1);
topo_sort_helper_STAR_.call(null,dep_40706,(depth + (1)),state);

var G__40707 = cljs.core.next.call(null,seq__40683_40700__$1);
var G__40708 = null;
var G__40709 = (0);
var G__40710 = (0);
seq__40683_40690 = G__40707;
chunk__40684_40691 = G__40708;
count__40685_40692 = G__40709;
i__40686_40693 = G__40710;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40687){
var vec__40689 = p__40687;
var x = cljs.core.nth.call(null,vec__40689,(0),null);
var xs = cljs.core.nthnext.call(null,vec__40689,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40689,x,xs,get_deps__$1){
return (function (p1__40645_SHARP_){
return clojure.set.difference.call(null,p1__40645_SHARP_,x);
});})(vec__40689,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40723 = cljs.core.seq.call(null,provides);
var chunk__40724 = null;
var count__40725 = (0);
var i__40726 = (0);
while(true){
if((i__40726 < count__40725)){
var prov = cljs.core._nth.call(null,chunk__40724,i__40726);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40727_40735 = cljs.core.seq.call(null,requires);
var chunk__40728_40736 = null;
var count__40729_40737 = (0);
var i__40730_40738 = (0);
while(true){
if((i__40730_40738 < count__40729_40737)){
var req_40739 = cljs.core._nth.call(null,chunk__40728_40736,i__40730_40738);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40739,prov);

var G__40740 = seq__40727_40735;
var G__40741 = chunk__40728_40736;
var G__40742 = count__40729_40737;
var G__40743 = (i__40730_40738 + (1));
seq__40727_40735 = G__40740;
chunk__40728_40736 = G__40741;
count__40729_40737 = G__40742;
i__40730_40738 = G__40743;
continue;
} else {
var temp__4425__auto___40744 = cljs.core.seq.call(null,seq__40727_40735);
if(temp__4425__auto___40744){
var seq__40727_40745__$1 = temp__4425__auto___40744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40727_40745__$1)){
var c__36317__auto___40746 = cljs.core.chunk_first.call(null,seq__40727_40745__$1);
var G__40747 = cljs.core.chunk_rest.call(null,seq__40727_40745__$1);
var G__40748 = c__36317__auto___40746;
var G__40749 = cljs.core.count.call(null,c__36317__auto___40746);
var G__40750 = (0);
seq__40727_40735 = G__40747;
chunk__40728_40736 = G__40748;
count__40729_40737 = G__40749;
i__40730_40738 = G__40750;
continue;
} else {
var req_40751 = cljs.core.first.call(null,seq__40727_40745__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40751,prov);

var G__40752 = cljs.core.next.call(null,seq__40727_40745__$1);
var G__40753 = null;
var G__40754 = (0);
var G__40755 = (0);
seq__40727_40735 = G__40752;
chunk__40728_40736 = G__40753;
count__40729_40737 = G__40754;
i__40730_40738 = G__40755;
continue;
}
} else {
}
}
break;
}

var G__40756 = seq__40723;
var G__40757 = chunk__40724;
var G__40758 = count__40725;
var G__40759 = (i__40726 + (1));
seq__40723 = G__40756;
chunk__40724 = G__40757;
count__40725 = G__40758;
i__40726 = G__40759;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40723);
if(temp__4425__auto__){
var seq__40723__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40723__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__40723__$1);
var G__40760 = cljs.core.chunk_rest.call(null,seq__40723__$1);
var G__40761 = c__36317__auto__;
var G__40762 = cljs.core.count.call(null,c__36317__auto__);
var G__40763 = (0);
seq__40723 = G__40760;
chunk__40724 = G__40761;
count__40725 = G__40762;
i__40726 = G__40763;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40723__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40731_40764 = cljs.core.seq.call(null,requires);
var chunk__40732_40765 = null;
var count__40733_40766 = (0);
var i__40734_40767 = (0);
while(true){
if((i__40734_40767 < count__40733_40766)){
var req_40768 = cljs.core._nth.call(null,chunk__40732_40765,i__40734_40767);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40768,prov);

var G__40769 = seq__40731_40764;
var G__40770 = chunk__40732_40765;
var G__40771 = count__40733_40766;
var G__40772 = (i__40734_40767 + (1));
seq__40731_40764 = G__40769;
chunk__40732_40765 = G__40770;
count__40733_40766 = G__40771;
i__40734_40767 = G__40772;
continue;
} else {
var temp__4425__auto___40773__$1 = cljs.core.seq.call(null,seq__40731_40764);
if(temp__4425__auto___40773__$1){
var seq__40731_40774__$1 = temp__4425__auto___40773__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40731_40774__$1)){
var c__36317__auto___40775 = cljs.core.chunk_first.call(null,seq__40731_40774__$1);
var G__40776 = cljs.core.chunk_rest.call(null,seq__40731_40774__$1);
var G__40777 = c__36317__auto___40775;
var G__40778 = cljs.core.count.call(null,c__36317__auto___40775);
var G__40779 = (0);
seq__40731_40764 = G__40776;
chunk__40732_40765 = G__40777;
count__40733_40766 = G__40778;
i__40734_40767 = G__40779;
continue;
} else {
var req_40780 = cljs.core.first.call(null,seq__40731_40774__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40780,prov);

var G__40781 = cljs.core.next.call(null,seq__40731_40774__$1);
var G__40782 = null;
var G__40783 = (0);
var G__40784 = (0);
seq__40731_40764 = G__40781;
chunk__40732_40765 = G__40782;
count__40733_40766 = G__40783;
i__40734_40767 = G__40784;
continue;
}
} else {
}
}
break;
}

var G__40785 = cljs.core.next.call(null,seq__40723__$1);
var G__40786 = null;
var G__40787 = (0);
var G__40788 = (0);
seq__40723 = G__40785;
chunk__40724 = G__40786;
count__40725 = G__40787;
i__40726 = G__40788;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40793_40797 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40794_40798 = null;
var count__40795_40799 = (0);
var i__40796_40800 = (0);
while(true){
if((i__40796_40800 < count__40795_40799)){
var ns_40801 = cljs.core._nth.call(null,chunk__40794_40798,i__40796_40800);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40801);

var G__40802 = seq__40793_40797;
var G__40803 = chunk__40794_40798;
var G__40804 = count__40795_40799;
var G__40805 = (i__40796_40800 + (1));
seq__40793_40797 = G__40802;
chunk__40794_40798 = G__40803;
count__40795_40799 = G__40804;
i__40796_40800 = G__40805;
continue;
} else {
var temp__4425__auto___40806 = cljs.core.seq.call(null,seq__40793_40797);
if(temp__4425__auto___40806){
var seq__40793_40807__$1 = temp__4425__auto___40806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40793_40807__$1)){
var c__36317__auto___40808 = cljs.core.chunk_first.call(null,seq__40793_40807__$1);
var G__40809 = cljs.core.chunk_rest.call(null,seq__40793_40807__$1);
var G__40810 = c__36317__auto___40808;
var G__40811 = cljs.core.count.call(null,c__36317__auto___40808);
var G__40812 = (0);
seq__40793_40797 = G__40809;
chunk__40794_40798 = G__40810;
count__40795_40799 = G__40811;
i__40796_40800 = G__40812;
continue;
} else {
var ns_40813 = cljs.core.first.call(null,seq__40793_40807__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40813);

var G__40814 = cljs.core.next.call(null,seq__40793_40807__$1);
var G__40815 = null;
var G__40816 = (0);
var G__40817 = (0);
seq__40793_40797 = G__40814;
chunk__40794_40798 = G__40815;
count__40795_40799 = G__40816;
i__40796_40800 = G__40817;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__35514__auto__ = goog.require__;
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40818__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40819__i = 0, G__40819__a = new Array(arguments.length -  0);
while (G__40819__i < G__40819__a.length) {G__40819__a[G__40819__i] = arguments[G__40819__i + 0]; ++G__40819__i;}
  args = new cljs.core.IndexedSeq(G__40819__a,0);
} 
return G__40818__delegate.call(this,args);};
G__40818.cljs$lang$maxFixedArity = 0;
G__40818.cljs$lang$applyTo = (function (arglist__40820){
var args = cljs.core.seq(arglist__40820);
return G__40818__delegate(args);
});
G__40818.cljs$core$IFn$_invoke$arity$variadic = G__40818__delegate;
return G__40818;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40822 = cljs.core._EQ_;
var expr__40823 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40822.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40823))){
var path_parts = ((function (pred__40822,expr__40823){
return (function (p1__40821_SHARP_){
return clojure.string.split.call(null,p1__40821_SHARP_,/[\/\\]/);
});})(pred__40822,expr__40823))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40822,expr__40823){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40825){if((e40825 instanceof Error)){
var e = e40825;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40825;

}
}})());
});
;})(path_parts,sep,root,pred__40822,expr__40823))
} else {
if(cljs.core.truth_(pred__40822.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40823))){
return ((function (pred__40822,expr__40823){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40822,expr__40823){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40822,expr__40823))
);

return deferred.addErrback(((function (deferred,pred__40822,expr__40823){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40822,expr__40823))
);
});
;})(pred__40822,expr__40823))
} else {
return ((function (pred__40822,expr__40823){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40822,expr__40823))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40826,callback){
var map__40829 = p__40826;
var map__40829__$1 = ((((!((map__40829 == null)))?((((map__40829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40829):map__40829);
var file_msg = map__40829__$1;
var request_url = cljs.core.get.call(null,map__40829__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40829,map__40829__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40829,map__40829__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__){
return (function (state_40853){
var state_val_40854 = (state_40853[(1)]);
if((state_val_40854 === (7))){
var inst_40849 = (state_40853[(2)]);
var state_40853__$1 = state_40853;
var statearr_40855_40875 = state_40853__$1;
(statearr_40855_40875[(2)] = inst_40849);

(statearr_40855_40875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (1))){
var state_40853__$1 = state_40853;
var statearr_40856_40876 = state_40853__$1;
(statearr_40856_40876[(2)] = null);

(statearr_40856_40876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (4))){
var inst_40833 = (state_40853[(7)]);
var inst_40833__$1 = (state_40853[(2)]);
var state_40853__$1 = (function (){var statearr_40857 = state_40853;
(statearr_40857[(7)] = inst_40833__$1);

return statearr_40857;
})();
if(cljs.core.truth_(inst_40833__$1)){
var statearr_40858_40877 = state_40853__$1;
(statearr_40858_40877[(1)] = (5));

} else {
var statearr_40859_40878 = state_40853__$1;
(statearr_40859_40878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (6))){
var state_40853__$1 = state_40853;
var statearr_40860_40879 = state_40853__$1;
(statearr_40860_40879[(2)] = null);

(statearr_40860_40879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (3))){
var inst_40851 = (state_40853[(2)]);
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40853__$1,inst_40851);
} else {
if((state_val_40854 === (2))){
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40853__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40854 === (11))){
var inst_40845 = (state_40853[(2)]);
var state_40853__$1 = (function (){var statearr_40861 = state_40853;
(statearr_40861[(8)] = inst_40845);

return statearr_40861;
})();
var statearr_40862_40880 = state_40853__$1;
(statearr_40862_40880[(2)] = null);

(statearr_40862_40880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (9))){
var inst_40837 = (state_40853[(9)]);
var inst_40839 = (state_40853[(10)]);
var inst_40841 = inst_40839.call(null,inst_40837);
var state_40853__$1 = state_40853;
var statearr_40863_40881 = state_40853__$1;
(statearr_40863_40881[(2)] = inst_40841);

(statearr_40863_40881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (5))){
var inst_40833 = (state_40853[(7)]);
var inst_40835 = figwheel.client.file_reloading.blocking_load.call(null,inst_40833);
var state_40853__$1 = state_40853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40853__$1,(8),inst_40835);
} else {
if((state_val_40854 === (10))){
var inst_40837 = (state_40853[(9)]);
var inst_40843 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40837);
var state_40853__$1 = state_40853;
var statearr_40864_40882 = state_40853__$1;
(statearr_40864_40882[(2)] = inst_40843);

(statearr_40864_40882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40854 === (8))){
var inst_40833 = (state_40853[(7)]);
var inst_40839 = (state_40853[(10)]);
var inst_40837 = (state_40853[(2)]);
var inst_40838 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40839__$1 = cljs.core.get.call(null,inst_40838,inst_40833);
var state_40853__$1 = (function (){var statearr_40865 = state_40853;
(statearr_40865[(9)] = inst_40837);

(statearr_40865[(10)] = inst_40839__$1);

return statearr_40865;
})();
if(cljs.core.truth_(inst_40839__$1)){
var statearr_40866_40883 = state_40853__$1;
(statearr_40866_40883[(1)] = (9));

} else {
var statearr_40867_40884 = state_40853__$1;
(statearr_40867_40884[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto__))
;
return ((function (switch__37569__auto__,c__37681__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37570__auto__ = null;
var figwheel$client$file_reloading$state_machine__37570__auto____0 = (function (){
var statearr_40871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40871[(0)] = figwheel$client$file_reloading$state_machine__37570__auto__);

(statearr_40871[(1)] = (1));

return statearr_40871;
});
var figwheel$client$file_reloading$state_machine__37570__auto____1 = (function (state_40853){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_40853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e40872){if((e40872 instanceof Object)){
var ex__37573__auto__ = e40872;
var statearr_40873_40885 = state_40853;
(statearr_40873_40885[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40886 = state_40853;
state_40853 = G__40886;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37570__auto__ = function(state_40853){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37570__auto____1.call(this,state_40853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37570__auto____0;
figwheel$client$file_reloading$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37570__auto____1;
return figwheel$client$file_reloading$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_40874 = f__37682__auto__.call(null);
(statearr_40874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_40874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__))
);

return c__37681__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40887,callback){
var map__40890 = p__40887;
var map__40890__$1 = ((((!((map__40890 == null)))?((((map__40890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40890):map__40890);
var file_msg = map__40890__$1;
var namespace = cljs.core.get.call(null,map__40890__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40890,map__40890__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40890,map__40890__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40892){
var map__40895 = p__40892;
var map__40895__$1 = ((((!((map__40895 == null)))?((((map__40895.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40895.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40895):map__40895);
var file_msg = map__40895__$1;
var namespace = cljs.core.get.call(null,map__40895__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__35502__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__35502__auto__){
var or__35514__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35514__auto__)){
return or__35514__auto__;
} else {
var or__35514__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35514__auto____$1)){
return or__35514__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__35502__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40897,callback){
var map__40900 = p__40897;
var map__40900__$1 = ((((!((map__40900 == null)))?((((map__40900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40900):map__40900);
var file_msg = map__40900__$1;
var request_url = cljs.core.get.call(null,map__40900__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40900__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37681__auto___40988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___40988,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___40988,out){
return (function (state_40970){
var state_val_40971 = (state_40970[(1)]);
if((state_val_40971 === (1))){
var inst_40948 = cljs.core.nth.call(null,files,(0),null);
var inst_40949 = cljs.core.nthnext.call(null,files,(1));
var inst_40950 = files;
var state_40970__$1 = (function (){var statearr_40972 = state_40970;
(statearr_40972[(7)] = inst_40950);

(statearr_40972[(8)] = inst_40949);

(statearr_40972[(9)] = inst_40948);

return statearr_40972;
})();
var statearr_40973_40989 = state_40970__$1;
(statearr_40973_40989[(2)] = null);

(statearr_40973_40989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40971 === (2))){
var inst_40950 = (state_40970[(7)]);
var inst_40953 = (state_40970[(10)]);
var inst_40953__$1 = cljs.core.nth.call(null,inst_40950,(0),null);
var inst_40954 = cljs.core.nthnext.call(null,inst_40950,(1));
var inst_40955 = (inst_40953__$1 == null);
var inst_40956 = cljs.core.not.call(null,inst_40955);
var state_40970__$1 = (function (){var statearr_40974 = state_40970;
(statearr_40974[(10)] = inst_40953__$1);

(statearr_40974[(11)] = inst_40954);

return statearr_40974;
})();
if(inst_40956){
var statearr_40975_40990 = state_40970__$1;
(statearr_40975_40990[(1)] = (4));

} else {
var statearr_40976_40991 = state_40970__$1;
(statearr_40976_40991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40971 === (3))){
var inst_40968 = (state_40970[(2)]);
var state_40970__$1 = state_40970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40970__$1,inst_40968);
} else {
if((state_val_40971 === (4))){
var inst_40953 = (state_40970[(10)]);
var inst_40958 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40953);
var state_40970__$1 = state_40970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40970__$1,(7),inst_40958);
} else {
if((state_val_40971 === (5))){
var inst_40964 = cljs.core.async.close_BANG_.call(null,out);
var state_40970__$1 = state_40970;
var statearr_40977_40992 = state_40970__$1;
(statearr_40977_40992[(2)] = inst_40964);

(statearr_40977_40992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40971 === (6))){
var inst_40966 = (state_40970[(2)]);
var state_40970__$1 = state_40970;
var statearr_40978_40993 = state_40970__$1;
(statearr_40978_40993[(2)] = inst_40966);

(statearr_40978_40993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40971 === (7))){
var inst_40954 = (state_40970[(11)]);
var inst_40960 = (state_40970[(2)]);
var inst_40961 = cljs.core.async.put_BANG_.call(null,out,inst_40960);
var inst_40950 = inst_40954;
var state_40970__$1 = (function (){var statearr_40979 = state_40970;
(statearr_40979[(7)] = inst_40950);

(statearr_40979[(12)] = inst_40961);

return statearr_40979;
})();
var statearr_40980_40994 = state_40970__$1;
(statearr_40980_40994[(2)] = null);

(statearr_40980_40994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37681__auto___40988,out))
;
return ((function (switch__37569__auto__,c__37681__auto___40988,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____0 = (function (){
var statearr_40984 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40984[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__);

(statearr_40984[(1)] = (1));

return statearr_40984;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____1 = (function (state_40970){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_40970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e40985){if((e40985 instanceof Object)){
var ex__37573__auto__ = e40985;
var statearr_40986_40995 = state_40970;
(statearr_40986_40995[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40996 = state_40970;
state_40970 = G__40996;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__ = function(state_40970){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____1.call(this,state_40970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___40988,out))
})();
var state__37683__auto__ = (function (){var statearr_40987 = f__37682__auto__.call(null);
(statearr_40987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___40988);

return statearr_40987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___40988,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40997,opts){
var map__41001 = p__40997;
var map__41001__$1 = ((((!((map__41001 == null)))?((((map__41001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41001):map__41001);
var eval_body__$1 = cljs.core.get.call(null,map__41001__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41001__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__35502__auto__ = eval_body__$1;
if(cljs.core.truth_(and__35502__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__35502__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41003){var e = e41003;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41004_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41004_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41009){
var vec__41010 = p__41009;
var k = cljs.core.nth.call(null,vec__41010,(0),null);
var v = cljs.core.nth.call(null,vec__41010,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41011){
var vec__41012 = p__41011;
var k = cljs.core.nth.call(null,vec__41012,(0),null);
var v = cljs.core.nth.call(null,vec__41012,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41016,p__41017){
var map__41264 = p__41016;
var map__41264__$1 = ((((!((map__41264 == null)))?((((map__41264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41264):map__41264);
var opts = map__41264__$1;
var before_jsload = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41264__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41265 = p__41017;
var map__41265__$1 = ((((!((map__41265 == null)))?((((map__41265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41265):map__41265);
var msg = map__41265__$1;
var files = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41265__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41418){
var state_val_41419 = (state_41418[(1)]);
if((state_val_41419 === (7))){
var inst_41282 = (state_41418[(7)]);
var inst_41281 = (state_41418[(8)]);
var inst_41279 = (state_41418[(9)]);
var inst_41280 = (state_41418[(10)]);
var inst_41287 = cljs.core._nth.call(null,inst_41280,inst_41282);
var inst_41288 = figwheel.client.file_reloading.eval_body.call(null,inst_41287,opts);
var inst_41289 = (inst_41282 + (1));
var tmp41420 = inst_41281;
var tmp41421 = inst_41279;
var tmp41422 = inst_41280;
var inst_41279__$1 = tmp41421;
var inst_41280__$1 = tmp41422;
var inst_41281__$1 = tmp41420;
var inst_41282__$1 = inst_41289;
var state_41418__$1 = (function (){var statearr_41423 = state_41418;
(statearr_41423[(7)] = inst_41282__$1);

(statearr_41423[(8)] = inst_41281__$1);

(statearr_41423[(9)] = inst_41279__$1);

(statearr_41423[(10)] = inst_41280__$1);

(statearr_41423[(11)] = inst_41288);

return statearr_41423;
})();
var statearr_41424_41510 = state_41418__$1;
(statearr_41424_41510[(2)] = null);

(statearr_41424_41510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (20))){
var inst_41322 = (state_41418[(12)]);
var inst_41330 = figwheel.client.file_reloading.sort_files.call(null,inst_41322);
var state_41418__$1 = state_41418;
var statearr_41425_41511 = state_41418__$1;
(statearr_41425_41511[(2)] = inst_41330);

(statearr_41425_41511[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (27))){
var state_41418__$1 = state_41418;
var statearr_41426_41512 = state_41418__$1;
(statearr_41426_41512[(2)] = null);

(statearr_41426_41512[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (1))){
var inst_41271 = (state_41418[(13)]);
var inst_41268 = before_jsload.call(null,files);
var inst_41269 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41270 = (function (){return ((function (inst_41271,inst_41268,inst_41269,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41013_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41013_SHARP_);
});
;})(inst_41271,inst_41268,inst_41269,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41271__$1 = cljs.core.filter.call(null,inst_41270,files);
var inst_41272 = cljs.core.not_empty.call(null,inst_41271__$1);
var state_41418__$1 = (function (){var statearr_41427 = state_41418;
(statearr_41427[(13)] = inst_41271__$1);

(statearr_41427[(14)] = inst_41269);

(statearr_41427[(15)] = inst_41268);

return statearr_41427;
})();
if(cljs.core.truth_(inst_41272)){
var statearr_41428_41513 = state_41418__$1;
(statearr_41428_41513[(1)] = (2));

} else {
var statearr_41429_41514 = state_41418__$1;
(statearr_41429_41514[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (24))){
var state_41418__$1 = state_41418;
var statearr_41430_41515 = state_41418__$1;
(statearr_41430_41515[(2)] = null);

(statearr_41430_41515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (39))){
var inst_41372 = (state_41418[(16)]);
var state_41418__$1 = state_41418;
var statearr_41431_41516 = state_41418__$1;
(statearr_41431_41516[(2)] = inst_41372);

(statearr_41431_41516[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (46))){
var inst_41413 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41432_41517 = state_41418__$1;
(statearr_41432_41517[(2)] = inst_41413);

(statearr_41432_41517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (4))){
var inst_41316 = (state_41418[(2)]);
var inst_41317 = cljs.core.List.EMPTY;
var inst_41318 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41317);
var inst_41319 = (function (){return ((function (inst_41316,inst_41317,inst_41318,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41014_SHARP_){
var and__35502__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41014_SHARP_);
if(cljs.core.truth_(and__35502__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41014_SHARP_));
} else {
return and__35502__auto__;
}
});
;})(inst_41316,inst_41317,inst_41318,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41320 = cljs.core.filter.call(null,inst_41319,files);
var inst_41321 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41322 = cljs.core.concat.call(null,inst_41320,inst_41321);
var state_41418__$1 = (function (){var statearr_41433 = state_41418;
(statearr_41433[(17)] = inst_41316);

(statearr_41433[(12)] = inst_41322);

(statearr_41433[(18)] = inst_41318);

return statearr_41433;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41434_41518 = state_41418__$1;
(statearr_41434_41518[(1)] = (16));

} else {
var statearr_41435_41519 = state_41418__$1;
(statearr_41435_41519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (15))){
var inst_41306 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41436_41520 = state_41418__$1;
(statearr_41436_41520[(2)] = inst_41306);

(statearr_41436_41520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (21))){
var inst_41332 = (state_41418[(19)]);
var inst_41332__$1 = (state_41418[(2)]);
var inst_41333 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41332__$1);
var state_41418__$1 = (function (){var statearr_41437 = state_41418;
(statearr_41437[(19)] = inst_41332__$1);

return statearr_41437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41418__$1,(22),inst_41333);
} else {
if((state_val_41419 === (31))){
var inst_41416 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41418__$1,inst_41416);
} else {
if((state_val_41419 === (32))){
var inst_41372 = (state_41418[(16)]);
var inst_41377 = inst_41372.cljs$lang$protocol_mask$partition0$;
var inst_41378 = (inst_41377 & (64));
var inst_41379 = inst_41372.cljs$core$ISeq$;
var inst_41380 = (inst_41378) || (inst_41379);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41380)){
var statearr_41438_41521 = state_41418__$1;
(statearr_41438_41521[(1)] = (35));

} else {
var statearr_41439_41522 = state_41418__$1;
(statearr_41439_41522[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (40))){
var inst_41393 = (state_41418[(20)]);
var inst_41392 = (state_41418[(2)]);
var inst_41393__$1 = cljs.core.get.call(null,inst_41392,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41394 = cljs.core.get.call(null,inst_41392,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41395 = cljs.core.not_empty.call(null,inst_41393__$1);
var state_41418__$1 = (function (){var statearr_41440 = state_41418;
(statearr_41440[(21)] = inst_41394);

(statearr_41440[(20)] = inst_41393__$1);

return statearr_41440;
})();
if(cljs.core.truth_(inst_41395)){
var statearr_41441_41523 = state_41418__$1;
(statearr_41441_41523[(1)] = (41));

} else {
var statearr_41442_41524 = state_41418__$1;
(statearr_41442_41524[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (33))){
var state_41418__$1 = state_41418;
var statearr_41443_41525 = state_41418__$1;
(statearr_41443_41525[(2)] = false);

(statearr_41443_41525[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (13))){
var inst_41292 = (state_41418[(22)]);
var inst_41296 = cljs.core.chunk_first.call(null,inst_41292);
var inst_41297 = cljs.core.chunk_rest.call(null,inst_41292);
var inst_41298 = cljs.core.count.call(null,inst_41296);
var inst_41279 = inst_41297;
var inst_41280 = inst_41296;
var inst_41281 = inst_41298;
var inst_41282 = (0);
var state_41418__$1 = (function (){var statearr_41444 = state_41418;
(statearr_41444[(7)] = inst_41282);

(statearr_41444[(8)] = inst_41281);

(statearr_41444[(9)] = inst_41279);

(statearr_41444[(10)] = inst_41280);

return statearr_41444;
})();
var statearr_41445_41526 = state_41418__$1;
(statearr_41445_41526[(2)] = null);

(statearr_41445_41526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (22))){
var inst_41336 = (state_41418[(23)]);
var inst_41332 = (state_41418[(19)]);
var inst_41335 = (state_41418[(24)]);
var inst_41340 = (state_41418[(25)]);
var inst_41335__$1 = (state_41418[(2)]);
var inst_41336__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41335__$1);
var inst_41337 = (function (){var all_files = inst_41332;
var res_SINGLEQUOTE_ = inst_41335__$1;
var res = inst_41336__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41336,inst_41332,inst_41335,inst_41340,inst_41335__$1,inst_41336__$1,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41015_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41015_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41336,inst_41332,inst_41335,inst_41340,inst_41335__$1,inst_41336__$1,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41338 = cljs.core.filter.call(null,inst_41337,inst_41335__$1);
var inst_41339 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41340__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41339);
var inst_41341 = cljs.core.not_empty.call(null,inst_41340__$1);
var state_41418__$1 = (function (){var statearr_41446 = state_41418;
(statearr_41446[(23)] = inst_41336__$1);

(statearr_41446[(24)] = inst_41335__$1);

(statearr_41446[(26)] = inst_41338);

(statearr_41446[(25)] = inst_41340__$1);

return statearr_41446;
})();
if(cljs.core.truth_(inst_41341)){
var statearr_41447_41527 = state_41418__$1;
(statearr_41447_41527[(1)] = (23));

} else {
var statearr_41448_41528 = state_41418__$1;
(statearr_41448_41528[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (36))){
var state_41418__$1 = state_41418;
var statearr_41449_41529 = state_41418__$1;
(statearr_41449_41529[(2)] = false);

(statearr_41449_41529[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (41))){
var inst_41393 = (state_41418[(20)]);
var inst_41397 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41398 = cljs.core.map.call(null,inst_41397,inst_41393);
var inst_41399 = cljs.core.pr_str.call(null,inst_41398);
var inst_41400 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41399)].join('');
var inst_41401 = figwheel.client.utils.log.call(null,inst_41400);
var state_41418__$1 = state_41418;
var statearr_41450_41530 = state_41418__$1;
(statearr_41450_41530[(2)] = inst_41401);

(statearr_41450_41530[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (43))){
var inst_41394 = (state_41418[(21)]);
var inst_41404 = (state_41418[(2)]);
var inst_41405 = cljs.core.not_empty.call(null,inst_41394);
var state_41418__$1 = (function (){var statearr_41451 = state_41418;
(statearr_41451[(27)] = inst_41404);

return statearr_41451;
})();
if(cljs.core.truth_(inst_41405)){
var statearr_41452_41531 = state_41418__$1;
(statearr_41452_41531[(1)] = (44));

} else {
var statearr_41453_41532 = state_41418__$1;
(statearr_41453_41532[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (29))){
var inst_41336 = (state_41418[(23)]);
var inst_41332 = (state_41418[(19)]);
var inst_41335 = (state_41418[(24)]);
var inst_41338 = (state_41418[(26)]);
var inst_41372 = (state_41418[(16)]);
var inst_41340 = (state_41418[(25)]);
var inst_41368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41371 = (function (){var all_files = inst_41332;
var res_SINGLEQUOTE_ = inst_41335;
var res = inst_41336;
var files_not_loaded = inst_41338;
var dependencies_that_loaded = inst_41340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41372,inst_41340,inst_41368,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41370){
var map__41454 = p__41370;
var map__41454__$1 = ((((!((map__41454 == null)))?((((map__41454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41454):map__41454);
var namespace = cljs.core.get.call(null,map__41454__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41372,inst_41340,inst_41368,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41372__$1 = cljs.core.group_by.call(null,inst_41371,inst_41338);
var inst_41374 = (inst_41372__$1 == null);
var inst_41375 = cljs.core.not.call(null,inst_41374);
var state_41418__$1 = (function (){var statearr_41456 = state_41418;
(statearr_41456[(28)] = inst_41368);

(statearr_41456[(16)] = inst_41372__$1);

return statearr_41456;
})();
if(inst_41375){
var statearr_41457_41533 = state_41418__$1;
(statearr_41457_41533[(1)] = (32));

} else {
var statearr_41458_41534 = state_41418__$1;
(statearr_41458_41534[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (44))){
var inst_41394 = (state_41418[(21)]);
var inst_41407 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41394);
var inst_41408 = cljs.core.pr_str.call(null,inst_41407);
var inst_41409 = [cljs.core.str("not required: "),cljs.core.str(inst_41408)].join('');
var inst_41410 = figwheel.client.utils.log.call(null,inst_41409);
var state_41418__$1 = state_41418;
var statearr_41459_41535 = state_41418__$1;
(statearr_41459_41535[(2)] = inst_41410);

(statearr_41459_41535[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (6))){
var inst_41313 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41460_41536 = state_41418__$1;
(statearr_41460_41536[(2)] = inst_41313);

(statearr_41460_41536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (28))){
var inst_41338 = (state_41418[(26)]);
var inst_41365 = (state_41418[(2)]);
var inst_41366 = cljs.core.not_empty.call(null,inst_41338);
var state_41418__$1 = (function (){var statearr_41461 = state_41418;
(statearr_41461[(29)] = inst_41365);

return statearr_41461;
})();
if(cljs.core.truth_(inst_41366)){
var statearr_41462_41537 = state_41418__$1;
(statearr_41462_41537[(1)] = (29));

} else {
var statearr_41463_41538 = state_41418__$1;
(statearr_41463_41538[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (25))){
var inst_41336 = (state_41418[(23)]);
var inst_41352 = (state_41418[(2)]);
var inst_41353 = cljs.core.not_empty.call(null,inst_41336);
var state_41418__$1 = (function (){var statearr_41464 = state_41418;
(statearr_41464[(30)] = inst_41352);

return statearr_41464;
})();
if(cljs.core.truth_(inst_41353)){
var statearr_41465_41539 = state_41418__$1;
(statearr_41465_41539[(1)] = (26));

} else {
var statearr_41466_41540 = state_41418__$1;
(statearr_41466_41540[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (34))){
var inst_41387 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41387)){
var statearr_41467_41541 = state_41418__$1;
(statearr_41467_41541[(1)] = (38));

} else {
var statearr_41468_41542 = state_41418__$1;
(statearr_41468_41542[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (17))){
var state_41418__$1 = state_41418;
var statearr_41469_41543 = state_41418__$1;
(statearr_41469_41543[(2)] = recompile_dependents);

(statearr_41469_41543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (3))){
var state_41418__$1 = state_41418;
var statearr_41470_41544 = state_41418__$1;
(statearr_41470_41544[(2)] = null);

(statearr_41470_41544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (12))){
var inst_41309 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41471_41545 = state_41418__$1;
(statearr_41471_41545[(2)] = inst_41309);

(statearr_41471_41545[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (2))){
var inst_41271 = (state_41418[(13)]);
var inst_41278 = cljs.core.seq.call(null,inst_41271);
var inst_41279 = inst_41278;
var inst_41280 = null;
var inst_41281 = (0);
var inst_41282 = (0);
var state_41418__$1 = (function (){var statearr_41472 = state_41418;
(statearr_41472[(7)] = inst_41282);

(statearr_41472[(8)] = inst_41281);

(statearr_41472[(9)] = inst_41279);

(statearr_41472[(10)] = inst_41280);

return statearr_41472;
})();
var statearr_41473_41546 = state_41418__$1;
(statearr_41473_41546[(2)] = null);

(statearr_41473_41546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (23))){
var inst_41336 = (state_41418[(23)]);
var inst_41332 = (state_41418[(19)]);
var inst_41335 = (state_41418[(24)]);
var inst_41338 = (state_41418[(26)]);
var inst_41340 = (state_41418[(25)]);
var inst_41343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41345 = (function (){var all_files = inst_41332;
var res_SINGLEQUOTE_ = inst_41335;
var res = inst_41336;
var files_not_loaded = inst_41338;
var dependencies_that_loaded = inst_41340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41340,inst_41343,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41344){
var map__41474 = p__41344;
var map__41474__$1 = ((((!((map__41474 == null)))?((((map__41474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41474):map__41474);
var request_url = cljs.core.get.call(null,map__41474__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41340,inst_41343,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41346 = cljs.core.reverse.call(null,inst_41340);
var inst_41347 = cljs.core.map.call(null,inst_41345,inst_41346);
var inst_41348 = cljs.core.pr_str.call(null,inst_41347);
var inst_41349 = figwheel.client.utils.log.call(null,inst_41348);
var state_41418__$1 = (function (){var statearr_41476 = state_41418;
(statearr_41476[(31)] = inst_41343);

return statearr_41476;
})();
var statearr_41477_41547 = state_41418__$1;
(statearr_41477_41547[(2)] = inst_41349);

(statearr_41477_41547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (35))){
var state_41418__$1 = state_41418;
var statearr_41478_41548 = state_41418__$1;
(statearr_41478_41548[(2)] = true);

(statearr_41478_41548[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (19))){
var inst_41322 = (state_41418[(12)]);
var inst_41328 = figwheel.client.file_reloading.expand_files.call(null,inst_41322);
var state_41418__$1 = state_41418;
var statearr_41479_41549 = state_41418__$1;
(statearr_41479_41549[(2)] = inst_41328);

(statearr_41479_41549[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (11))){
var state_41418__$1 = state_41418;
var statearr_41480_41550 = state_41418__$1;
(statearr_41480_41550[(2)] = null);

(statearr_41480_41550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (9))){
var inst_41311 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41481_41551 = state_41418__$1;
(statearr_41481_41551[(2)] = inst_41311);

(statearr_41481_41551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (5))){
var inst_41282 = (state_41418[(7)]);
var inst_41281 = (state_41418[(8)]);
var inst_41284 = (inst_41282 < inst_41281);
var inst_41285 = inst_41284;
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41285)){
var statearr_41482_41552 = state_41418__$1;
(statearr_41482_41552[(1)] = (7));

} else {
var statearr_41483_41553 = state_41418__$1;
(statearr_41483_41553[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (14))){
var inst_41292 = (state_41418[(22)]);
var inst_41301 = cljs.core.first.call(null,inst_41292);
var inst_41302 = figwheel.client.file_reloading.eval_body.call(null,inst_41301,opts);
var inst_41303 = cljs.core.next.call(null,inst_41292);
var inst_41279 = inst_41303;
var inst_41280 = null;
var inst_41281 = (0);
var inst_41282 = (0);
var state_41418__$1 = (function (){var statearr_41484 = state_41418;
(statearr_41484[(7)] = inst_41282);

(statearr_41484[(8)] = inst_41281);

(statearr_41484[(9)] = inst_41279);

(statearr_41484[(32)] = inst_41302);

(statearr_41484[(10)] = inst_41280);

return statearr_41484;
})();
var statearr_41485_41554 = state_41418__$1;
(statearr_41485_41554[(2)] = null);

(statearr_41485_41554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (45))){
var state_41418__$1 = state_41418;
var statearr_41486_41555 = state_41418__$1;
(statearr_41486_41555[(2)] = null);

(statearr_41486_41555[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (26))){
var inst_41336 = (state_41418[(23)]);
var inst_41332 = (state_41418[(19)]);
var inst_41335 = (state_41418[(24)]);
var inst_41338 = (state_41418[(26)]);
var inst_41340 = (state_41418[(25)]);
var inst_41355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41357 = (function (){var all_files = inst_41332;
var res_SINGLEQUOTE_ = inst_41335;
var res = inst_41336;
var files_not_loaded = inst_41338;
var dependencies_that_loaded = inst_41340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41340,inst_41355,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41356){
var map__41487 = p__41356;
var map__41487__$1 = ((((!((map__41487 == null)))?((((map__41487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41487):map__41487);
var namespace = cljs.core.get.call(null,map__41487__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41340,inst_41355,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41358 = cljs.core.map.call(null,inst_41357,inst_41336);
var inst_41359 = cljs.core.pr_str.call(null,inst_41358);
var inst_41360 = figwheel.client.utils.log.call(null,inst_41359);
var inst_41361 = (function (){var all_files = inst_41332;
var res_SINGLEQUOTE_ = inst_41335;
var res = inst_41336;
var files_not_loaded = inst_41338;
var dependencies_that_loaded = inst_41340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41340,inst_41355,inst_41357,inst_41358,inst_41359,inst_41360,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41336,inst_41332,inst_41335,inst_41338,inst_41340,inst_41355,inst_41357,inst_41358,inst_41359,inst_41360,state_val_41419,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41362 = setTimeout(inst_41361,(10));
var state_41418__$1 = (function (){var statearr_41489 = state_41418;
(statearr_41489[(33)] = inst_41355);

(statearr_41489[(34)] = inst_41360);

return statearr_41489;
})();
var statearr_41490_41556 = state_41418__$1;
(statearr_41490_41556[(2)] = inst_41362);

(statearr_41490_41556[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (16))){
var state_41418__$1 = state_41418;
var statearr_41491_41557 = state_41418__$1;
(statearr_41491_41557[(2)] = reload_dependents);

(statearr_41491_41557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (38))){
var inst_41372 = (state_41418[(16)]);
var inst_41389 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41372);
var state_41418__$1 = state_41418;
var statearr_41492_41558 = state_41418__$1;
(statearr_41492_41558[(2)] = inst_41389);

(statearr_41492_41558[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (30))){
var state_41418__$1 = state_41418;
var statearr_41493_41559 = state_41418__$1;
(statearr_41493_41559[(2)] = null);

(statearr_41493_41559[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (10))){
var inst_41292 = (state_41418[(22)]);
var inst_41294 = cljs.core.chunked_seq_QMARK_.call(null,inst_41292);
var state_41418__$1 = state_41418;
if(inst_41294){
var statearr_41494_41560 = state_41418__$1;
(statearr_41494_41560[(1)] = (13));

} else {
var statearr_41495_41561 = state_41418__$1;
(statearr_41495_41561[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (18))){
var inst_41326 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41326)){
var statearr_41496_41562 = state_41418__$1;
(statearr_41496_41562[(1)] = (19));

} else {
var statearr_41497_41563 = state_41418__$1;
(statearr_41497_41563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (42))){
var state_41418__$1 = state_41418;
var statearr_41498_41564 = state_41418__$1;
(statearr_41498_41564[(2)] = null);

(statearr_41498_41564[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (37))){
var inst_41384 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41499_41565 = state_41418__$1;
(statearr_41499_41565[(2)] = inst_41384);

(statearr_41499_41565[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (8))){
var inst_41279 = (state_41418[(9)]);
var inst_41292 = (state_41418[(22)]);
var inst_41292__$1 = cljs.core.seq.call(null,inst_41279);
var state_41418__$1 = (function (){var statearr_41500 = state_41418;
(statearr_41500[(22)] = inst_41292__$1);

return statearr_41500;
})();
if(inst_41292__$1){
var statearr_41501_41566 = state_41418__$1;
(statearr_41501_41566[(1)] = (10));

} else {
var statearr_41502_41567 = state_41418__$1;
(statearr_41502_41567[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37569__auto__,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____0 = (function (){
var statearr_41506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41506[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__);

(statearr_41506[(1)] = (1));

return statearr_41506;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____1 = (function (state_41418){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_41418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e41507){if((e41507 instanceof Object)){
var ex__37573__auto__ = e41507;
var statearr_41508_41568 = state_41418;
(statearr_41508_41568[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41569 = state_41418;
state_41418 = G__41569;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__ = function(state_41418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____1.call(this,state_41418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37683__auto__ = (function (){var statearr_41509 = f__37682__auto__.call(null);
(statearr_41509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_41509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__,map__41264,map__41264__$1,opts,before_jsload,on_jsload,reload_dependents,map__41265,map__41265__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37681__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41572,link){
var map__41575 = p__41572;
var map__41575__$1 = ((((!((map__41575 == null)))?((((map__41575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41575):map__41575);
var file = cljs.core.get.call(null,map__41575__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__41575,map__41575__$1,file){
return (function (p1__41570_SHARP_,p2__41571_SHARP_){
if(cljs.core._EQ_.call(null,p1__41570_SHARP_,p2__41571_SHARP_)){
return p1__41570_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__41575,map__41575__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41581){
var map__41582 = p__41581;
var map__41582__$1 = ((((!((map__41582 == null)))?((((map__41582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41582):map__41582);
var match_length = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41582__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41577_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41577_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args41584 = [];
var len__36572__auto___41587 = arguments.length;
var i__36573__auto___41588 = (0);
while(true){
if((i__36573__auto___41588 < len__36572__auto___41587)){
args41584.push((arguments[i__36573__auto___41588]));

var G__41589 = (i__36573__auto___41588 + (1));
i__36573__auto___41588 = G__41589;
continue;
} else {
}
break;
}

var G__41586 = args41584.length;
switch (G__41586) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41584.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41591_SHARP_,p2__41592_SHARP_){
return cljs.core.assoc.call(null,p1__41591_SHARP_,cljs.core.get.call(null,p2__41592_SHARP_,key),p2__41592_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41593){
var map__41596 = p__41593;
var map__41596__$1 = ((((!((map__41596 == null)))?((((map__41596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41596):map__41596);
var f_data = map__41596__$1;
var file = cljs.core.get.call(null,map__41596__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41598,files_msg){
var map__41605 = p__41598;
var map__41605__$1 = ((((!((map__41605 == null)))?((((map__41605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41605):map__41605);
var opts = map__41605__$1;
var on_cssload = cljs.core.get.call(null,map__41605__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41607_41611 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41608_41612 = null;
var count__41609_41613 = (0);
var i__41610_41614 = (0);
while(true){
if((i__41610_41614 < count__41609_41613)){
var f_41615 = cljs.core._nth.call(null,chunk__41608_41612,i__41610_41614);
figwheel.client.file_reloading.reload_css_file.call(null,f_41615);

var G__41616 = seq__41607_41611;
var G__41617 = chunk__41608_41612;
var G__41618 = count__41609_41613;
var G__41619 = (i__41610_41614 + (1));
seq__41607_41611 = G__41616;
chunk__41608_41612 = G__41617;
count__41609_41613 = G__41618;
i__41610_41614 = G__41619;
continue;
} else {
var temp__4425__auto___41620 = cljs.core.seq.call(null,seq__41607_41611);
if(temp__4425__auto___41620){
var seq__41607_41621__$1 = temp__4425__auto___41620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41607_41621__$1)){
var c__36317__auto___41622 = cljs.core.chunk_first.call(null,seq__41607_41621__$1);
var G__41623 = cljs.core.chunk_rest.call(null,seq__41607_41621__$1);
var G__41624 = c__36317__auto___41622;
var G__41625 = cljs.core.count.call(null,c__36317__auto___41622);
var G__41626 = (0);
seq__41607_41611 = G__41623;
chunk__41608_41612 = G__41624;
count__41609_41613 = G__41625;
i__41610_41614 = G__41626;
continue;
} else {
var f_41627 = cljs.core.first.call(null,seq__41607_41621__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41627);

var G__41628 = cljs.core.next.call(null,seq__41607_41621__$1);
var G__41629 = null;
var G__41630 = (0);
var G__41631 = (0);
seq__41607_41611 = G__41628;
chunk__41608_41612 = G__41629;
count__41609_41613 = G__41630;
i__41610_41614 = G__41631;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41605,map__41605__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41605,map__41605__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456361400527