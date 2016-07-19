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
var or__18376__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18376__auto__){
return or__18376__auto__;
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
var or__18376__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18376__auto__)){
return or__18376__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20491_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20491_SHARP_));
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
var seq__20496 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20497 = null;
var count__20498 = (0);
var i__20499 = (0);
while(true){
if((i__20499 < count__20498)){
var n = cljs.core._nth.call(null,chunk__20497,i__20499);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20500 = seq__20496;
var G__20501 = chunk__20497;
var G__20502 = count__20498;
var G__20503 = (i__20499 + (1));
seq__20496 = G__20500;
chunk__20497 = G__20501;
count__20498 = G__20502;
i__20499 = G__20503;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20496);
if(temp__4657__auto__){
var seq__20496__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20496__$1)){
var c__19179__auto__ = cljs.core.chunk_first.call(null,seq__20496__$1);
var G__20504 = cljs.core.chunk_rest.call(null,seq__20496__$1);
var G__20505 = c__19179__auto__;
var G__20506 = cljs.core.count.call(null,c__19179__auto__);
var G__20507 = (0);
seq__20496 = G__20504;
chunk__20497 = G__20505;
count__20498 = G__20506;
i__20499 = G__20507;
continue;
} else {
var n = cljs.core.first.call(null,seq__20496__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20508 = cljs.core.next.call(null,seq__20496__$1);
var G__20509 = null;
var G__20510 = (0);
var G__20511 = (0);
seq__20496 = G__20508;
chunk__20497 = G__20509;
count__20498 = G__20510;
i__20499 = G__20511;
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

var seq__20550_20557 = cljs.core.seq.call(null,deps);
var chunk__20551_20558 = null;
var count__20552_20559 = (0);
var i__20553_20560 = (0);
while(true){
if((i__20553_20560 < count__20552_20559)){
var dep_20561 = cljs.core._nth.call(null,chunk__20551_20558,i__20553_20560);
topo_sort_helper_STAR_.call(null,dep_20561,(depth + (1)),state);

var G__20562 = seq__20550_20557;
var G__20563 = chunk__20551_20558;
var G__20564 = count__20552_20559;
var G__20565 = (i__20553_20560 + (1));
seq__20550_20557 = G__20562;
chunk__20551_20558 = G__20563;
count__20552_20559 = G__20564;
i__20553_20560 = G__20565;
continue;
} else {
var temp__4657__auto___20566 = cljs.core.seq.call(null,seq__20550_20557);
if(temp__4657__auto___20566){
var seq__20550_20567__$1 = temp__4657__auto___20566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20550_20567__$1)){
var c__19179__auto___20568 = cljs.core.chunk_first.call(null,seq__20550_20567__$1);
var G__20569 = cljs.core.chunk_rest.call(null,seq__20550_20567__$1);
var G__20570 = c__19179__auto___20568;
var G__20571 = cljs.core.count.call(null,c__19179__auto___20568);
var G__20572 = (0);
seq__20550_20557 = G__20569;
chunk__20551_20558 = G__20570;
count__20552_20559 = G__20571;
i__20553_20560 = G__20572;
continue;
} else {
var dep_20573 = cljs.core.first.call(null,seq__20550_20567__$1);
topo_sort_helper_STAR_.call(null,dep_20573,(depth + (1)),state);

var G__20574 = cljs.core.next.call(null,seq__20550_20567__$1);
var G__20575 = null;
var G__20576 = (0);
var G__20577 = (0);
seq__20550_20557 = G__20574;
chunk__20551_20558 = G__20575;
count__20552_20559 = G__20576;
i__20553_20560 = G__20577;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20554){
var vec__20556 = p__20554;
var x = cljs.core.nth.call(null,vec__20556,(0),null);
var xs = cljs.core.nthnext.call(null,vec__20556,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20556,x,xs,get_deps__$1){
return (function (p1__20512_SHARP_){
return clojure.set.difference.call(null,p1__20512_SHARP_,x);
});})(vec__20556,x,xs,get_deps__$1))
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
var seq__20590 = cljs.core.seq.call(null,provides);
var chunk__20591 = null;
var count__20592 = (0);
var i__20593 = (0);
while(true){
if((i__20593 < count__20592)){
var prov = cljs.core._nth.call(null,chunk__20591,i__20593);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20594_20602 = cljs.core.seq.call(null,requires);
var chunk__20595_20603 = null;
var count__20596_20604 = (0);
var i__20597_20605 = (0);
while(true){
if((i__20597_20605 < count__20596_20604)){
var req_20606 = cljs.core._nth.call(null,chunk__20595_20603,i__20597_20605);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20606,prov);

var G__20607 = seq__20594_20602;
var G__20608 = chunk__20595_20603;
var G__20609 = count__20596_20604;
var G__20610 = (i__20597_20605 + (1));
seq__20594_20602 = G__20607;
chunk__20595_20603 = G__20608;
count__20596_20604 = G__20609;
i__20597_20605 = G__20610;
continue;
} else {
var temp__4657__auto___20611 = cljs.core.seq.call(null,seq__20594_20602);
if(temp__4657__auto___20611){
var seq__20594_20612__$1 = temp__4657__auto___20611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20594_20612__$1)){
var c__19179__auto___20613 = cljs.core.chunk_first.call(null,seq__20594_20612__$1);
var G__20614 = cljs.core.chunk_rest.call(null,seq__20594_20612__$1);
var G__20615 = c__19179__auto___20613;
var G__20616 = cljs.core.count.call(null,c__19179__auto___20613);
var G__20617 = (0);
seq__20594_20602 = G__20614;
chunk__20595_20603 = G__20615;
count__20596_20604 = G__20616;
i__20597_20605 = G__20617;
continue;
} else {
var req_20618 = cljs.core.first.call(null,seq__20594_20612__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20618,prov);

var G__20619 = cljs.core.next.call(null,seq__20594_20612__$1);
var G__20620 = null;
var G__20621 = (0);
var G__20622 = (0);
seq__20594_20602 = G__20619;
chunk__20595_20603 = G__20620;
count__20596_20604 = G__20621;
i__20597_20605 = G__20622;
continue;
}
} else {
}
}
break;
}

var G__20623 = seq__20590;
var G__20624 = chunk__20591;
var G__20625 = count__20592;
var G__20626 = (i__20593 + (1));
seq__20590 = G__20623;
chunk__20591 = G__20624;
count__20592 = G__20625;
i__20593 = G__20626;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20590);
if(temp__4657__auto__){
var seq__20590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20590__$1)){
var c__19179__auto__ = cljs.core.chunk_first.call(null,seq__20590__$1);
var G__20627 = cljs.core.chunk_rest.call(null,seq__20590__$1);
var G__20628 = c__19179__auto__;
var G__20629 = cljs.core.count.call(null,c__19179__auto__);
var G__20630 = (0);
seq__20590 = G__20627;
chunk__20591 = G__20628;
count__20592 = G__20629;
i__20593 = G__20630;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20590__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20598_20631 = cljs.core.seq.call(null,requires);
var chunk__20599_20632 = null;
var count__20600_20633 = (0);
var i__20601_20634 = (0);
while(true){
if((i__20601_20634 < count__20600_20633)){
var req_20635 = cljs.core._nth.call(null,chunk__20599_20632,i__20601_20634);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20635,prov);

var G__20636 = seq__20598_20631;
var G__20637 = chunk__20599_20632;
var G__20638 = count__20600_20633;
var G__20639 = (i__20601_20634 + (1));
seq__20598_20631 = G__20636;
chunk__20599_20632 = G__20637;
count__20600_20633 = G__20638;
i__20601_20634 = G__20639;
continue;
} else {
var temp__4657__auto___20640__$1 = cljs.core.seq.call(null,seq__20598_20631);
if(temp__4657__auto___20640__$1){
var seq__20598_20641__$1 = temp__4657__auto___20640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20598_20641__$1)){
var c__19179__auto___20642 = cljs.core.chunk_first.call(null,seq__20598_20641__$1);
var G__20643 = cljs.core.chunk_rest.call(null,seq__20598_20641__$1);
var G__20644 = c__19179__auto___20642;
var G__20645 = cljs.core.count.call(null,c__19179__auto___20642);
var G__20646 = (0);
seq__20598_20631 = G__20643;
chunk__20599_20632 = G__20644;
count__20600_20633 = G__20645;
i__20601_20634 = G__20646;
continue;
} else {
var req_20647 = cljs.core.first.call(null,seq__20598_20641__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20647,prov);

var G__20648 = cljs.core.next.call(null,seq__20598_20641__$1);
var G__20649 = null;
var G__20650 = (0);
var G__20651 = (0);
seq__20598_20631 = G__20648;
chunk__20599_20632 = G__20649;
count__20600_20633 = G__20650;
i__20601_20634 = G__20651;
continue;
}
} else {
}
}
break;
}

var G__20652 = cljs.core.next.call(null,seq__20590__$1);
var G__20653 = null;
var G__20654 = (0);
var G__20655 = (0);
seq__20590 = G__20652;
chunk__20591 = G__20653;
count__20592 = G__20654;
i__20593 = G__20655;
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
var seq__20660_20664 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20661_20665 = null;
var count__20662_20666 = (0);
var i__20663_20667 = (0);
while(true){
if((i__20663_20667 < count__20662_20666)){
var ns_20668 = cljs.core._nth.call(null,chunk__20661_20665,i__20663_20667);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20668);

var G__20669 = seq__20660_20664;
var G__20670 = chunk__20661_20665;
var G__20671 = count__20662_20666;
var G__20672 = (i__20663_20667 + (1));
seq__20660_20664 = G__20669;
chunk__20661_20665 = G__20670;
count__20662_20666 = G__20671;
i__20663_20667 = G__20672;
continue;
} else {
var temp__4657__auto___20673 = cljs.core.seq.call(null,seq__20660_20664);
if(temp__4657__auto___20673){
var seq__20660_20674__$1 = temp__4657__auto___20673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20660_20674__$1)){
var c__19179__auto___20675 = cljs.core.chunk_first.call(null,seq__20660_20674__$1);
var G__20676 = cljs.core.chunk_rest.call(null,seq__20660_20674__$1);
var G__20677 = c__19179__auto___20675;
var G__20678 = cljs.core.count.call(null,c__19179__auto___20675);
var G__20679 = (0);
seq__20660_20664 = G__20676;
chunk__20661_20665 = G__20677;
count__20662_20666 = G__20678;
i__20663_20667 = G__20679;
continue;
} else {
var ns_20680 = cljs.core.first.call(null,seq__20660_20674__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20680);

var G__20681 = cljs.core.next.call(null,seq__20660_20674__$1);
var G__20682 = null;
var G__20683 = (0);
var G__20684 = (0);
seq__20660_20664 = G__20681;
chunk__20661_20665 = G__20682;
count__20662_20666 = G__20683;
i__20663_20667 = G__20684;
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
goog.require_figwheel_backup_ = (function (){var or__18376__auto__ = goog.require__;
if(cljs.core.truth_(or__18376__auto__)){
return or__18376__auto__;
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
var G__20685__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20686__i = 0, G__20686__a = new Array(arguments.length -  0);
while (G__20686__i < G__20686__a.length) {G__20686__a[G__20686__i] = arguments[G__20686__i + 0]; ++G__20686__i;}
  args = new cljs.core.IndexedSeq(G__20686__a,0);
} 
return G__20685__delegate.call(this,args);};
G__20685.cljs$lang$maxFixedArity = 0;
G__20685.cljs$lang$applyTo = (function (arglist__20687){
var args = cljs.core.seq(arglist__20687);
return G__20685__delegate(args);
});
G__20685.cljs$core$IFn$_invoke$arity$variadic = G__20685__delegate;
return G__20685;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20689 = cljs.core._EQ_;
var expr__20690 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20689.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20690))){
var path_parts = ((function (pred__20689,expr__20690){
return (function (p1__20688_SHARP_){
return clojure.string.split.call(null,p1__20688_SHARP_,/[\/\\]/);
});})(pred__20689,expr__20690))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__20689,expr__20690){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20692){if((e20692 instanceof Error)){
var e = e20692;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20692;

}
}})());
});
;})(path_parts,sep,root,pred__20689,expr__20690))
} else {
if(cljs.core.truth_(pred__20689.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20690))){
return ((function (pred__20689,expr__20690){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__20689,expr__20690){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__20689,expr__20690))
);

return deferred.addErrback(((function (deferred,pred__20689,expr__20690){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__20689,expr__20690))
);
});
;})(pred__20689,expr__20690))
} else {
return ((function (pred__20689,expr__20690){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20689,expr__20690))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20693,callback){
var map__20696 = p__20693;
var map__20696__$1 = ((((!((map__20696 == null)))?((((map__20696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20696):map__20696);
var file_msg = map__20696__$1;
var request_url = cljs.core.get.call(null,map__20696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20696,map__20696__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20696,map__20696__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto__){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto__){
return (function (state_20720){
var state_val_20721 = (state_20720[(1)]);
if((state_val_20721 === (7))){
var inst_20716 = (state_20720[(2)]);
var state_20720__$1 = state_20720;
var statearr_20722_20742 = state_20720__$1;
(statearr_20722_20742[(2)] = inst_20716);

(statearr_20722_20742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (1))){
var state_20720__$1 = state_20720;
var statearr_20723_20743 = state_20720__$1;
(statearr_20723_20743[(2)] = null);

(statearr_20723_20743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (4))){
var inst_20700 = (state_20720[(7)]);
var inst_20700__$1 = (state_20720[(2)]);
var state_20720__$1 = (function (){var statearr_20724 = state_20720;
(statearr_20724[(7)] = inst_20700__$1);

return statearr_20724;
})();
if(cljs.core.truth_(inst_20700__$1)){
var statearr_20725_20744 = state_20720__$1;
(statearr_20725_20744[(1)] = (5));

} else {
var statearr_20726_20745 = state_20720__$1;
(statearr_20726_20745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (6))){
var state_20720__$1 = state_20720;
var statearr_20727_20746 = state_20720__$1;
(statearr_20727_20746[(2)] = null);

(statearr_20727_20746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (3))){
var inst_20718 = (state_20720[(2)]);
var state_20720__$1 = state_20720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20720__$1,inst_20718);
} else {
if((state_val_20721 === (2))){
var state_20720__$1 = state_20720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20720__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20721 === (11))){
var inst_20712 = (state_20720[(2)]);
var state_20720__$1 = (function (){var statearr_20728 = state_20720;
(statearr_20728[(8)] = inst_20712);

return statearr_20728;
})();
var statearr_20729_20747 = state_20720__$1;
(statearr_20729_20747[(2)] = null);

(statearr_20729_20747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (9))){
var inst_20704 = (state_20720[(9)]);
var inst_20706 = (state_20720[(10)]);
var inst_20708 = inst_20706.call(null,inst_20704);
var state_20720__$1 = state_20720;
var statearr_20730_20748 = state_20720__$1;
(statearr_20730_20748[(2)] = inst_20708);

(statearr_20730_20748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (5))){
var inst_20700 = (state_20720[(7)]);
var inst_20702 = figwheel.client.file_reloading.blocking_load.call(null,inst_20700);
var state_20720__$1 = state_20720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20720__$1,(8),inst_20702);
} else {
if((state_val_20721 === (10))){
var inst_20704 = (state_20720[(9)]);
var inst_20710 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20704);
var state_20720__$1 = state_20720;
var statearr_20731_20749 = state_20720__$1;
(statearr_20731_20749[(2)] = inst_20710);

(statearr_20731_20749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20721 === (8))){
var inst_20700 = (state_20720[(7)]);
var inst_20706 = (state_20720[(10)]);
var inst_20704 = (state_20720[(2)]);
var inst_20705 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20706__$1 = cljs.core.get.call(null,inst_20705,inst_20700);
var state_20720__$1 = (function (){var statearr_20732 = state_20720;
(statearr_20732[(9)] = inst_20704);

(statearr_20732[(10)] = inst_20706__$1);

return statearr_20732;
})();
if(cljs.core.truth_(inst_20706__$1)){
var statearr_20733_20750 = state_20720__$1;
(statearr_20733_20750[(1)] = (9));

} else {
var statearr_20734_20751 = state_20720__$1;
(statearr_20734_20751[(1)] = (10));

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
});})(c__20412__auto__))
;
return ((function (switch__20391__auto__,c__20412__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20392__auto__ = null;
var figwheel$client$file_reloading$state_machine__20392__auto____0 = (function (){
var statearr_20738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20738[(0)] = figwheel$client$file_reloading$state_machine__20392__auto__);

(statearr_20738[(1)] = (1));

return statearr_20738;
});
var figwheel$client$file_reloading$state_machine__20392__auto____1 = (function (state_20720){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_20720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e20739){if((e20739 instanceof Object)){
var ex__20395__auto__ = e20739;
var statearr_20740_20752 = state_20720;
(statearr_20740_20752[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20753 = state_20720;
state_20720 = G__20753;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20392__auto__ = function(state_20720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20392__auto____1.call(this,state_20720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20392__auto____0;
figwheel$client$file_reloading$state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20392__auto____1;
return figwheel$client$file_reloading$state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto__))
})();
var state__20414__auto__ = (function (){var statearr_20741 = f__20413__auto__.call(null);
(statearr_20741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto__);

return statearr_20741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto__))
);

return c__20412__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20754,callback){
var map__20757 = p__20754;
var map__20757__$1 = ((((!((map__20757 == null)))?((((map__20757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20757):map__20757);
var file_msg = map__20757__$1;
var namespace = cljs.core.get.call(null,map__20757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20757,map__20757__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20757,map__20757__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20759){
var map__20762 = p__20759;
var map__20762__$1 = ((((!((map__20762 == null)))?((((map__20762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20762):map__20762);
var file_msg = map__20762__$1;
var namespace = cljs.core.get.call(null,map__20762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18364__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18364__auto__){
var or__18376__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18376__auto__)){
return or__18376__auto__;
} else {
var or__18376__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18376__auto____$1)){
return or__18376__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18364__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20764,callback){
var map__20767 = p__20764;
var map__20767__$1 = ((((!((map__20767 == null)))?((((map__20767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20767):map__20767);
var file_msg = map__20767__$1;
var request_url = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20412__auto___20855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto___20855,out){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto___20855,out){
return (function (state_20837){
var state_val_20838 = (state_20837[(1)]);
if((state_val_20838 === (1))){
var inst_20815 = cljs.core.nth.call(null,files,(0),null);
var inst_20816 = cljs.core.nthnext.call(null,files,(1));
var inst_20817 = files;
var state_20837__$1 = (function (){var statearr_20839 = state_20837;
(statearr_20839[(7)] = inst_20817);

(statearr_20839[(8)] = inst_20816);

(statearr_20839[(9)] = inst_20815);

return statearr_20839;
})();
var statearr_20840_20856 = state_20837__$1;
(statearr_20840_20856[(2)] = null);

(statearr_20840_20856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (2))){
var inst_20817 = (state_20837[(7)]);
var inst_20820 = (state_20837[(10)]);
var inst_20820__$1 = cljs.core.nth.call(null,inst_20817,(0),null);
var inst_20821 = cljs.core.nthnext.call(null,inst_20817,(1));
var inst_20822 = (inst_20820__$1 == null);
var inst_20823 = cljs.core.not.call(null,inst_20822);
var state_20837__$1 = (function (){var statearr_20841 = state_20837;
(statearr_20841[(10)] = inst_20820__$1);

(statearr_20841[(11)] = inst_20821);

return statearr_20841;
})();
if(inst_20823){
var statearr_20842_20857 = state_20837__$1;
(statearr_20842_20857[(1)] = (4));

} else {
var statearr_20843_20858 = state_20837__$1;
(statearr_20843_20858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (3))){
var inst_20835 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20837__$1,inst_20835);
} else {
if((state_val_20838 === (4))){
var inst_20820 = (state_20837[(10)]);
var inst_20825 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20820);
var state_20837__$1 = state_20837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20837__$1,(7),inst_20825);
} else {
if((state_val_20838 === (5))){
var inst_20831 = cljs.core.async.close_BANG_.call(null,out);
var state_20837__$1 = state_20837;
var statearr_20844_20859 = state_20837__$1;
(statearr_20844_20859[(2)] = inst_20831);

(statearr_20844_20859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (6))){
var inst_20833 = (state_20837[(2)]);
var state_20837__$1 = state_20837;
var statearr_20845_20860 = state_20837__$1;
(statearr_20845_20860[(2)] = inst_20833);

(statearr_20845_20860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20838 === (7))){
var inst_20821 = (state_20837[(11)]);
var inst_20827 = (state_20837[(2)]);
var inst_20828 = cljs.core.async.put_BANG_.call(null,out,inst_20827);
var inst_20817 = inst_20821;
var state_20837__$1 = (function (){var statearr_20846 = state_20837;
(statearr_20846[(12)] = inst_20828);

(statearr_20846[(7)] = inst_20817);

return statearr_20846;
})();
var statearr_20847_20861 = state_20837__$1;
(statearr_20847_20861[(2)] = null);

(statearr_20847_20861[(1)] = (2));


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
});})(c__20412__auto___20855,out))
;
return ((function (switch__20391__auto__,c__20412__auto___20855,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto____0 = (function (){
var statearr_20851 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20851[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto__);

(statearr_20851[(1)] = (1));

return statearr_20851;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto____1 = (function (state_20837){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_20837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e20852){if((e20852 instanceof Object)){
var ex__20395__auto__ = e20852;
var statearr_20853_20862 = state_20837;
(statearr_20853_20862[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20863 = state_20837;
state_20837 = G__20863;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto__ = function(state_20837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto____1.call(this,state_20837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto___20855,out))
})();
var state__20414__auto__ = (function (){var statearr_20854 = f__20413__auto__.call(null);
(statearr_20854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto___20855);

return statearr_20854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto___20855,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20864,opts){
var map__20868 = p__20864;
var map__20868__$1 = ((((!((map__20868 == null)))?((((map__20868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20868):map__20868);
var eval_body__$1 = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18364__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18364__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18364__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e20870){var e = e20870;
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
return (function (p1__20871_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20871_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__20876){
var vec__20877 = p__20876;
var k = cljs.core.nth.call(null,vec__20877,(0),null);
var v = cljs.core.nth.call(null,vec__20877,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20878){
var vec__20879 = p__20878;
var k = cljs.core.nth.call(null,vec__20879,(0),null);
var v = cljs.core.nth.call(null,vec__20879,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20883,p__20884){
var map__21131 = p__20883;
var map__21131__$1 = ((((!((map__21131 == null)))?((((map__21131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21131):map__21131);
var opts = map__21131__$1;
var before_jsload = cljs.core.get.call(null,map__21131__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__21131__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__21131__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__21132 = p__20884;
var map__21132__$1 = ((((!((map__21132 == null)))?((((map__21132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21132):map__21132);
var msg = map__21132__$1;
var files = cljs.core.get.call(null,map__21132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__21132__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__21132__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20412__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20413__auto__ = (function (){var switch__20391__auto__ = ((function (c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21285){
var state_val_21286 = (state_21285[(1)]);
if((state_val_21286 === (7))){
var inst_21149 = (state_21285[(7)]);
var inst_21146 = (state_21285[(8)]);
var inst_21148 = (state_21285[(9)]);
var inst_21147 = (state_21285[(10)]);
var inst_21154 = cljs.core._nth.call(null,inst_21147,inst_21149);
var inst_21155 = figwheel.client.file_reloading.eval_body.call(null,inst_21154,opts);
var inst_21156 = (inst_21149 + (1));
var tmp21287 = inst_21146;
var tmp21288 = inst_21148;
var tmp21289 = inst_21147;
var inst_21146__$1 = tmp21287;
var inst_21147__$1 = tmp21289;
var inst_21148__$1 = tmp21288;
var inst_21149__$1 = inst_21156;
var state_21285__$1 = (function (){var statearr_21290 = state_21285;
(statearr_21290[(7)] = inst_21149__$1);

(statearr_21290[(8)] = inst_21146__$1);

(statearr_21290[(9)] = inst_21148__$1);

(statearr_21290[(11)] = inst_21155);

(statearr_21290[(10)] = inst_21147__$1);

return statearr_21290;
})();
var statearr_21291_21377 = state_21285__$1;
(statearr_21291_21377[(2)] = null);

(statearr_21291_21377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (20))){
var inst_21189 = (state_21285[(12)]);
var inst_21197 = figwheel.client.file_reloading.sort_files.call(null,inst_21189);
var state_21285__$1 = state_21285;
var statearr_21292_21378 = state_21285__$1;
(statearr_21292_21378[(2)] = inst_21197);

(statearr_21292_21378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (27))){
var state_21285__$1 = state_21285;
var statearr_21293_21379 = state_21285__$1;
(statearr_21293_21379[(2)] = null);

(statearr_21293_21379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (1))){
var inst_21138 = (state_21285[(13)]);
var inst_21135 = before_jsload.call(null,files);
var inst_21136 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_21137 = (function (){return ((function (inst_21138,inst_21135,inst_21136,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20880_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20880_SHARP_);
});
;})(inst_21138,inst_21135,inst_21136,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21138__$1 = cljs.core.filter.call(null,inst_21137,files);
var inst_21139 = cljs.core.not_empty.call(null,inst_21138__$1);
var state_21285__$1 = (function (){var statearr_21294 = state_21285;
(statearr_21294[(13)] = inst_21138__$1);

(statearr_21294[(14)] = inst_21135);

(statearr_21294[(15)] = inst_21136);

return statearr_21294;
})();
if(cljs.core.truth_(inst_21139)){
var statearr_21295_21380 = state_21285__$1;
(statearr_21295_21380[(1)] = (2));

} else {
var statearr_21296_21381 = state_21285__$1;
(statearr_21296_21381[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (24))){
var state_21285__$1 = state_21285;
var statearr_21297_21382 = state_21285__$1;
(statearr_21297_21382[(2)] = null);

(statearr_21297_21382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (39))){
var inst_21239 = (state_21285[(16)]);
var state_21285__$1 = state_21285;
var statearr_21298_21383 = state_21285__$1;
(statearr_21298_21383[(2)] = inst_21239);

(statearr_21298_21383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (46))){
var inst_21280 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21299_21384 = state_21285__$1;
(statearr_21299_21384[(2)] = inst_21280);

(statearr_21299_21384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (4))){
var inst_21183 = (state_21285[(2)]);
var inst_21184 = cljs.core.List.EMPTY;
var inst_21185 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21184);
var inst_21186 = (function (){return ((function (inst_21183,inst_21184,inst_21185,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20881_SHARP_){
var and__18364__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20881_SHARP_);
if(cljs.core.truth_(and__18364__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20881_SHARP_));
} else {
return and__18364__auto__;
}
});
;})(inst_21183,inst_21184,inst_21185,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21187 = cljs.core.filter.call(null,inst_21186,files);
var inst_21188 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_21189 = cljs.core.concat.call(null,inst_21187,inst_21188);
var state_21285__$1 = (function (){var statearr_21300 = state_21285;
(statearr_21300[(17)] = inst_21185);

(statearr_21300[(18)] = inst_21183);

(statearr_21300[(12)] = inst_21189);

return statearr_21300;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21301_21385 = state_21285__$1;
(statearr_21301_21385[(1)] = (16));

} else {
var statearr_21302_21386 = state_21285__$1;
(statearr_21302_21386[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (15))){
var inst_21173 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21303_21387 = state_21285__$1;
(statearr_21303_21387[(2)] = inst_21173);

(statearr_21303_21387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (21))){
var inst_21199 = (state_21285[(19)]);
var inst_21199__$1 = (state_21285[(2)]);
var inst_21200 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_21199__$1);
var state_21285__$1 = (function (){var statearr_21304 = state_21285;
(statearr_21304[(19)] = inst_21199__$1);

return statearr_21304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21285__$1,(22),inst_21200);
} else {
if((state_val_21286 === (31))){
var inst_21283 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21285__$1,inst_21283);
} else {
if((state_val_21286 === (32))){
var inst_21239 = (state_21285[(16)]);
var inst_21244 = inst_21239.cljs$lang$protocol_mask$partition0$;
var inst_21245 = (inst_21244 & (64));
var inst_21246 = inst_21239.cljs$core$ISeq$;
var inst_21247 = (inst_21245) || (inst_21246);
var state_21285__$1 = state_21285;
if(cljs.core.truth_(inst_21247)){
var statearr_21305_21388 = state_21285__$1;
(statearr_21305_21388[(1)] = (35));

} else {
var statearr_21306_21389 = state_21285__$1;
(statearr_21306_21389[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (40))){
var inst_21260 = (state_21285[(20)]);
var inst_21259 = (state_21285[(2)]);
var inst_21260__$1 = cljs.core.get.call(null,inst_21259,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_21261 = cljs.core.get.call(null,inst_21259,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_21262 = cljs.core.not_empty.call(null,inst_21260__$1);
var state_21285__$1 = (function (){var statearr_21307 = state_21285;
(statearr_21307[(21)] = inst_21261);

(statearr_21307[(20)] = inst_21260__$1);

return statearr_21307;
})();
if(cljs.core.truth_(inst_21262)){
var statearr_21308_21390 = state_21285__$1;
(statearr_21308_21390[(1)] = (41));

} else {
var statearr_21309_21391 = state_21285__$1;
(statearr_21309_21391[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (33))){
var state_21285__$1 = state_21285;
var statearr_21310_21392 = state_21285__$1;
(statearr_21310_21392[(2)] = false);

(statearr_21310_21392[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (13))){
var inst_21159 = (state_21285[(22)]);
var inst_21163 = cljs.core.chunk_first.call(null,inst_21159);
var inst_21164 = cljs.core.chunk_rest.call(null,inst_21159);
var inst_21165 = cljs.core.count.call(null,inst_21163);
var inst_21146 = inst_21164;
var inst_21147 = inst_21163;
var inst_21148 = inst_21165;
var inst_21149 = (0);
var state_21285__$1 = (function (){var statearr_21311 = state_21285;
(statearr_21311[(7)] = inst_21149);

(statearr_21311[(8)] = inst_21146);

(statearr_21311[(9)] = inst_21148);

(statearr_21311[(10)] = inst_21147);

return statearr_21311;
})();
var statearr_21312_21393 = state_21285__$1;
(statearr_21312_21393[(2)] = null);

(statearr_21312_21393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (22))){
var inst_21203 = (state_21285[(23)]);
var inst_21207 = (state_21285[(24)]);
var inst_21202 = (state_21285[(25)]);
var inst_21199 = (state_21285[(19)]);
var inst_21202__$1 = (state_21285[(2)]);
var inst_21203__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21202__$1);
var inst_21204 = (function (){var all_files = inst_21199;
var res_SINGLEQUOTE_ = inst_21202__$1;
var res = inst_21203__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21203,inst_21207,inst_21202,inst_21199,inst_21202__$1,inst_21203__$1,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20882_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20882_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21203,inst_21207,inst_21202,inst_21199,inst_21202__$1,inst_21203__$1,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21205 = cljs.core.filter.call(null,inst_21204,inst_21202__$1);
var inst_21206 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_21207__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_21206);
var inst_21208 = cljs.core.not_empty.call(null,inst_21207__$1);
var state_21285__$1 = (function (){var statearr_21313 = state_21285;
(statearr_21313[(26)] = inst_21205);

(statearr_21313[(23)] = inst_21203__$1);

(statearr_21313[(24)] = inst_21207__$1);

(statearr_21313[(25)] = inst_21202__$1);

return statearr_21313;
})();
if(cljs.core.truth_(inst_21208)){
var statearr_21314_21394 = state_21285__$1;
(statearr_21314_21394[(1)] = (23));

} else {
var statearr_21315_21395 = state_21285__$1;
(statearr_21315_21395[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (36))){
var state_21285__$1 = state_21285;
var statearr_21316_21396 = state_21285__$1;
(statearr_21316_21396[(2)] = false);

(statearr_21316_21396[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (41))){
var inst_21260 = (state_21285[(20)]);
var inst_21264 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_21265 = cljs.core.map.call(null,inst_21264,inst_21260);
var inst_21266 = cljs.core.pr_str.call(null,inst_21265);
var inst_21267 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21266)].join('');
var inst_21268 = figwheel.client.utils.log.call(null,inst_21267);
var state_21285__$1 = state_21285;
var statearr_21317_21397 = state_21285__$1;
(statearr_21317_21397[(2)] = inst_21268);

(statearr_21317_21397[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (43))){
var inst_21261 = (state_21285[(21)]);
var inst_21271 = (state_21285[(2)]);
var inst_21272 = cljs.core.not_empty.call(null,inst_21261);
var state_21285__$1 = (function (){var statearr_21318 = state_21285;
(statearr_21318[(27)] = inst_21271);

return statearr_21318;
})();
if(cljs.core.truth_(inst_21272)){
var statearr_21319_21398 = state_21285__$1;
(statearr_21319_21398[(1)] = (44));

} else {
var statearr_21320_21399 = state_21285__$1;
(statearr_21320_21399[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (29))){
var inst_21205 = (state_21285[(26)]);
var inst_21203 = (state_21285[(23)]);
var inst_21207 = (state_21285[(24)]);
var inst_21202 = (state_21285[(25)]);
var inst_21199 = (state_21285[(19)]);
var inst_21239 = (state_21285[(16)]);
var inst_21235 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_21238 = (function (){var all_files = inst_21199;
var res_SINGLEQUOTE_ = inst_21202;
var res = inst_21203;
var files_not_loaded = inst_21205;
var dependencies_that_loaded = inst_21207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21239,inst_21235,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21237){
var map__21321 = p__21237;
var map__21321__$1 = ((((!((map__21321 == null)))?((((map__21321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21321):map__21321);
var namespace = cljs.core.get.call(null,map__21321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21239,inst_21235,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21239__$1 = cljs.core.group_by.call(null,inst_21238,inst_21205);
var inst_21241 = (inst_21239__$1 == null);
var inst_21242 = cljs.core.not.call(null,inst_21241);
var state_21285__$1 = (function (){var statearr_21323 = state_21285;
(statearr_21323[(28)] = inst_21235);

(statearr_21323[(16)] = inst_21239__$1);

return statearr_21323;
})();
if(inst_21242){
var statearr_21324_21400 = state_21285__$1;
(statearr_21324_21400[(1)] = (32));

} else {
var statearr_21325_21401 = state_21285__$1;
(statearr_21325_21401[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (44))){
var inst_21261 = (state_21285[(21)]);
var inst_21274 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_21261);
var inst_21275 = cljs.core.pr_str.call(null,inst_21274);
var inst_21276 = [cljs.core.str("not required: "),cljs.core.str(inst_21275)].join('');
var inst_21277 = figwheel.client.utils.log.call(null,inst_21276);
var state_21285__$1 = state_21285;
var statearr_21326_21402 = state_21285__$1;
(statearr_21326_21402[(2)] = inst_21277);

(statearr_21326_21402[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (6))){
var inst_21180 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21327_21403 = state_21285__$1;
(statearr_21327_21403[(2)] = inst_21180);

(statearr_21327_21403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (28))){
var inst_21205 = (state_21285[(26)]);
var inst_21232 = (state_21285[(2)]);
var inst_21233 = cljs.core.not_empty.call(null,inst_21205);
var state_21285__$1 = (function (){var statearr_21328 = state_21285;
(statearr_21328[(29)] = inst_21232);

return statearr_21328;
})();
if(cljs.core.truth_(inst_21233)){
var statearr_21329_21404 = state_21285__$1;
(statearr_21329_21404[(1)] = (29));

} else {
var statearr_21330_21405 = state_21285__$1;
(statearr_21330_21405[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (25))){
var inst_21203 = (state_21285[(23)]);
var inst_21219 = (state_21285[(2)]);
var inst_21220 = cljs.core.not_empty.call(null,inst_21203);
var state_21285__$1 = (function (){var statearr_21331 = state_21285;
(statearr_21331[(30)] = inst_21219);

return statearr_21331;
})();
if(cljs.core.truth_(inst_21220)){
var statearr_21332_21406 = state_21285__$1;
(statearr_21332_21406[(1)] = (26));

} else {
var statearr_21333_21407 = state_21285__$1;
(statearr_21333_21407[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (34))){
var inst_21254 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
if(cljs.core.truth_(inst_21254)){
var statearr_21334_21408 = state_21285__$1;
(statearr_21334_21408[(1)] = (38));

} else {
var statearr_21335_21409 = state_21285__$1;
(statearr_21335_21409[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (17))){
var state_21285__$1 = state_21285;
var statearr_21336_21410 = state_21285__$1;
(statearr_21336_21410[(2)] = recompile_dependents);

(statearr_21336_21410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (3))){
var state_21285__$1 = state_21285;
var statearr_21337_21411 = state_21285__$1;
(statearr_21337_21411[(2)] = null);

(statearr_21337_21411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (12))){
var inst_21176 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21338_21412 = state_21285__$1;
(statearr_21338_21412[(2)] = inst_21176);

(statearr_21338_21412[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (2))){
var inst_21138 = (state_21285[(13)]);
var inst_21145 = cljs.core.seq.call(null,inst_21138);
var inst_21146 = inst_21145;
var inst_21147 = null;
var inst_21148 = (0);
var inst_21149 = (0);
var state_21285__$1 = (function (){var statearr_21339 = state_21285;
(statearr_21339[(7)] = inst_21149);

(statearr_21339[(8)] = inst_21146);

(statearr_21339[(9)] = inst_21148);

(statearr_21339[(10)] = inst_21147);

return statearr_21339;
})();
var statearr_21340_21413 = state_21285__$1;
(statearr_21340_21413[(2)] = null);

(statearr_21340_21413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (23))){
var inst_21205 = (state_21285[(26)]);
var inst_21203 = (state_21285[(23)]);
var inst_21207 = (state_21285[(24)]);
var inst_21202 = (state_21285[(25)]);
var inst_21199 = (state_21285[(19)]);
var inst_21210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_21212 = (function (){var all_files = inst_21199;
var res_SINGLEQUOTE_ = inst_21202;
var res = inst_21203;
var files_not_loaded = inst_21205;
var dependencies_that_loaded = inst_21207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21210,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21211){
var map__21341 = p__21211;
var map__21341__$1 = ((((!((map__21341 == null)))?((((map__21341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21341):map__21341);
var request_url = cljs.core.get.call(null,map__21341__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21210,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21213 = cljs.core.reverse.call(null,inst_21207);
var inst_21214 = cljs.core.map.call(null,inst_21212,inst_21213);
var inst_21215 = cljs.core.pr_str.call(null,inst_21214);
var inst_21216 = figwheel.client.utils.log.call(null,inst_21215);
var state_21285__$1 = (function (){var statearr_21343 = state_21285;
(statearr_21343[(31)] = inst_21210);

return statearr_21343;
})();
var statearr_21344_21414 = state_21285__$1;
(statearr_21344_21414[(2)] = inst_21216);

(statearr_21344_21414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (35))){
var state_21285__$1 = state_21285;
var statearr_21345_21415 = state_21285__$1;
(statearr_21345_21415[(2)] = true);

(statearr_21345_21415[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (19))){
var inst_21189 = (state_21285[(12)]);
var inst_21195 = figwheel.client.file_reloading.expand_files.call(null,inst_21189);
var state_21285__$1 = state_21285;
var statearr_21346_21416 = state_21285__$1;
(statearr_21346_21416[(2)] = inst_21195);

(statearr_21346_21416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (11))){
var state_21285__$1 = state_21285;
var statearr_21347_21417 = state_21285__$1;
(statearr_21347_21417[(2)] = null);

(statearr_21347_21417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (9))){
var inst_21178 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21348_21418 = state_21285__$1;
(statearr_21348_21418[(2)] = inst_21178);

(statearr_21348_21418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (5))){
var inst_21149 = (state_21285[(7)]);
var inst_21148 = (state_21285[(9)]);
var inst_21151 = (inst_21149 < inst_21148);
var inst_21152 = inst_21151;
var state_21285__$1 = state_21285;
if(cljs.core.truth_(inst_21152)){
var statearr_21349_21419 = state_21285__$1;
(statearr_21349_21419[(1)] = (7));

} else {
var statearr_21350_21420 = state_21285__$1;
(statearr_21350_21420[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (14))){
var inst_21159 = (state_21285[(22)]);
var inst_21168 = cljs.core.first.call(null,inst_21159);
var inst_21169 = figwheel.client.file_reloading.eval_body.call(null,inst_21168,opts);
var inst_21170 = cljs.core.next.call(null,inst_21159);
var inst_21146 = inst_21170;
var inst_21147 = null;
var inst_21148 = (0);
var inst_21149 = (0);
var state_21285__$1 = (function (){var statearr_21351 = state_21285;
(statearr_21351[(7)] = inst_21149);

(statearr_21351[(8)] = inst_21146);

(statearr_21351[(9)] = inst_21148);

(statearr_21351[(32)] = inst_21169);

(statearr_21351[(10)] = inst_21147);

return statearr_21351;
})();
var statearr_21352_21421 = state_21285__$1;
(statearr_21352_21421[(2)] = null);

(statearr_21352_21421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (45))){
var state_21285__$1 = state_21285;
var statearr_21353_21422 = state_21285__$1;
(statearr_21353_21422[(2)] = null);

(statearr_21353_21422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (26))){
var inst_21205 = (state_21285[(26)]);
var inst_21203 = (state_21285[(23)]);
var inst_21207 = (state_21285[(24)]);
var inst_21202 = (state_21285[(25)]);
var inst_21199 = (state_21285[(19)]);
var inst_21222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_21224 = (function (){var all_files = inst_21199;
var res_SINGLEQUOTE_ = inst_21202;
var res = inst_21203;
var files_not_loaded = inst_21205;
var dependencies_that_loaded = inst_21207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21222,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21223){
var map__21354 = p__21223;
var map__21354__$1 = ((((!((map__21354 == null)))?((((map__21354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21354):map__21354);
var namespace = cljs.core.get.call(null,map__21354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__21354__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21222,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21225 = cljs.core.map.call(null,inst_21224,inst_21203);
var inst_21226 = cljs.core.pr_str.call(null,inst_21225);
var inst_21227 = figwheel.client.utils.log.call(null,inst_21226);
var inst_21228 = (function (){var all_files = inst_21199;
var res_SINGLEQUOTE_ = inst_21202;
var res = inst_21203;
var files_not_loaded = inst_21205;
var dependencies_that_loaded = inst_21207;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21222,inst_21224,inst_21225,inst_21226,inst_21227,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21205,inst_21203,inst_21207,inst_21202,inst_21199,inst_21222,inst_21224,inst_21225,inst_21226,inst_21227,state_val_21286,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21229 = setTimeout(inst_21228,(10));
var state_21285__$1 = (function (){var statearr_21356 = state_21285;
(statearr_21356[(33)] = inst_21227);

(statearr_21356[(34)] = inst_21222);

return statearr_21356;
})();
var statearr_21357_21423 = state_21285__$1;
(statearr_21357_21423[(2)] = inst_21229);

(statearr_21357_21423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (16))){
var state_21285__$1 = state_21285;
var statearr_21358_21424 = state_21285__$1;
(statearr_21358_21424[(2)] = reload_dependents);

(statearr_21358_21424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (38))){
var inst_21239 = (state_21285[(16)]);
var inst_21256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21239);
var state_21285__$1 = state_21285;
var statearr_21359_21425 = state_21285__$1;
(statearr_21359_21425[(2)] = inst_21256);

(statearr_21359_21425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (30))){
var state_21285__$1 = state_21285;
var statearr_21360_21426 = state_21285__$1;
(statearr_21360_21426[(2)] = null);

(statearr_21360_21426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (10))){
var inst_21159 = (state_21285[(22)]);
var inst_21161 = cljs.core.chunked_seq_QMARK_.call(null,inst_21159);
var state_21285__$1 = state_21285;
if(inst_21161){
var statearr_21361_21427 = state_21285__$1;
(statearr_21361_21427[(1)] = (13));

} else {
var statearr_21362_21428 = state_21285__$1;
(statearr_21362_21428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (18))){
var inst_21193 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
if(cljs.core.truth_(inst_21193)){
var statearr_21363_21429 = state_21285__$1;
(statearr_21363_21429[(1)] = (19));

} else {
var statearr_21364_21430 = state_21285__$1;
(statearr_21364_21430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (42))){
var state_21285__$1 = state_21285;
var statearr_21365_21431 = state_21285__$1;
(statearr_21365_21431[(2)] = null);

(statearr_21365_21431[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (37))){
var inst_21251 = (state_21285[(2)]);
var state_21285__$1 = state_21285;
var statearr_21366_21432 = state_21285__$1;
(statearr_21366_21432[(2)] = inst_21251);

(statearr_21366_21432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21286 === (8))){
var inst_21159 = (state_21285[(22)]);
var inst_21146 = (state_21285[(8)]);
var inst_21159__$1 = cljs.core.seq.call(null,inst_21146);
var state_21285__$1 = (function (){var statearr_21367 = state_21285;
(statearr_21367[(22)] = inst_21159__$1);

return statearr_21367;
})();
if(inst_21159__$1){
var statearr_21368_21433 = state_21285__$1;
(statearr_21368_21433[(1)] = (10));

} else {
var statearr_21369_21434 = state_21285__$1;
(statearr_21369_21434[(1)] = (11));

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
});})(c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20391__auto__,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto____0 = (function (){
var statearr_21373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21373[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto__);

(statearr_21373[(1)] = (1));

return statearr_21373;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto____1 = (function (state_21285){
while(true){
var ret_value__20393__auto__ = (function (){try{while(true){
var result__20394__auto__ = switch__20391__auto__.call(null,state_21285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20394__auto__;
}
break;
}
}catch (e21374){if((e21374 instanceof Object)){
var ex__20395__auto__ = e21374;
var statearr_21375_21435 = state_21285;
(statearr_21375_21435[(5)] = ex__20395__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21436 = state_21285;
state_21285 = G__21436;
continue;
} else {
return ret_value__20393__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto__ = function(state_21285){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto____1.call(this,state_21285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20392__auto__;
})()
;})(switch__20391__auto__,c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20414__auto__ = (function (){var statearr_21376 = f__20413__auto__.call(null);
(statearr_21376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20412__auto__);

return statearr_21376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20414__auto__);
});})(c__20412__auto__,map__21131,map__21131__$1,opts,before_jsload,on_jsload,reload_dependents,map__21132,map__21132__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20412__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21439,link){
var map__21442 = p__21439;
var map__21442__$1 = ((((!((map__21442 == null)))?((((map__21442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21442):map__21442);
var file = cljs.core.get.call(null,map__21442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__21442,map__21442__$1,file){
return (function (p1__21437_SHARP_,p2__21438_SHARP_){
if(cljs.core._EQ_.call(null,p1__21437_SHARP_,p2__21438_SHARP_)){
return p1__21437_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__21442,map__21442__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21448){
var map__21449 = p__21448;
var map__21449__$1 = ((((!((map__21449 == null)))?((((map__21449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21449):map__21449);
var match_length = cljs.core.get.call(null,map__21449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21444_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21444_SHARP_);
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
var args21451 = [];
var len__19434__auto___21454 = arguments.length;
var i__19435__auto___21455 = (0);
while(true){
if((i__19435__auto___21455 < len__19434__auto___21454)){
args21451.push((arguments[i__19435__auto___21455]));

var G__21456 = (i__19435__auto___21455 + (1));
i__19435__auto___21455 = G__21456;
continue;
} else {
}
break;
}

var G__21453 = args21451.length;
switch (G__21453) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21451.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__21458_SHARP_,p2__21459_SHARP_){
return cljs.core.assoc.call(null,p1__21458_SHARP_,cljs.core.get.call(null,p2__21459_SHARP_,key),p2__21459_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21460){
var map__21463 = p__21460;
var map__21463__$1 = ((((!((map__21463 == null)))?((((map__21463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21463):map__21463);
var f_data = map__21463__$1;
var file = cljs.core.get.call(null,map__21463__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21465,files_msg){
var map__21472 = p__21465;
var map__21472__$1 = ((((!((map__21472 == null)))?((((map__21472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21472):map__21472);
var opts = map__21472__$1;
var on_cssload = cljs.core.get.call(null,map__21472__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__21474_21478 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21475_21479 = null;
var count__21476_21480 = (0);
var i__21477_21481 = (0);
while(true){
if((i__21477_21481 < count__21476_21480)){
var f_21482 = cljs.core._nth.call(null,chunk__21475_21479,i__21477_21481);
figwheel.client.file_reloading.reload_css_file.call(null,f_21482);

var G__21483 = seq__21474_21478;
var G__21484 = chunk__21475_21479;
var G__21485 = count__21476_21480;
var G__21486 = (i__21477_21481 + (1));
seq__21474_21478 = G__21483;
chunk__21475_21479 = G__21484;
count__21476_21480 = G__21485;
i__21477_21481 = G__21486;
continue;
} else {
var temp__4657__auto___21487 = cljs.core.seq.call(null,seq__21474_21478);
if(temp__4657__auto___21487){
var seq__21474_21488__$1 = temp__4657__auto___21487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21474_21488__$1)){
var c__19179__auto___21489 = cljs.core.chunk_first.call(null,seq__21474_21488__$1);
var G__21490 = cljs.core.chunk_rest.call(null,seq__21474_21488__$1);
var G__21491 = c__19179__auto___21489;
var G__21492 = cljs.core.count.call(null,c__19179__auto___21489);
var G__21493 = (0);
seq__21474_21478 = G__21490;
chunk__21475_21479 = G__21491;
count__21476_21480 = G__21492;
i__21477_21481 = G__21493;
continue;
} else {
var f_21494 = cljs.core.first.call(null,seq__21474_21488__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21494);

var G__21495 = cljs.core.next.call(null,seq__21474_21488__$1);
var G__21496 = null;
var G__21497 = (0);
var G__21498 = (0);
seq__21474_21478 = G__21495;
chunk__21475_21479 = G__21496;
count__21476_21480 = G__21497;
i__21477_21481 = G__21498;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__21472,map__21472__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__21472,map__21472__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1460522275119