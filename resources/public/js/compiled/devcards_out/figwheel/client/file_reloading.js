// Compiled by ClojureScript 1.7.228 {}
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
var or__37443__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__37443__auto__){
return or__37443__auto__;
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
var or__37443__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52540_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52540_SHARP_));
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
var seq__52545 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52546 = null;
var count__52547 = (0);
var i__52548 = (0);
while(true){
if((i__52548 < count__52547)){
var n = cljs.core._nth.call(null,chunk__52546,i__52548);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52549 = seq__52545;
var G__52550 = chunk__52546;
var G__52551 = count__52547;
var G__52552 = (i__52548 + (1));
seq__52545 = G__52549;
chunk__52546 = G__52550;
count__52547 = G__52551;
i__52548 = G__52552;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52545);
if(temp__4657__auto__){
var seq__52545__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52545__$1)){
var c__38246__auto__ = cljs.core.chunk_first.call(null,seq__52545__$1);
var G__52553 = cljs.core.chunk_rest.call(null,seq__52545__$1);
var G__52554 = c__38246__auto__;
var G__52555 = cljs.core.count.call(null,c__38246__auto__);
var G__52556 = (0);
seq__52545 = G__52553;
chunk__52546 = G__52554;
count__52547 = G__52555;
i__52548 = G__52556;
continue;
} else {
var n = cljs.core.first.call(null,seq__52545__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52557 = cljs.core.next.call(null,seq__52545__$1);
var G__52558 = null;
var G__52559 = (0);
var G__52560 = (0);
seq__52545 = G__52557;
chunk__52546 = G__52558;
count__52547 = G__52559;
i__52548 = G__52560;
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

var seq__52599_52606 = cljs.core.seq.call(null,deps);
var chunk__52600_52607 = null;
var count__52601_52608 = (0);
var i__52602_52609 = (0);
while(true){
if((i__52602_52609 < count__52601_52608)){
var dep_52610 = cljs.core._nth.call(null,chunk__52600_52607,i__52602_52609);
topo_sort_helper_STAR_.call(null,dep_52610,(depth + (1)),state);

var G__52611 = seq__52599_52606;
var G__52612 = chunk__52600_52607;
var G__52613 = count__52601_52608;
var G__52614 = (i__52602_52609 + (1));
seq__52599_52606 = G__52611;
chunk__52600_52607 = G__52612;
count__52601_52608 = G__52613;
i__52602_52609 = G__52614;
continue;
} else {
var temp__4657__auto___52615 = cljs.core.seq.call(null,seq__52599_52606);
if(temp__4657__auto___52615){
var seq__52599_52616__$1 = temp__4657__auto___52615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52599_52616__$1)){
var c__38246__auto___52617 = cljs.core.chunk_first.call(null,seq__52599_52616__$1);
var G__52618 = cljs.core.chunk_rest.call(null,seq__52599_52616__$1);
var G__52619 = c__38246__auto___52617;
var G__52620 = cljs.core.count.call(null,c__38246__auto___52617);
var G__52621 = (0);
seq__52599_52606 = G__52618;
chunk__52600_52607 = G__52619;
count__52601_52608 = G__52620;
i__52602_52609 = G__52621;
continue;
} else {
var dep_52622 = cljs.core.first.call(null,seq__52599_52616__$1);
topo_sort_helper_STAR_.call(null,dep_52622,(depth + (1)),state);

var G__52623 = cljs.core.next.call(null,seq__52599_52616__$1);
var G__52624 = null;
var G__52625 = (0);
var G__52626 = (0);
seq__52599_52606 = G__52623;
chunk__52600_52607 = G__52624;
count__52601_52608 = G__52625;
i__52602_52609 = G__52626;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52603){
var vec__52605 = p__52603;
var x = cljs.core.nth.call(null,vec__52605,(0),null);
var xs = cljs.core.nthnext.call(null,vec__52605,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52605,x,xs,get_deps__$1){
return (function (p1__52561_SHARP_){
return clojure.set.difference.call(null,p1__52561_SHARP_,x);
});})(vec__52605,x,xs,get_deps__$1))
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
var seq__52639 = cljs.core.seq.call(null,provides);
var chunk__52640 = null;
var count__52641 = (0);
var i__52642 = (0);
while(true){
if((i__52642 < count__52641)){
var prov = cljs.core._nth.call(null,chunk__52640,i__52642);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52643_52651 = cljs.core.seq.call(null,requires);
var chunk__52644_52652 = null;
var count__52645_52653 = (0);
var i__52646_52654 = (0);
while(true){
if((i__52646_52654 < count__52645_52653)){
var req_52655 = cljs.core._nth.call(null,chunk__52644_52652,i__52646_52654);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52655,prov);

var G__52656 = seq__52643_52651;
var G__52657 = chunk__52644_52652;
var G__52658 = count__52645_52653;
var G__52659 = (i__52646_52654 + (1));
seq__52643_52651 = G__52656;
chunk__52644_52652 = G__52657;
count__52645_52653 = G__52658;
i__52646_52654 = G__52659;
continue;
} else {
var temp__4657__auto___52660 = cljs.core.seq.call(null,seq__52643_52651);
if(temp__4657__auto___52660){
var seq__52643_52661__$1 = temp__4657__auto___52660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52643_52661__$1)){
var c__38246__auto___52662 = cljs.core.chunk_first.call(null,seq__52643_52661__$1);
var G__52663 = cljs.core.chunk_rest.call(null,seq__52643_52661__$1);
var G__52664 = c__38246__auto___52662;
var G__52665 = cljs.core.count.call(null,c__38246__auto___52662);
var G__52666 = (0);
seq__52643_52651 = G__52663;
chunk__52644_52652 = G__52664;
count__52645_52653 = G__52665;
i__52646_52654 = G__52666;
continue;
} else {
var req_52667 = cljs.core.first.call(null,seq__52643_52661__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52667,prov);

var G__52668 = cljs.core.next.call(null,seq__52643_52661__$1);
var G__52669 = null;
var G__52670 = (0);
var G__52671 = (0);
seq__52643_52651 = G__52668;
chunk__52644_52652 = G__52669;
count__52645_52653 = G__52670;
i__52646_52654 = G__52671;
continue;
}
} else {
}
}
break;
}

var G__52672 = seq__52639;
var G__52673 = chunk__52640;
var G__52674 = count__52641;
var G__52675 = (i__52642 + (1));
seq__52639 = G__52672;
chunk__52640 = G__52673;
count__52641 = G__52674;
i__52642 = G__52675;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52639);
if(temp__4657__auto__){
var seq__52639__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52639__$1)){
var c__38246__auto__ = cljs.core.chunk_first.call(null,seq__52639__$1);
var G__52676 = cljs.core.chunk_rest.call(null,seq__52639__$1);
var G__52677 = c__38246__auto__;
var G__52678 = cljs.core.count.call(null,c__38246__auto__);
var G__52679 = (0);
seq__52639 = G__52676;
chunk__52640 = G__52677;
count__52641 = G__52678;
i__52642 = G__52679;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52639__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52647_52680 = cljs.core.seq.call(null,requires);
var chunk__52648_52681 = null;
var count__52649_52682 = (0);
var i__52650_52683 = (0);
while(true){
if((i__52650_52683 < count__52649_52682)){
var req_52684 = cljs.core._nth.call(null,chunk__52648_52681,i__52650_52683);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52684,prov);

var G__52685 = seq__52647_52680;
var G__52686 = chunk__52648_52681;
var G__52687 = count__52649_52682;
var G__52688 = (i__52650_52683 + (1));
seq__52647_52680 = G__52685;
chunk__52648_52681 = G__52686;
count__52649_52682 = G__52687;
i__52650_52683 = G__52688;
continue;
} else {
var temp__4657__auto___52689__$1 = cljs.core.seq.call(null,seq__52647_52680);
if(temp__4657__auto___52689__$1){
var seq__52647_52690__$1 = temp__4657__auto___52689__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52647_52690__$1)){
var c__38246__auto___52691 = cljs.core.chunk_first.call(null,seq__52647_52690__$1);
var G__52692 = cljs.core.chunk_rest.call(null,seq__52647_52690__$1);
var G__52693 = c__38246__auto___52691;
var G__52694 = cljs.core.count.call(null,c__38246__auto___52691);
var G__52695 = (0);
seq__52647_52680 = G__52692;
chunk__52648_52681 = G__52693;
count__52649_52682 = G__52694;
i__52650_52683 = G__52695;
continue;
} else {
var req_52696 = cljs.core.first.call(null,seq__52647_52690__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52696,prov);

var G__52697 = cljs.core.next.call(null,seq__52647_52690__$1);
var G__52698 = null;
var G__52699 = (0);
var G__52700 = (0);
seq__52647_52680 = G__52697;
chunk__52648_52681 = G__52698;
count__52649_52682 = G__52699;
i__52650_52683 = G__52700;
continue;
}
} else {
}
}
break;
}

var G__52701 = cljs.core.next.call(null,seq__52639__$1);
var G__52702 = null;
var G__52703 = (0);
var G__52704 = (0);
seq__52639 = G__52701;
chunk__52640 = G__52702;
count__52641 = G__52703;
i__52642 = G__52704;
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
var seq__52709_52713 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52710_52714 = null;
var count__52711_52715 = (0);
var i__52712_52716 = (0);
while(true){
if((i__52712_52716 < count__52711_52715)){
var ns_52717 = cljs.core._nth.call(null,chunk__52710_52714,i__52712_52716);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52717);

var G__52718 = seq__52709_52713;
var G__52719 = chunk__52710_52714;
var G__52720 = count__52711_52715;
var G__52721 = (i__52712_52716 + (1));
seq__52709_52713 = G__52718;
chunk__52710_52714 = G__52719;
count__52711_52715 = G__52720;
i__52712_52716 = G__52721;
continue;
} else {
var temp__4657__auto___52722 = cljs.core.seq.call(null,seq__52709_52713);
if(temp__4657__auto___52722){
var seq__52709_52723__$1 = temp__4657__auto___52722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52709_52723__$1)){
var c__38246__auto___52724 = cljs.core.chunk_first.call(null,seq__52709_52723__$1);
var G__52725 = cljs.core.chunk_rest.call(null,seq__52709_52723__$1);
var G__52726 = c__38246__auto___52724;
var G__52727 = cljs.core.count.call(null,c__38246__auto___52724);
var G__52728 = (0);
seq__52709_52713 = G__52725;
chunk__52710_52714 = G__52726;
count__52711_52715 = G__52727;
i__52712_52716 = G__52728;
continue;
} else {
var ns_52729 = cljs.core.first.call(null,seq__52709_52723__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52729);

var G__52730 = cljs.core.next.call(null,seq__52709_52723__$1);
var G__52731 = null;
var G__52732 = (0);
var G__52733 = (0);
seq__52709_52713 = G__52730;
chunk__52710_52714 = G__52731;
count__52711_52715 = G__52732;
i__52712_52716 = G__52733;
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
goog.require_figwheel_backup_ = (function (){var or__37443__auto__ = goog.require__;
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
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
var G__52734__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52735__i = 0, G__52735__a = new Array(arguments.length -  0);
while (G__52735__i < G__52735__a.length) {G__52735__a[G__52735__i] = arguments[G__52735__i + 0]; ++G__52735__i;}
  args = new cljs.core.IndexedSeq(G__52735__a,0);
} 
return G__52734__delegate.call(this,args);};
G__52734.cljs$lang$maxFixedArity = 0;
G__52734.cljs$lang$applyTo = (function (arglist__52736){
var args = cljs.core.seq(arglist__52736);
return G__52734__delegate(args);
});
G__52734.cljs$core$IFn$_invoke$arity$variadic = G__52734__delegate;
return G__52734;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52738 = cljs.core._EQ_;
var expr__52739 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52738.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52739))){
var path_parts = ((function (pred__52738,expr__52739){
return (function (p1__52737_SHARP_){
return clojure.string.split.call(null,p1__52737_SHARP_,/[\/\\]/);
});})(pred__52738,expr__52739))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__52738,expr__52739){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e52741){if((e52741 instanceof Error)){
var e = e52741;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52741;

}
}})());
});
;})(path_parts,sep,root,pred__52738,expr__52739))
} else {
if(cljs.core.truth_(pred__52738.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52739))){
return ((function (pred__52738,expr__52739){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__52738,expr__52739){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__52738,expr__52739))
);

return deferred.addErrback(((function (deferred,pred__52738,expr__52739){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__52738,expr__52739))
);
});
;})(pred__52738,expr__52739))
} else {
return ((function (pred__52738,expr__52739){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52738,expr__52739))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52742,callback){
var map__52745 = p__52742;
var map__52745__$1 = ((((!((map__52745 == null)))?((((map__52745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52745):map__52745);
var file_msg = map__52745__$1;
var request_url = cljs.core.get.call(null,map__52745__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__52745,map__52745__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52745,map__52745__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__){
return (function (state_52769){
var state_val_52770 = (state_52769[(1)]);
if((state_val_52770 === (7))){
var inst_52765 = (state_52769[(2)]);
var state_52769__$1 = state_52769;
var statearr_52771_52791 = state_52769__$1;
(statearr_52771_52791[(2)] = inst_52765);

(statearr_52771_52791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (1))){
var state_52769__$1 = state_52769;
var statearr_52772_52792 = state_52769__$1;
(statearr_52772_52792[(2)] = null);

(statearr_52772_52792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (4))){
var inst_52749 = (state_52769[(7)]);
var inst_52749__$1 = (state_52769[(2)]);
var state_52769__$1 = (function (){var statearr_52773 = state_52769;
(statearr_52773[(7)] = inst_52749__$1);

return statearr_52773;
})();
if(cljs.core.truth_(inst_52749__$1)){
var statearr_52774_52793 = state_52769__$1;
(statearr_52774_52793[(1)] = (5));

} else {
var statearr_52775_52794 = state_52769__$1;
(statearr_52775_52794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (6))){
var state_52769__$1 = state_52769;
var statearr_52776_52795 = state_52769__$1;
(statearr_52776_52795[(2)] = null);

(statearr_52776_52795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (3))){
var inst_52767 = (state_52769[(2)]);
var state_52769__$1 = state_52769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52769__$1,inst_52767);
} else {
if((state_val_52770 === (2))){
var state_52769__$1 = state_52769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52769__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52770 === (11))){
var inst_52761 = (state_52769[(2)]);
var state_52769__$1 = (function (){var statearr_52777 = state_52769;
(statearr_52777[(8)] = inst_52761);

return statearr_52777;
})();
var statearr_52778_52796 = state_52769__$1;
(statearr_52778_52796[(2)] = null);

(statearr_52778_52796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (9))){
var inst_52753 = (state_52769[(9)]);
var inst_52755 = (state_52769[(10)]);
var inst_52757 = inst_52755.call(null,inst_52753);
var state_52769__$1 = state_52769;
var statearr_52779_52797 = state_52769__$1;
(statearr_52779_52797[(2)] = inst_52757);

(statearr_52779_52797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (5))){
var inst_52749 = (state_52769[(7)]);
var inst_52751 = figwheel.client.file_reloading.blocking_load.call(null,inst_52749);
var state_52769__$1 = state_52769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52769__$1,(8),inst_52751);
} else {
if((state_val_52770 === (10))){
var inst_52753 = (state_52769[(9)]);
var inst_52759 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52753);
var state_52769__$1 = state_52769;
var statearr_52780_52798 = state_52769__$1;
(statearr_52780_52798[(2)] = inst_52759);

(statearr_52780_52798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52770 === (8))){
var inst_52749 = (state_52769[(7)]);
var inst_52755 = (state_52769[(10)]);
var inst_52753 = (state_52769[(2)]);
var inst_52754 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52755__$1 = cljs.core.get.call(null,inst_52754,inst_52749);
var state_52769__$1 = (function (){var statearr_52781 = state_52769;
(statearr_52781[(9)] = inst_52753);

(statearr_52781[(10)] = inst_52755__$1);

return statearr_52781;
})();
if(cljs.core.truth_(inst_52755__$1)){
var statearr_52782_52799 = state_52769__$1;
(statearr_52782_52799[(1)] = (9));

} else {
var statearr_52783_52800 = state_52769__$1;
(statearr_52783_52800[(1)] = (10));

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
});})(c__41374__auto__))
;
return ((function (switch__41353__auto__,c__41374__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__41354__auto__ = null;
var figwheel$client$file_reloading$state_machine__41354__auto____0 = (function (){
var statearr_52787 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52787[(0)] = figwheel$client$file_reloading$state_machine__41354__auto__);

(statearr_52787[(1)] = (1));

return statearr_52787;
});
var figwheel$client$file_reloading$state_machine__41354__auto____1 = (function (state_52769){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_52769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e52788){if((e52788 instanceof Object)){
var ex__41357__auto__ = e52788;
var statearr_52789_52801 = state_52769;
(statearr_52789_52801[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52802 = state_52769;
state_52769 = G__52802;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__41354__auto__ = function(state_52769){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__41354__auto____1.call(this,state_52769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__41354__auto____0;
figwheel$client$file_reloading$state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__41354__auto____1;
return figwheel$client$file_reloading$state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__))
})();
var state__41376__auto__ = (function (){var statearr_52790 = f__41375__auto__.call(null);
(statearr_52790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_52790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__))
);

return c__41374__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52803,callback){
var map__52806 = p__52803;
var map__52806__$1 = ((((!((map__52806 == null)))?((((map__52806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52806):map__52806);
var file_msg = map__52806__$1;
var namespace = cljs.core.get.call(null,map__52806__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52806,map__52806__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52806,map__52806__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52808){
var map__52811 = p__52808;
var map__52811__$1 = ((((!((map__52811 == null)))?((((map__52811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52811):map__52811);
var file_msg = map__52811__$1;
var namespace = cljs.core.get.call(null,map__52811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__37431__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__37431__auto__){
var or__37443__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37443__auto__)){
return or__37443__auto__;
} else {
var or__37443__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37443__auto____$1)){
return or__37443__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__37431__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52813,callback){
var map__52816 = p__52813;
var map__52816__$1 = ((((!((map__52816 == null)))?((((map__52816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52816):map__52816);
var file_msg = map__52816__$1;
var request_url = cljs.core.get.call(null,map__52816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__41374__auto___52904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto___52904,out){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto___52904,out){
return (function (state_52886){
var state_val_52887 = (state_52886[(1)]);
if((state_val_52887 === (1))){
var inst_52864 = cljs.core.nth.call(null,files,(0),null);
var inst_52865 = cljs.core.nthnext.call(null,files,(1));
var inst_52866 = files;
var state_52886__$1 = (function (){var statearr_52888 = state_52886;
(statearr_52888[(7)] = inst_52865);

(statearr_52888[(8)] = inst_52866);

(statearr_52888[(9)] = inst_52864);

return statearr_52888;
})();
var statearr_52889_52905 = state_52886__$1;
(statearr_52889_52905[(2)] = null);

(statearr_52889_52905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52887 === (2))){
var inst_52866 = (state_52886[(8)]);
var inst_52869 = (state_52886[(10)]);
var inst_52869__$1 = cljs.core.nth.call(null,inst_52866,(0),null);
var inst_52870 = cljs.core.nthnext.call(null,inst_52866,(1));
var inst_52871 = (inst_52869__$1 == null);
var inst_52872 = cljs.core.not.call(null,inst_52871);
var state_52886__$1 = (function (){var statearr_52890 = state_52886;
(statearr_52890[(11)] = inst_52870);

(statearr_52890[(10)] = inst_52869__$1);

return statearr_52890;
})();
if(inst_52872){
var statearr_52891_52906 = state_52886__$1;
(statearr_52891_52906[(1)] = (4));

} else {
var statearr_52892_52907 = state_52886__$1;
(statearr_52892_52907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52887 === (3))){
var inst_52884 = (state_52886[(2)]);
var state_52886__$1 = state_52886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52886__$1,inst_52884);
} else {
if((state_val_52887 === (4))){
var inst_52869 = (state_52886[(10)]);
var inst_52874 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52869);
var state_52886__$1 = state_52886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52886__$1,(7),inst_52874);
} else {
if((state_val_52887 === (5))){
var inst_52880 = cljs.core.async.close_BANG_.call(null,out);
var state_52886__$1 = state_52886;
var statearr_52893_52908 = state_52886__$1;
(statearr_52893_52908[(2)] = inst_52880);

(statearr_52893_52908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52887 === (6))){
var inst_52882 = (state_52886[(2)]);
var state_52886__$1 = state_52886;
var statearr_52894_52909 = state_52886__$1;
(statearr_52894_52909[(2)] = inst_52882);

(statearr_52894_52909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52887 === (7))){
var inst_52870 = (state_52886[(11)]);
var inst_52876 = (state_52886[(2)]);
var inst_52877 = cljs.core.async.put_BANG_.call(null,out,inst_52876);
var inst_52866 = inst_52870;
var state_52886__$1 = (function (){var statearr_52895 = state_52886;
(statearr_52895[(8)] = inst_52866);

(statearr_52895[(12)] = inst_52877);

return statearr_52895;
})();
var statearr_52896_52910 = state_52886__$1;
(statearr_52896_52910[(2)] = null);

(statearr_52896_52910[(1)] = (2));


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
});})(c__41374__auto___52904,out))
;
return ((function (switch__41353__auto__,c__41374__auto___52904,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto____0 = (function (){
var statearr_52900 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52900[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto__);

(statearr_52900[(1)] = (1));

return statearr_52900;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto____1 = (function (state_52886){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_52886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e52901){if((e52901 instanceof Object)){
var ex__41357__auto__ = e52901;
var statearr_52902_52911 = state_52886;
(statearr_52902_52911[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52912 = state_52886;
state_52886 = G__52912;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto__ = function(state_52886){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto____1.call(this,state_52886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto___52904,out))
})();
var state__41376__auto__ = (function (){var statearr_52903 = f__41375__auto__.call(null);
(statearr_52903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto___52904);

return statearr_52903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto___52904,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52913,opts){
var map__52917 = p__52913;
var map__52917__$1 = ((((!((map__52917 == null)))?((((map__52917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52917):map__52917);
var eval_body__$1 = cljs.core.get.call(null,map__52917__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__37431__auto__ = eval_body__$1;
if(cljs.core.truth_(and__37431__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__37431__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52919){var e = e52919;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52920_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52920_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__52925){
var vec__52926 = p__52925;
var k = cljs.core.nth.call(null,vec__52926,(0),null);
var v = cljs.core.nth.call(null,vec__52926,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52927){
var vec__52928 = p__52927;
var k = cljs.core.nth.call(null,vec__52928,(0),null);
var v = cljs.core.nth.call(null,vec__52928,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52932,p__52933){
var map__53180 = p__52932;
var map__53180__$1 = ((((!((map__53180 == null)))?((((map__53180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53180):map__53180);
var opts = map__53180__$1;
var before_jsload = cljs.core.get.call(null,map__53180__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53180__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53180__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53181 = p__52933;
var map__53181__$1 = ((((!((map__53181 == null)))?((((map__53181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53181):map__53181);
var msg = map__53181__$1;
var files = cljs.core.get.call(null,map__53181__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53181__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53181__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__41374__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__41375__auto__ = (function (){var switch__41353__auto__ = ((function (c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53334){
var state_val_53335 = (state_53334[(1)]);
if((state_val_53335 === (7))){
var inst_53198 = (state_53334[(7)]);
var inst_53196 = (state_53334[(8)]);
var inst_53197 = (state_53334[(9)]);
var inst_53195 = (state_53334[(10)]);
var inst_53203 = cljs.core._nth.call(null,inst_53196,inst_53198);
var inst_53204 = figwheel.client.file_reloading.eval_body.call(null,inst_53203,opts);
var inst_53205 = (inst_53198 + (1));
var tmp53336 = inst_53196;
var tmp53337 = inst_53197;
var tmp53338 = inst_53195;
var inst_53195__$1 = tmp53338;
var inst_53196__$1 = tmp53336;
var inst_53197__$1 = tmp53337;
var inst_53198__$1 = inst_53205;
var state_53334__$1 = (function (){var statearr_53339 = state_53334;
(statearr_53339[(7)] = inst_53198__$1);

(statearr_53339[(8)] = inst_53196__$1);

(statearr_53339[(9)] = inst_53197__$1);

(statearr_53339[(11)] = inst_53204);

(statearr_53339[(10)] = inst_53195__$1);

return statearr_53339;
})();
var statearr_53340_53426 = state_53334__$1;
(statearr_53340_53426[(2)] = null);

(statearr_53340_53426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (20))){
var inst_53238 = (state_53334[(12)]);
var inst_53246 = figwheel.client.file_reloading.sort_files.call(null,inst_53238);
var state_53334__$1 = state_53334;
var statearr_53341_53427 = state_53334__$1;
(statearr_53341_53427[(2)] = inst_53246);

(statearr_53341_53427[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (27))){
var state_53334__$1 = state_53334;
var statearr_53342_53428 = state_53334__$1;
(statearr_53342_53428[(2)] = null);

(statearr_53342_53428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (1))){
var inst_53187 = (state_53334[(13)]);
var inst_53184 = before_jsload.call(null,files);
var inst_53185 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53186 = (function (){return ((function (inst_53187,inst_53184,inst_53185,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52929_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52929_SHARP_);
});
;})(inst_53187,inst_53184,inst_53185,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53187__$1 = cljs.core.filter.call(null,inst_53186,files);
var inst_53188 = cljs.core.not_empty.call(null,inst_53187__$1);
var state_53334__$1 = (function (){var statearr_53343 = state_53334;
(statearr_53343[(14)] = inst_53185);

(statearr_53343[(13)] = inst_53187__$1);

(statearr_53343[(15)] = inst_53184);

return statearr_53343;
})();
if(cljs.core.truth_(inst_53188)){
var statearr_53344_53429 = state_53334__$1;
(statearr_53344_53429[(1)] = (2));

} else {
var statearr_53345_53430 = state_53334__$1;
(statearr_53345_53430[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (24))){
var state_53334__$1 = state_53334;
var statearr_53346_53431 = state_53334__$1;
(statearr_53346_53431[(2)] = null);

(statearr_53346_53431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (39))){
var inst_53288 = (state_53334[(16)]);
var state_53334__$1 = state_53334;
var statearr_53347_53432 = state_53334__$1;
(statearr_53347_53432[(2)] = inst_53288);

(statearr_53347_53432[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (46))){
var inst_53329 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53348_53433 = state_53334__$1;
(statearr_53348_53433[(2)] = inst_53329);

(statearr_53348_53433[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (4))){
var inst_53232 = (state_53334[(2)]);
var inst_53233 = cljs.core.List.EMPTY;
var inst_53234 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53233);
var inst_53235 = (function (){return ((function (inst_53232,inst_53233,inst_53234,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52930_SHARP_){
var and__37431__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52930_SHARP_);
if(cljs.core.truth_(and__37431__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52930_SHARP_));
} else {
return and__37431__auto__;
}
});
;})(inst_53232,inst_53233,inst_53234,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53236 = cljs.core.filter.call(null,inst_53235,files);
var inst_53237 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53238 = cljs.core.concat.call(null,inst_53236,inst_53237);
var state_53334__$1 = (function (){var statearr_53349 = state_53334;
(statearr_53349[(12)] = inst_53238);

(statearr_53349[(17)] = inst_53232);

(statearr_53349[(18)] = inst_53234);

return statearr_53349;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53350_53434 = state_53334__$1;
(statearr_53350_53434[(1)] = (16));

} else {
var statearr_53351_53435 = state_53334__$1;
(statearr_53351_53435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (15))){
var inst_53222 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53352_53436 = state_53334__$1;
(statearr_53352_53436[(2)] = inst_53222);

(statearr_53352_53436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (21))){
var inst_53248 = (state_53334[(19)]);
var inst_53248__$1 = (state_53334[(2)]);
var inst_53249 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53248__$1);
var state_53334__$1 = (function (){var statearr_53353 = state_53334;
(statearr_53353[(19)] = inst_53248__$1);

return statearr_53353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53334__$1,(22),inst_53249);
} else {
if((state_val_53335 === (31))){
var inst_53332 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53334__$1,inst_53332);
} else {
if((state_val_53335 === (32))){
var inst_53288 = (state_53334[(16)]);
var inst_53293 = inst_53288.cljs$lang$protocol_mask$partition0$;
var inst_53294 = (inst_53293 & (64));
var inst_53295 = inst_53288.cljs$core$ISeq$;
var inst_53296 = (inst_53294) || (inst_53295);
var state_53334__$1 = state_53334;
if(cljs.core.truth_(inst_53296)){
var statearr_53354_53437 = state_53334__$1;
(statearr_53354_53437[(1)] = (35));

} else {
var statearr_53355_53438 = state_53334__$1;
(statearr_53355_53438[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (40))){
var inst_53309 = (state_53334[(20)]);
var inst_53308 = (state_53334[(2)]);
var inst_53309__$1 = cljs.core.get.call(null,inst_53308,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53310 = cljs.core.get.call(null,inst_53308,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53311 = cljs.core.not_empty.call(null,inst_53309__$1);
var state_53334__$1 = (function (){var statearr_53356 = state_53334;
(statearr_53356[(21)] = inst_53310);

(statearr_53356[(20)] = inst_53309__$1);

return statearr_53356;
})();
if(cljs.core.truth_(inst_53311)){
var statearr_53357_53439 = state_53334__$1;
(statearr_53357_53439[(1)] = (41));

} else {
var statearr_53358_53440 = state_53334__$1;
(statearr_53358_53440[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (33))){
var state_53334__$1 = state_53334;
var statearr_53359_53441 = state_53334__$1;
(statearr_53359_53441[(2)] = false);

(statearr_53359_53441[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (13))){
var inst_53208 = (state_53334[(22)]);
var inst_53212 = cljs.core.chunk_first.call(null,inst_53208);
var inst_53213 = cljs.core.chunk_rest.call(null,inst_53208);
var inst_53214 = cljs.core.count.call(null,inst_53212);
var inst_53195 = inst_53213;
var inst_53196 = inst_53212;
var inst_53197 = inst_53214;
var inst_53198 = (0);
var state_53334__$1 = (function (){var statearr_53360 = state_53334;
(statearr_53360[(7)] = inst_53198);

(statearr_53360[(8)] = inst_53196);

(statearr_53360[(9)] = inst_53197);

(statearr_53360[(10)] = inst_53195);

return statearr_53360;
})();
var statearr_53361_53442 = state_53334__$1;
(statearr_53361_53442[(2)] = null);

(statearr_53361_53442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (22))){
var inst_53248 = (state_53334[(19)]);
var inst_53256 = (state_53334[(23)]);
var inst_53252 = (state_53334[(24)]);
var inst_53251 = (state_53334[(25)]);
var inst_53251__$1 = (state_53334[(2)]);
var inst_53252__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53251__$1);
var inst_53253 = (function (){var all_files = inst_53248;
var res_SINGLEQUOTE_ = inst_53251__$1;
var res = inst_53252__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53248,inst_53256,inst_53252,inst_53251,inst_53251__$1,inst_53252__$1,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52931_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52931_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53248,inst_53256,inst_53252,inst_53251,inst_53251__$1,inst_53252__$1,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53254 = cljs.core.filter.call(null,inst_53253,inst_53251__$1);
var inst_53255 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53256__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53255);
var inst_53257 = cljs.core.not_empty.call(null,inst_53256__$1);
var state_53334__$1 = (function (){var statearr_53362 = state_53334;
(statearr_53362[(26)] = inst_53254);

(statearr_53362[(23)] = inst_53256__$1);

(statearr_53362[(24)] = inst_53252__$1);

(statearr_53362[(25)] = inst_53251__$1);

return statearr_53362;
})();
if(cljs.core.truth_(inst_53257)){
var statearr_53363_53443 = state_53334__$1;
(statearr_53363_53443[(1)] = (23));

} else {
var statearr_53364_53444 = state_53334__$1;
(statearr_53364_53444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (36))){
var state_53334__$1 = state_53334;
var statearr_53365_53445 = state_53334__$1;
(statearr_53365_53445[(2)] = false);

(statearr_53365_53445[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (41))){
var inst_53309 = (state_53334[(20)]);
var inst_53313 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53314 = cljs.core.map.call(null,inst_53313,inst_53309);
var inst_53315 = cljs.core.pr_str.call(null,inst_53314);
var inst_53316 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_53315)].join('');
var inst_53317 = figwheel.client.utils.log.call(null,inst_53316);
var state_53334__$1 = state_53334;
var statearr_53366_53446 = state_53334__$1;
(statearr_53366_53446[(2)] = inst_53317);

(statearr_53366_53446[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (43))){
var inst_53310 = (state_53334[(21)]);
var inst_53320 = (state_53334[(2)]);
var inst_53321 = cljs.core.not_empty.call(null,inst_53310);
var state_53334__$1 = (function (){var statearr_53367 = state_53334;
(statearr_53367[(27)] = inst_53320);

return statearr_53367;
})();
if(cljs.core.truth_(inst_53321)){
var statearr_53368_53447 = state_53334__$1;
(statearr_53368_53447[(1)] = (44));

} else {
var statearr_53369_53448 = state_53334__$1;
(statearr_53369_53448[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (29))){
var inst_53254 = (state_53334[(26)]);
var inst_53248 = (state_53334[(19)]);
var inst_53288 = (state_53334[(16)]);
var inst_53256 = (state_53334[(23)]);
var inst_53252 = (state_53334[(24)]);
var inst_53251 = (state_53334[(25)]);
var inst_53284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53287 = (function (){var all_files = inst_53248;
var res_SINGLEQUOTE_ = inst_53251;
var res = inst_53252;
var files_not_loaded = inst_53254;
var dependencies_that_loaded = inst_53256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53288,inst_53256,inst_53252,inst_53251,inst_53284,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53286){
var map__53370 = p__53286;
var map__53370__$1 = ((((!((map__53370 == null)))?((((map__53370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53370):map__53370);
var namespace = cljs.core.get.call(null,map__53370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53288,inst_53256,inst_53252,inst_53251,inst_53284,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53288__$1 = cljs.core.group_by.call(null,inst_53287,inst_53254);
var inst_53290 = (inst_53288__$1 == null);
var inst_53291 = cljs.core.not.call(null,inst_53290);
var state_53334__$1 = (function (){var statearr_53372 = state_53334;
(statearr_53372[(16)] = inst_53288__$1);

(statearr_53372[(28)] = inst_53284);

return statearr_53372;
})();
if(inst_53291){
var statearr_53373_53449 = state_53334__$1;
(statearr_53373_53449[(1)] = (32));

} else {
var statearr_53374_53450 = state_53334__$1;
(statearr_53374_53450[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (44))){
var inst_53310 = (state_53334[(21)]);
var inst_53323 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53310);
var inst_53324 = cljs.core.pr_str.call(null,inst_53323);
var inst_53325 = [cljs.core.str("not required: "),cljs.core.str(inst_53324)].join('');
var inst_53326 = figwheel.client.utils.log.call(null,inst_53325);
var state_53334__$1 = state_53334;
var statearr_53375_53451 = state_53334__$1;
(statearr_53375_53451[(2)] = inst_53326);

(statearr_53375_53451[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (6))){
var inst_53229 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53376_53452 = state_53334__$1;
(statearr_53376_53452[(2)] = inst_53229);

(statearr_53376_53452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (28))){
var inst_53254 = (state_53334[(26)]);
var inst_53281 = (state_53334[(2)]);
var inst_53282 = cljs.core.not_empty.call(null,inst_53254);
var state_53334__$1 = (function (){var statearr_53377 = state_53334;
(statearr_53377[(29)] = inst_53281);

return statearr_53377;
})();
if(cljs.core.truth_(inst_53282)){
var statearr_53378_53453 = state_53334__$1;
(statearr_53378_53453[(1)] = (29));

} else {
var statearr_53379_53454 = state_53334__$1;
(statearr_53379_53454[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (25))){
var inst_53252 = (state_53334[(24)]);
var inst_53268 = (state_53334[(2)]);
var inst_53269 = cljs.core.not_empty.call(null,inst_53252);
var state_53334__$1 = (function (){var statearr_53380 = state_53334;
(statearr_53380[(30)] = inst_53268);

return statearr_53380;
})();
if(cljs.core.truth_(inst_53269)){
var statearr_53381_53455 = state_53334__$1;
(statearr_53381_53455[(1)] = (26));

} else {
var statearr_53382_53456 = state_53334__$1;
(statearr_53382_53456[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (34))){
var inst_53303 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
if(cljs.core.truth_(inst_53303)){
var statearr_53383_53457 = state_53334__$1;
(statearr_53383_53457[(1)] = (38));

} else {
var statearr_53384_53458 = state_53334__$1;
(statearr_53384_53458[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (17))){
var state_53334__$1 = state_53334;
var statearr_53385_53459 = state_53334__$1;
(statearr_53385_53459[(2)] = recompile_dependents);

(statearr_53385_53459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (3))){
var state_53334__$1 = state_53334;
var statearr_53386_53460 = state_53334__$1;
(statearr_53386_53460[(2)] = null);

(statearr_53386_53460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (12))){
var inst_53225 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53387_53461 = state_53334__$1;
(statearr_53387_53461[(2)] = inst_53225);

(statearr_53387_53461[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (2))){
var inst_53187 = (state_53334[(13)]);
var inst_53194 = cljs.core.seq.call(null,inst_53187);
var inst_53195 = inst_53194;
var inst_53196 = null;
var inst_53197 = (0);
var inst_53198 = (0);
var state_53334__$1 = (function (){var statearr_53388 = state_53334;
(statearr_53388[(7)] = inst_53198);

(statearr_53388[(8)] = inst_53196);

(statearr_53388[(9)] = inst_53197);

(statearr_53388[(10)] = inst_53195);

return statearr_53388;
})();
var statearr_53389_53462 = state_53334__$1;
(statearr_53389_53462[(2)] = null);

(statearr_53389_53462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (23))){
var inst_53254 = (state_53334[(26)]);
var inst_53248 = (state_53334[(19)]);
var inst_53256 = (state_53334[(23)]);
var inst_53252 = (state_53334[(24)]);
var inst_53251 = (state_53334[(25)]);
var inst_53259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53261 = (function (){var all_files = inst_53248;
var res_SINGLEQUOTE_ = inst_53251;
var res = inst_53252;
var files_not_loaded = inst_53254;
var dependencies_that_loaded = inst_53256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53256,inst_53252,inst_53251,inst_53259,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53260){
var map__53390 = p__53260;
var map__53390__$1 = ((((!((map__53390 == null)))?((((map__53390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53390):map__53390);
var request_url = cljs.core.get.call(null,map__53390__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53256,inst_53252,inst_53251,inst_53259,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53262 = cljs.core.reverse.call(null,inst_53256);
var inst_53263 = cljs.core.map.call(null,inst_53261,inst_53262);
var inst_53264 = cljs.core.pr_str.call(null,inst_53263);
var inst_53265 = figwheel.client.utils.log.call(null,inst_53264);
var state_53334__$1 = (function (){var statearr_53392 = state_53334;
(statearr_53392[(31)] = inst_53259);

return statearr_53392;
})();
var statearr_53393_53463 = state_53334__$1;
(statearr_53393_53463[(2)] = inst_53265);

(statearr_53393_53463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (35))){
var state_53334__$1 = state_53334;
var statearr_53394_53464 = state_53334__$1;
(statearr_53394_53464[(2)] = true);

(statearr_53394_53464[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (19))){
var inst_53238 = (state_53334[(12)]);
var inst_53244 = figwheel.client.file_reloading.expand_files.call(null,inst_53238);
var state_53334__$1 = state_53334;
var statearr_53395_53465 = state_53334__$1;
(statearr_53395_53465[(2)] = inst_53244);

(statearr_53395_53465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (11))){
var state_53334__$1 = state_53334;
var statearr_53396_53466 = state_53334__$1;
(statearr_53396_53466[(2)] = null);

(statearr_53396_53466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (9))){
var inst_53227 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53397_53467 = state_53334__$1;
(statearr_53397_53467[(2)] = inst_53227);

(statearr_53397_53467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (5))){
var inst_53198 = (state_53334[(7)]);
var inst_53197 = (state_53334[(9)]);
var inst_53200 = (inst_53198 < inst_53197);
var inst_53201 = inst_53200;
var state_53334__$1 = state_53334;
if(cljs.core.truth_(inst_53201)){
var statearr_53398_53468 = state_53334__$1;
(statearr_53398_53468[(1)] = (7));

} else {
var statearr_53399_53469 = state_53334__$1;
(statearr_53399_53469[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (14))){
var inst_53208 = (state_53334[(22)]);
var inst_53217 = cljs.core.first.call(null,inst_53208);
var inst_53218 = figwheel.client.file_reloading.eval_body.call(null,inst_53217,opts);
var inst_53219 = cljs.core.next.call(null,inst_53208);
var inst_53195 = inst_53219;
var inst_53196 = null;
var inst_53197 = (0);
var inst_53198 = (0);
var state_53334__$1 = (function (){var statearr_53400 = state_53334;
(statearr_53400[(7)] = inst_53198);

(statearr_53400[(8)] = inst_53196);

(statearr_53400[(32)] = inst_53218);

(statearr_53400[(9)] = inst_53197);

(statearr_53400[(10)] = inst_53195);

return statearr_53400;
})();
var statearr_53401_53470 = state_53334__$1;
(statearr_53401_53470[(2)] = null);

(statearr_53401_53470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (45))){
var state_53334__$1 = state_53334;
var statearr_53402_53471 = state_53334__$1;
(statearr_53402_53471[(2)] = null);

(statearr_53402_53471[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (26))){
var inst_53254 = (state_53334[(26)]);
var inst_53248 = (state_53334[(19)]);
var inst_53256 = (state_53334[(23)]);
var inst_53252 = (state_53334[(24)]);
var inst_53251 = (state_53334[(25)]);
var inst_53271 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53273 = (function (){var all_files = inst_53248;
var res_SINGLEQUOTE_ = inst_53251;
var res = inst_53252;
var files_not_loaded = inst_53254;
var dependencies_that_loaded = inst_53256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53256,inst_53252,inst_53251,inst_53271,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53272){
var map__53403 = p__53272;
var map__53403__$1 = ((((!((map__53403 == null)))?((((map__53403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53403):map__53403);
var namespace = cljs.core.get.call(null,map__53403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53403__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53256,inst_53252,inst_53251,inst_53271,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53274 = cljs.core.map.call(null,inst_53273,inst_53252);
var inst_53275 = cljs.core.pr_str.call(null,inst_53274);
var inst_53276 = figwheel.client.utils.log.call(null,inst_53275);
var inst_53277 = (function (){var all_files = inst_53248;
var res_SINGLEQUOTE_ = inst_53251;
var res = inst_53252;
var files_not_loaded = inst_53254;
var dependencies_that_loaded = inst_53256;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53256,inst_53252,inst_53251,inst_53271,inst_53273,inst_53274,inst_53275,inst_53276,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53254,inst_53248,inst_53256,inst_53252,inst_53251,inst_53271,inst_53273,inst_53274,inst_53275,inst_53276,state_val_53335,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53278 = setTimeout(inst_53277,(10));
var state_53334__$1 = (function (){var statearr_53405 = state_53334;
(statearr_53405[(33)] = inst_53271);

(statearr_53405[(34)] = inst_53276);

return statearr_53405;
})();
var statearr_53406_53472 = state_53334__$1;
(statearr_53406_53472[(2)] = inst_53278);

(statearr_53406_53472[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (16))){
var state_53334__$1 = state_53334;
var statearr_53407_53473 = state_53334__$1;
(statearr_53407_53473[(2)] = reload_dependents);

(statearr_53407_53473[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (38))){
var inst_53288 = (state_53334[(16)]);
var inst_53305 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53288);
var state_53334__$1 = state_53334;
var statearr_53408_53474 = state_53334__$1;
(statearr_53408_53474[(2)] = inst_53305);

(statearr_53408_53474[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (30))){
var state_53334__$1 = state_53334;
var statearr_53409_53475 = state_53334__$1;
(statearr_53409_53475[(2)] = null);

(statearr_53409_53475[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (10))){
var inst_53208 = (state_53334[(22)]);
var inst_53210 = cljs.core.chunked_seq_QMARK_.call(null,inst_53208);
var state_53334__$1 = state_53334;
if(inst_53210){
var statearr_53410_53476 = state_53334__$1;
(statearr_53410_53476[(1)] = (13));

} else {
var statearr_53411_53477 = state_53334__$1;
(statearr_53411_53477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (18))){
var inst_53242 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
if(cljs.core.truth_(inst_53242)){
var statearr_53412_53478 = state_53334__$1;
(statearr_53412_53478[(1)] = (19));

} else {
var statearr_53413_53479 = state_53334__$1;
(statearr_53413_53479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (42))){
var state_53334__$1 = state_53334;
var statearr_53414_53480 = state_53334__$1;
(statearr_53414_53480[(2)] = null);

(statearr_53414_53480[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (37))){
var inst_53300 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53415_53481 = state_53334__$1;
(statearr_53415_53481[(2)] = inst_53300);

(statearr_53415_53481[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (8))){
var inst_53208 = (state_53334[(22)]);
var inst_53195 = (state_53334[(10)]);
var inst_53208__$1 = cljs.core.seq.call(null,inst_53195);
var state_53334__$1 = (function (){var statearr_53416 = state_53334;
(statearr_53416[(22)] = inst_53208__$1);

return statearr_53416;
})();
if(inst_53208__$1){
var statearr_53417_53482 = state_53334__$1;
(statearr_53417_53482[(1)] = (10));

} else {
var statearr_53418_53483 = state_53334__$1;
(statearr_53418_53483[(1)] = (11));

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
});})(c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__41353__auto__,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto____0 = (function (){
var statearr_53422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53422[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto__);

(statearr_53422[(1)] = (1));

return statearr_53422;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto____1 = (function (state_53334){
while(true){
var ret_value__41355__auto__ = (function (){try{while(true){
var result__41356__auto__ = switch__41353__auto__.call(null,state_53334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__41356__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41356__auto__;
}
break;
}
}catch (e53423){if((e53423 instanceof Object)){
var ex__41357__auto__ = e53423;
var statearr_53424_53484 = state_53334;
(statearr_53424_53484[(5)] = ex__41357__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__41355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53485 = state_53334;
state_53334 = G__53485;
continue;
} else {
return ret_value__41355__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto__ = function(state_53334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto____1.call(this,state_53334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__41354__auto__;
})()
;})(switch__41353__auto__,c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__41376__auto__ = (function (){var statearr_53425 = f__41375__auto__.call(null);
(statearr_53425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__41374__auto__);

return statearr_53425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__41376__auto__);
});})(c__41374__auto__,map__53180,map__53180__$1,opts,before_jsload,on_jsload,reload_dependents,map__53181,map__53181__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__41374__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53488,link){
var map__53491 = p__53488;
var map__53491__$1 = ((((!((map__53491 == null)))?((((map__53491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53491):map__53491);
var file = cljs.core.get.call(null,map__53491__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__53491,map__53491__$1,file){
return (function (p1__53486_SHARP_,p2__53487_SHARP_){
if(cljs.core._EQ_.call(null,p1__53486_SHARP_,p2__53487_SHARP_)){
return p1__53486_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__53491,map__53491__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53497){
var map__53498 = p__53497;
var map__53498__$1 = ((((!((map__53498 == null)))?((((map__53498.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53498.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53498):map__53498);
var match_length = cljs.core.get.call(null,map__53498__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53498__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53493_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53493_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
var args53500 = [];
var len__38501__auto___53503 = arguments.length;
var i__38502__auto___53504 = (0);
while(true){
if((i__38502__auto___53504 < len__38501__auto___53503)){
args53500.push((arguments[i__38502__auto___53504]));

var G__53505 = (i__38502__auto___53504 + (1));
i__38502__auto___53504 = G__53505;
continue;
} else {
}
break;
}

var G__53502 = args53500.length;
switch (G__53502) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53500.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53507_SHARP_,p2__53508_SHARP_){
return cljs.core.assoc.call(null,p1__53507_SHARP_,cljs.core.get.call(null,p2__53508_SHARP_,key),p2__53508_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__53509){
var map__53512 = p__53509;
var map__53512__$1 = ((((!((map__53512 == null)))?((((map__53512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53512):map__53512);
var f_data = map__53512__$1;
var file = cljs.core.get.call(null,map__53512__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53514,files_msg){
var map__53521 = p__53514;
var map__53521__$1 = ((((!((map__53521 == null)))?((((map__53521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53521):map__53521);
var opts = map__53521__$1;
var on_cssload = cljs.core.get.call(null,map__53521__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__53523_53527 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__53524_53528 = null;
var count__53525_53529 = (0);
var i__53526_53530 = (0);
while(true){
if((i__53526_53530 < count__53525_53529)){
var f_53531 = cljs.core._nth.call(null,chunk__53524_53528,i__53526_53530);
figwheel.client.file_reloading.reload_css_file.call(null,f_53531);

var G__53532 = seq__53523_53527;
var G__53533 = chunk__53524_53528;
var G__53534 = count__53525_53529;
var G__53535 = (i__53526_53530 + (1));
seq__53523_53527 = G__53532;
chunk__53524_53528 = G__53533;
count__53525_53529 = G__53534;
i__53526_53530 = G__53535;
continue;
} else {
var temp__4657__auto___53536 = cljs.core.seq.call(null,seq__53523_53527);
if(temp__4657__auto___53536){
var seq__53523_53537__$1 = temp__4657__auto___53536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53523_53537__$1)){
var c__38246__auto___53538 = cljs.core.chunk_first.call(null,seq__53523_53537__$1);
var G__53539 = cljs.core.chunk_rest.call(null,seq__53523_53537__$1);
var G__53540 = c__38246__auto___53538;
var G__53541 = cljs.core.count.call(null,c__38246__auto___53538);
var G__53542 = (0);
seq__53523_53527 = G__53539;
chunk__53524_53528 = G__53540;
count__53525_53529 = G__53541;
i__53526_53530 = G__53542;
continue;
} else {
var f_53543 = cljs.core.first.call(null,seq__53523_53537__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_53543);

var G__53544 = cljs.core.next.call(null,seq__53523_53537__$1);
var G__53545 = null;
var G__53546 = (0);
var G__53547 = (0);
seq__53523_53527 = G__53544;
chunk__53524_53528 = G__53545;
count__53525_53529 = G__53546;
i__53526_53530 = G__53547;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__53521,map__53521__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__53521,map__53521__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1459008361108