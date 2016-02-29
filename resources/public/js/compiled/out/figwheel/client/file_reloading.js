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
var or__35516__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__35516__auto__){
return or__35516__auto__;
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
var or__35516__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47344_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47344_SHARP_));
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
var seq__47349 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47350 = null;
var count__47351 = (0);
var i__47352 = (0);
while(true){
if((i__47352 < count__47351)){
var n = cljs.core._nth.call(null,chunk__47350,i__47352);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47353 = seq__47349;
var G__47354 = chunk__47350;
var G__47355 = count__47351;
var G__47356 = (i__47352 + (1));
seq__47349 = G__47353;
chunk__47350 = G__47354;
count__47351 = G__47355;
i__47352 = G__47356;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__47349);
if(temp__4425__auto__){
var seq__47349__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47349__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__47349__$1);
var G__47357 = cljs.core.chunk_rest.call(null,seq__47349__$1);
var G__47358 = c__36319__auto__;
var G__47359 = cljs.core.count.call(null,c__36319__auto__);
var G__47360 = (0);
seq__47349 = G__47357;
chunk__47350 = G__47358;
count__47351 = G__47359;
i__47352 = G__47360;
continue;
} else {
var n = cljs.core.first.call(null,seq__47349__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47361 = cljs.core.next.call(null,seq__47349__$1);
var G__47362 = null;
var G__47363 = (0);
var G__47364 = (0);
seq__47349 = G__47361;
chunk__47350 = G__47362;
count__47351 = G__47363;
i__47352 = G__47364;
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

var seq__47403_47410 = cljs.core.seq.call(null,deps);
var chunk__47404_47411 = null;
var count__47405_47412 = (0);
var i__47406_47413 = (0);
while(true){
if((i__47406_47413 < count__47405_47412)){
var dep_47414 = cljs.core._nth.call(null,chunk__47404_47411,i__47406_47413);
topo_sort_helper_STAR_.call(null,dep_47414,(depth + (1)),state);

var G__47415 = seq__47403_47410;
var G__47416 = chunk__47404_47411;
var G__47417 = count__47405_47412;
var G__47418 = (i__47406_47413 + (1));
seq__47403_47410 = G__47415;
chunk__47404_47411 = G__47416;
count__47405_47412 = G__47417;
i__47406_47413 = G__47418;
continue;
} else {
var temp__4425__auto___47419 = cljs.core.seq.call(null,seq__47403_47410);
if(temp__4425__auto___47419){
var seq__47403_47420__$1 = temp__4425__auto___47419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47403_47420__$1)){
var c__36319__auto___47421 = cljs.core.chunk_first.call(null,seq__47403_47420__$1);
var G__47422 = cljs.core.chunk_rest.call(null,seq__47403_47420__$1);
var G__47423 = c__36319__auto___47421;
var G__47424 = cljs.core.count.call(null,c__36319__auto___47421);
var G__47425 = (0);
seq__47403_47410 = G__47422;
chunk__47404_47411 = G__47423;
count__47405_47412 = G__47424;
i__47406_47413 = G__47425;
continue;
} else {
var dep_47426 = cljs.core.first.call(null,seq__47403_47420__$1);
topo_sort_helper_STAR_.call(null,dep_47426,(depth + (1)),state);

var G__47427 = cljs.core.next.call(null,seq__47403_47420__$1);
var G__47428 = null;
var G__47429 = (0);
var G__47430 = (0);
seq__47403_47410 = G__47427;
chunk__47404_47411 = G__47428;
count__47405_47412 = G__47429;
i__47406_47413 = G__47430;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47407){
var vec__47409 = p__47407;
var x = cljs.core.nth.call(null,vec__47409,(0),null);
var xs = cljs.core.nthnext.call(null,vec__47409,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47409,x,xs,get_deps__$1){
return (function (p1__47365_SHARP_){
return clojure.set.difference.call(null,p1__47365_SHARP_,x);
});})(vec__47409,x,xs,get_deps__$1))
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
var seq__47443 = cljs.core.seq.call(null,provides);
var chunk__47444 = null;
var count__47445 = (0);
var i__47446 = (0);
while(true){
if((i__47446 < count__47445)){
var prov = cljs.core._nth.call(null,chunk__47444,i__47446);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47447_47455 = cljs.core.seq.call(null,requires);
var chunk__47448_47456 = null;
var count__47449_47457 = (0);
var i__47450_47458 = (0);
while(true){
if((i__47450_47458 < count__47449_47457)){
var req_47459 = cljs.core._nth.call(null,chunk__47448_47456,i__47450_47458);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47459,prov);

var G__47460 = seq__47447_47455;
var G__47461 = chunk__47448_47456;
var G__47462 = count__47449_47457;
var G__47463 = (i__47450_47458 + (1));
seq__47447_47455 = G__47460;
chunk__47448_47456 = G__47461;
count__47449_47457 = G__47462;
i__47450_47458 = G__47463;
continue;
} else {
var temp__4425__auto___47464 = cljs.core.seq.call(null,seq__47447_47455);
if(temp__4425__auto___47464){
var seq__47447_47465__$1 = temp__4425__auto___47464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47447_47465__$1)){
var c__36319__auto___47466 = cljs.core.chunk_first.call(null,seq__47447_47465__$1);
var G__47467 = cljs.core.chunk_rest.call(null,seq__47447_47465__$1);
var G__47468 = c__36319__auto___47466;
var G__47469 = cljs.core.count.call(null,c__36319__auto___47466);
var G__47470 = (0);
seq__47447_47455 = G__47467;
chunk__47448_47456 = G__47468;
count__47449_47457 = G__47469;
i__47450_47458 = G__47470;
continue;
} else {
var req_47471 = cljs.core.first.call(null,seq__47447_47465__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47471,prov);

var G__47472 = cljs.core.next.call(null,seq__47447_47465__$1);
var G__47473 = null;
var G__47474 = (0);
var G__47475 = (0);
seq__47447_47455 = G__47472;
chunk__47448_47456 = G__47473;
count__47449_47457 = G__47474;
i__47450_47458 = G__47475;
continue;
}
} else {
}
}
break;
}

var G__47476 = seq__47443;
var G__47477 = chunk__47444;
var G__47478 = count__47445;
var G__47479 = (i__47446 + (1));
seq__47443 = G__47476;
chunk__47444 = G__47477;
count__47445 = G__47478;
i__47446 = G__47479;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__47443);
if(temp__4425__auto__){
var seq__47443__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47443__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__47443__$1);
var G__47480 = cljs.core.chunk_rest.call(null,seq__47443__$1);
var G__47481 = c__36319__auto__;
var G__47482 = cljs.core.count.call(null,c__36319__auto__);
var G__47483 = (0);
seq__47443 = G__47480;
chunk__47444 = G__47481;
count__47445 = G__47482;
i__47446 = G__47483;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47443__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47451_47484 = cljs.core.seq.call(null,requires);
var chunk__47452_47485 = null;
var count__47453_47486 = (0);
var i__47454_47487 = (0);
while(true){
if((i__47454_47487 < count__47453_47486)){
var req_47488 = cljs.core._nth.call(null,chunk__47452_47485,i__47454_47487);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47488,prov);

var G__47489 = seq__47451_47484;
var G__47490 = chunk__47452_47485;
var G__47491 = count__47453_47486;
var G__47492 = (i__47454_47487 + (1));
seq__47451_47484 = G__47489;
chunk__47452_47485 = G__47490;
count__47453_47486 = G__47491;
i__47454_47487 = G__47492;
continue;
} else {
var temp__4425__auto___47493__$1 = cljs.core.seq.call(null,seq__47451_47484);
if(temp__4425__auto___47493__$1){
var seq__47451_47494__$1 = temp__4425__auto___47493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47451_47494__$1)){
var c__36319__auto___47495 = cljs.core.chunk_first.call(null,seq__47451_47494__$1);
var G__47496 = cljs.core.chunk_rest.call(null,seq__47451_47494__$1);
var G__47497 = c__36319__auto___47495;
var G__47498 = cljs.core.count.call(null,c__36319__auto___47495);
var G__47499 = (0);
seq__47451_47484 = G__47496;
chunk__47452_47485 = G__47497;
count__47453_47486 = G__47498;
i__47454_47487 = G__47499;
continue;
} else {
var req_47500 = cljs.core.first.call(null,seq__47451_47494__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47500,prov);

var G__47501 = cljs.core.next.call(null,seq__47451_47494__$1);
var G__47502 = null;
var G__47503 = (0);
var G__47504 = (0);
seq__47451_47484 = G__47501;
chunk__47452_47485 = G__47502;
count__47453_47486 = G__47503;
i__47454_47487 = G__47504;
continue;
}
} else {
}
}
break;
}

var G__47505 = cljs.core.next.call(null,seq__47443__$1);
var G__47506 = null;
var G__47507 = (0);
var G__47508 = (0);
seq__47443 = G__47505;
chunk__47444 = G__47506;
count__47445 = G__47507;
i__47446 = G__47508;
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
var seq__47513_47517 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47514_47518 = null;
var count__47515_47519 = (0);
var i__47516_47520 = (0);
while(true){
if((i__47516_47520 < count__47515_47519)){
var ns_47521 = cljs.core._nth.call(null,chunk__47514_47518,i__47516_47520);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47521);

var G__47522 = seq__47513_47517;
var G__47523 = chunk__47514_47518;
var G__47524 = count__47515_47519;
var G__47525 = (i__47516_47520 + (1));
seq__47513_47517 = G__47522;
chunk__47514_47518 = G__47523;
count__47515_47519 = G__47524;
i__47516_47520 = G__47525;
continue;
} else {
var temp__4425__auto___47526 = cljs.core.seq.call(null,seq__47513_47517);
if(temp__4425__auto___47526){
var seq__47513_47527__$1 = temp__4425__auto___47526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47513_47527__$1)){
var c__36319__auto___47528 = cljs.core.chunk_first.call(null,seq__47513_47527__$1);
var G__47529 = cljs.core.chunk_rest.call(null,seq__47513_47527__$1);
var G__47530 = c__36319__auto___47528;
var G__47531 = cljs.core.count.call(null,c__36319__auto___47528);
var G__47532 = (0);
seq__47513_47517 = G__47529;
chunk__47514_47518 = G__47530;
count__47515_47519 = G__47531;
i__47516_47520 = G__47532;
continue;
} else {
var ns_47533 = cljs.core.first.call(null,seq__47513_47527__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47533);

var G__47534 = cljs.core.next.call(null,seq__47513_47527__$1);
var G__47535 = null;
var G__47536 = (0);
var G__47537 = (0);
seq__47513_47517 = G__47534;
chunk__47514_47518 = G__47535;
count__47515_47519 = G__47536;
i__47516_47520 = G__47537;
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
goog.require_figwheel_backup_ = (function (){var or__35516__auto__ = goog.require__;
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
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
var G__47538__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47539__i = 0, G__47539__a = new Array(arguments.length -  0);
while (G__47539__i < G__47539__a.length) {G__47539__a[G__47539__i] = arguments[G__47539__i + 0]; ++G__47539__i;}
  args = new cljs.core.IndexedSeq(G__47539__a,0);
} 
return G__47538__delegate.call(this,args);};
G__47538.cljs$lang$maxFixedArity = 0;
G__47538.cljs$lang$applyTo = (function (arglist__47540){
var args = cljs.core.seq(arglist__47540);
return G__47538__delegate(args);
});
G__47538.cljs$core$IFn$_invoke$arity$variadic = G__47538__delegate;
return G__47538;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47542 = cljs.core._EQ_;
var expr__47543 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47542.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47543))){
var path_parts = ((function (pred__47542,expr__47543){
return (function (p1__47541_SHARP_){
return clojure.string.split.call(null,p1__47541_SHARP_,/[\/\\]/);
});})(pred__47542,expr__47543))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47542,expr__47543){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47545){if((e47545 instanceof Error)){
var e = e47545;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47545;

}
}})());
});
;})(path_parts,sep,root,pred__47542,expr__47543))
} else {
if(cljs.core.truth_(pred__47542.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47543))){
return ((function (pred__47542,expr__47543){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__47542,expr__47543){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47542,expr__47543))
);

return deferred.addErrback(((function (deferred,pred__47542,expr__47543){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47542,expr__47543))
);
});
;})(pred__47542,expr__47543))
} else {
return ((function (pred__47542,expr__47543){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47542,expr__47543))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47546,callback){
var map__47549 = p__47546;
var map__47549__$1 = ((((!((map__47549 == null)))?((((map__47549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47549):map__47549);
var file_msg = map__47549__$1;
var request_url = cljs.core.get.call(null,map__47549__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47549,map__47549__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47549,map__47549__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__){
return (function (state_47573){
var state_val_47574 = (state_47573[(1)]);
if((state_val_47574 === (7))){
var inst_47569 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
var statearr_47575_47595 = state_47573__$1;
(statearr_47575_47595[(2)] = inst_47569);

(statearr_47575_47595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (1))){
var state_47573__$1 = state_47573;
var statearr_47576_47596 = state_47573__$1;
(statearr_47576_47596[(2)] = null);

(statearr_47576_47596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (4))){
var inst_47553 = (state_47573[(7)]);
var inst_47553__$1 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47577 = state_47573;
(statearr_47577[(7)] = inst_47553__$1);

return statearr_47577;
})();
if(cljs.core.truth_(inst_47553__$1)){
var statearr_47578_47597 = state_47573__$1;
(statearr_47578_47597[(1)] = (5));

} else {
var statearr_47579_47598 = state_47573__$1;
(statearr_47579_47598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (6))){
var state_47573__$1 = state_47573;
var statearr_47580_47599 = state_47573__$1;
(statearr_47580_47599[(2)] = null);

(statearr_47580_47599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (3))){
var inst_47571 = (state_47573[(2)]);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47573__$1,inst_47571);
} else {
if((state_val_47574 === (2))){
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47573__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47574 === (11))){
var inst_47565 = (state_47573[(2)]);
var state_47573__$1 = (function (){var statearr_47581 = state_47573;
(statearr_47581[(8)] = inst_47565);

return statearr_47581;
})();
var statearr_47582_47600 = state_47573__$1;
(statearr_47582_47600[(2)] = null);

(statearr_47582_47600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (9))){
var inst_47557 = (state_47573[(9)]);
var inst_47559 = (state_47573[(10)]);
var inst_47561 = inst_47559.call(null,inst_47557);
var state_47573__$1 = state_47573;
var statearr_47583_47601 = state_47573__$1;
(statearr_47583_47601[(2)] = inst_47561);

(statearr_47583_47601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (5))){
var inst_47553 = (state_47573[(7)]);
var inst_47555 = figwheel.client.file_reloading.blocking_load.call(null,inst_47553);
var state_47573__$1 = state_47573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47573__$1,(8),inst_47555);
} else {
if((state_val_47574 === (10))){
var inst_47557 = (state_47573[(9)]);
var inst_47563 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47557);
var state_47573__$1 = state_47573;
var statearr_47584_47602 = state_47573__$1;
(statearr_47584_47602[(2)] = inst_47563);

(statearr_47584_47602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47574 === (8))){
var inst_47553 = (state_47573[(7)]);
var inst_47559 = (state_47573[(10)]);
var inst_47557 = (state_47573[(2)]);
var inst_47558 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47559__$1 = cljs.core.get.call(null,inst_47558,inst_47553);
var state_47573__$1 = (function (){var statearr_47585 = state_47573;
(statearr_47585[(9)] = inst_47557);

(statearr_47585[(10)] = inst_47559__$1);

return statearr_47585;
})();
if(cljs.core.truth_(inst_47559__$1)){
var statearr_47586_47603 = state_47573__$1;
(statearr_47586_47603[(1)] = (9));

} else {
var statearr_47587_47604 = state_47573__$1;
(statearr_47587_47604[(1)] = (10));

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
});})(c__37632__auto__))
;
return ((function (switch__37611__auto__,c__37632__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37612__auto__ = null;
var figwheel$client$file_reloading$state_machine__37612__auto____0 = (function (){
var statearr_47591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47591[(0)] = figwheel$client$file_reloading$state_machine__37612__auto__);

(statearr_47591[(1)] = (1));

return statearr_47591;
});
var figwheel$client$file_reloading$state_machine__37612__auto____1 = (function (state_47573){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_47573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e47592){if((e47592 instanceof Object)){
var ex__37615__auto__ = e47592;
var statearr_47593_47605 = state_47573;
(statearr_47593_47605[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47606 = state_47573;
state_47573 = G__47606;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37612__auto__ = function(state_47573){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37612__auto____1.call(this,state_47573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37612__auto____0;
figwheel$client$file_reloading$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37612__auto____1;
return figwheel$client$file_reloading$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_47594 = f__37633__auto__.call(null);
(statearr_47594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_47594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__))
);

return c__37632__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47607,callback){
var map__47610 = p__47607;
var map__47610__$1 = ((((!((map__47610 == null)))?((((map__47610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47610):map__47610);
var file_msg = map__47610__$1;
var namespace = cljs.core.get.call(null,map__47610__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47610,map__47610__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47610,map__47610__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47612){
var map__47615 = p__47612;
var map__47615__$1 = ((((!((map__47615 == null)))?((((map__47615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47615):map__47615);
var file_msg = map__47615__$1;
var namespace = cljs.core.get.call(null,map__47615__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__35504__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__35504__auto__){
var or__35516__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35516__auto__)){
return or__35516__auto__;
} else {
var or__35516__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35516__auto____$1)){
return or__35516__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__35504__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47617,callback){
var map__47620 = p__47617;
var map__47620__$1 = ((((!((map__47620 == null)))?((((map__47620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47620):map__47620);
var file_msg = map__47620__$1;
var request_url = cljs.core.get.call(null,map__47620__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37632__auto___47708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___47708,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___47708,out){
return (function (state_47690){
var state_val_47691 = (state_47690[(1)]);
if((state_val_47691 === (1))){
var inst_47668 = cljs.core.nth.call(null,files,(0),null);
var inst_47669 = cljs.core.nthnext.call(null,files,(1));
var inst_47670 = files;
var state_47690__$1 = (function (){var statearr_47692 = state_47690;
(statearr_47692[(7)] = inst_47670);

(statearr_47692[(8)] = inst_47669);

(statearr_47692[(9)] = inst_47668);

return statearr_47692;
})();
var statearr_47693_47709 = state_47690__$1;
(statearr_47693_47709[(2)] = null);

(statearr_47693_47709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47691 === (2))){
var inst_47670 = (state_47690[(7)]);
var inst_47673 = (state_47690[(10)]);
var inst_47673__$1 = cljs.core.nth.call(null,inst_47670,(0),null);
var inst_47674 = cljs.core.nthnext.call(null,inst_47670,(1));
var inst_47675 = (inst_47673__$1 == null);
var inst_47676 = cljs.core.not.call(null,inst_47675);
var state_47690__$1 = (function (){var statearr_47694 = state_47690;
(statearr_47694[(11)] = inst_47674);

(statearr_47694[(10)] = inst_47673__$1);

return statearr_47694;
})();
if(inst_47676){
var statearr_47695_47710 = state_47690__$1;
(statearr_47695_47710[(1)] = (4));

} else {
var statearr_47696_47711 = state_47690__$1;
(statearr_47696_47711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47691 === (3))){
var inst_47688 = (state_47690[(2)]);
var state_47690__$1 = state_47690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47690__$1,inst_47688);
} else {
if((state_val_47691 === (4))){
var inst_47673 = (state_47690[(10)]);
var inst_47678 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47673);
var state_47690__$1 = state_47690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47690__$1,(7),inst_47678);
} else {
if((state_val_47691 === (5))){
var inst_47684 = cljs.core.async.close_BANG_.call(null,out);
var state_47690__$1 = state_47690;
var statearr_47697_47712 = state_47690__$1;
(statearr_47697_47712[(2)] = inst_47684);

(statearr_47697_47712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47691 === (6))){
var inst_47686 = (state_47690[(2)]);
var state_47690__$1 = state_47690;
var statearr_47698_47713 = state_47690__$1;
(statearr_47698_47713[(2)] = inst_47686);

(statearr_47698_47713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47691 === (7))){
var inst_47674 = (state_47690[(11)]);
var inst_47680 = (state_47690[(2)]);
var inst_47681 = cljs.core.async.put_BANG_.call(null,out,inst_47680);
var inst_47670 = inst_47674;
var state_47690__$1 = (function (){var statearr_47699 = state_47690;
(statearr_47699[(7)] = inst_47670);

(statearr_47699[(12)] = inst_47681);

return statearr_47699;
})();
var statearr_47700_47714 = state_47690__$1;
(statearr_47700_47714[(2)] = null);

(statearr_47700_47714[(1)] = (2));


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
});})(c__37632__auto___47708,out))
;
return ((function (switch__37611__auto__,c__37632__auto___47708,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____0 = (function (){
var statearr_47704 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47704[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__);

(statearr_47704[(1)] = (1));

return statearr_47704;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____1 = (function (state_47690){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_47690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e47705){if((e47705 instanceof Object)){
var ex__37615__auto__ = e47705;
var statearr_47706_47715 = state_47690;
(statearr_47706_47715[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47716 = state_47690;
state_47690 = G__47716;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__ = function(state_47690){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____1.call(this,state_47690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___47708,out))
})();
var state__37634__auto__ = (function (){var statearr_47707 = f__37633__auto__.call(null);
(statearr_47707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___47708);

return statearr_47707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___47708,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47717,opts){
var map__47721 = p__47717;
var map__47721__$1 = ((((!((map__47721 == null)))?((((map__47721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47721):map__47721);
var eval_body__$1 = cljs.core.get.call(null,map__47721__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__35504__auto__ = eval_body__$1;
if(cljs.core.truth_(and__35504__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__35504__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47723){var e = e47723;
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
return (function (p1__47724_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47724_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47729){
var vec__47730 = p__47729;
var k = cljs.core.nth.call(null,vec__47730,(0),null);
var v = cljs.core.nth.call(null,vec__47730,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47731){
var vec__47732 = p__47731;
var k = cljs.core.nth.call(null,vec__47732,(0),null);
var v = cljs.core.nth.call(null,vec__47732,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47736,p__47737){
var map__47984 = p__47736;
var map__47984__$1 = ((((!((map__47984 == null)))?((((map__47984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47984):map__47984);
var opts = map__47984__$1;
var before_jsload = cljs.core.get.call(null,map__47984__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47984__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47984__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47985 = p__47737;
var map__47985__$1 = ((((!((map__47985 == null)))?((((map__47985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47985):map__47985);
var msg = map__47985__$1;
var files = cljs.core.get.call(null,map__47985__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47985__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47985__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_48138){
var state_val_48139 = (state_48138[(1)]);
if((state_val_48139 === (7))){
var inst_47999 = (state_48138[(7)]);
var inst_48001 = (state_48138[(8)]);
var inst_48000 = (state_48138[(9)]);
var inst_48002 = (state_48138[(10)]);
var inst_48007 = cljs.core._nth.call(null,inst_48000,inst_48002);
var inst_48008 = figwheel.client.file_reloading.eval_body.call(null,inst_48007,opts);
var inst_48009 = (inst_48002 + (1));
var tmp48140 = inst_47999;
var tmp48141 = inst_48001;
var tmp48142 = inst_48000;
var inst_47999__$1 = tmp48140;
var inst_48000__$1 = tmp48142;
var inst_48001__$1 = tmp48141;
var inst_48002__$1 = inst_48009;
var state_48138__$1 = (function (){var statearr_48143 = state_48138;
(statearr_48143[(11)] = inst_48008);

(statearr_48143[(7)] = inst_47999__$1);

(statearr_48143[(8)] = inst_48001__$1);

(statearr_48143[(9)] = inst_48000__$1);

(statearr_48143[(10)] = inst_48002__$1);

return statearr_48143;
})();
var statearr_48144_48230 = state_48138__$1;
(statearr_48144_48230[(2)] = null);

(statearr_48144_48230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (20))){
var inst_48042 = (state_48138[(12)]);
var inst_48050 = figwheel.client.file_reloading.sort_files.call(null,inst_48042);
var state_48138__$1 = state_48138;
var statearr_48145_48231 = state_48138__$1;
(statearr_48145_48231[(2)] = inst_48050);

(statearr_48145_48231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (27))){
var state_48138__$1 = state_48138;
var statearr_48146_48232 = state_48138__$1;
(statearr_48146_48232[(2)] = null);

(statearr_48146_48232[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (1))){
var inst_47991 = (state_48138[(13)]);
var inst_47988 = before_jsload.call(null,files);
var inst_47989 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47990 = (function (){return ((function (inst_47991,inst_47988,inst_47989,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47733_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47733_SHARP_);
});
;})(inst_47991,inst_47988,inst_47989,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47991__$1 = cljs.core.filter.call(null,inst_47990,files);
var inst_47992 = cljs.core.not_empty.call(null,inst_47991__$1);
var state_48138__$1 = (function (){var statearr_48147 = state_48138;
(statearr_48147[(14)] = inst_47989);

(statearr_48147[(13)] = inst_47991__$1);

(statearr_48147[(15)] = inst_47988);

return statearr_48147;
})();
if(cljs.core.truth_(inst_47992)){
var statearr_48148_48233 = state_48138__$1;
(statearr_48148_48233[(1)] = (2));

} else {
var statearr_48149_48234 = state_48138__$1;
(statearr_48149_48234[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (24))){
var state_48138__$1 = state_48138;
var statearr_48150_48235 = state_48138__$1;
(statearr_48150_48235[(2)] = null);

(statearr_48150_48235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (39))){
var inst_48092 = (state_48138[(16)]);
var state_48138__$1 = state_48138;
var statearr_48151_48236 = state_48138__$1;
(statearr_48151_48236[(2)] = inst_48092);

(statearr_48151_48236[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (46))){
var inst_48133 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48152_48237 = state_48138__$1;
(statearr_48152_48237[(2)] = inst_48133);

(statearr_48152_48237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (4))){
var inst_48036 = (state_48138[(2)]);
var inst_48037 = cljs.core.List.EMPTY;
var inst_48038 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48037);
var inst_48039 = (function (){return ((function (inst_48036,inst_48037,inst_48038,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47734_SHARP_){
var and__35504__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47734_SHARP_);
if(cljs.core.truth_(and__35504__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47734_SHARP_));
} else {
return and__35504__auto__;
}
});
;})(inst_48036,inst_48037,inst_48038,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48040 = cljs.core.filter.call(null,inst_48039,files);
var inst_48041 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48042 = cljs.core.concat.call(null,inst_48040,inst_48041);
var state_48138__$1 = (function (){var statearr_48153 = state_48138;
(statearr_48153[(12)] = inst_48042);

(statearr_48153[(17)] = inst_48036);

(statearr_48153[(18)] = inst_48038);

return statearr_48153;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48154_48238 = state_48138__$1;
(statearr_48154_48238[(1)] = (16));

} else {
var statearr_48155_48239 = state_48138__$1;
(statearr_48155_48239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (15))){
var inst_48026 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48156_48240 = state_48138__$1;
(statearr_48156_48240[(2)] = inst_48026);

(statearr_48156_48240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (21))){
var inst_48052 = (state_48138[(19)]);
var inst_48052__$1 = (state_48138[(2)]);
var inst_48053 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48052__$1);
var state_48138__$1 = (function (){var statearr_48157 = state_48138;
(statearr_48157[(19)] = inst_48052__$1);

return statearr_48157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48138__$1,(22),inst_48053);
} else {
if((state_val_48139 === (31))){
var inst_48136 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48138__$1,inst_48136);
} else {
if((state_val_48139 === (32))){
var inst_48092 = (state_48138[(16)]);
var inst_48097 = inst_48092.cljs$lang$protocol_mask$partition0$;
var inst_48098 = (inst_48097 & (64));
var inst_48099 = inst_48092.cljs$core$ISeq$;
var inst_48100 = (inst_48098) || (inst_48099);
var state_48138__$1 = state_48138;
if(cljs.core.truth_(inst_48100)){
var statearr_48158_48241 = state_48138__$1;
(statearr_48158_48241[(1)] = (35));

} else {
var statearr_48159_48242 = state_48138__$1;
(statearr_48159_48242[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (40))){
var inst_48113 = (state_48138[(20)]);
var inst_48112 = (state_48138[(2)]);
var inst_48113__$1 = cljs.core.get.call(null,inst_48112,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48114 = cljs.core.get.call(null,inst_48112,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48115 = cljs.core.not_empty.call(null,inst_48113__$1);
var state_48138__$1 = (function (){var statearr_48160 = state_48138;
(statearr_48160[(21)] = inst_48114);

(statearr_48160[(20)] = inst_48113__$1);

return statearr_48160;
})();
if(cljs.core.truth_(inst_48115)){
var statearr_48161_48243 = state_48138__$1;
(statearr_48161_48243[(1)] = (41));

} else {
var statearr_48162_48244 = state_48138__$1;
(statearr_48162_48244[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (33))){
var state_48138__$1 = state_48138;
var statearr_48163_48245 = state_48138__$1;
(statearr_48163_48245[(2)] = false);

(statearr_48163_48245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (13))){
var inst_48012 = (state_48138[(22)]);
var inst_48016 = cljs.core.chunk_first.call(null,inst_48012);
var inst_48017 = cljs.core.chunk_rest.call(null,inst_48012);
var inst_48018 = cljs.core.count.call(null,inst_48016);
var inst_47999 = inst_48017;
var inst_48000 = inst_48016;
var inst_48001 = inst_48018;
var inst_48002 = (0);
var state_48138__$1 = (function (){var statearr_48164 = state_48138;
(statearr_48164[(7)] = inst_47999);

(statearr_48164[(8)] = inst_48001);

(statearr_48164[(9)] = inst_48000);

(statearr_48164[(10)] = inst_48002);

return statearr_48164;
})();
var statearr_48165_48246 = state_48138__$1;
(statearr_48165_48246[(2)] = null);

(statearr_48165_48246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (22))){
var inst_48055 = (state_48138[(23)]);
var inst_48052 = (state_48138[(19)]);
var inst_48056 = (state_48138[(24)]);
var inst_48060 = (state_48138[(25)]);
var inst_48055__$1 = (state_48138[(2)]);
var inst_48056__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48055__$1);
var inst_48057 = (function (){var all_files = inst_48052;
var res_SINGLEQUOTE_ = inst_48055__$1;
var res = inst_48056__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_48055,inst_48052,inst_48056,inst_48060,inst_48055__$1,inst_48056__$1,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47735_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47735_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_48055,inst_48052,inst_48056,inst_48060,inst_48055__$1,inst_48056__$1,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48058 = cljs.core.filter.call(null,inst_48057,inst_48055__$1);
var inst_48059 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48060__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48059);
var inst_48061 = cljs.core.not_empty.call(null,inst_48060__$1);
var state_48138__$1 = (function (){var statearr_48166 = state_48138;
(statearr_48166[(23)] = inst_48055__$1);

(statearr_48166[(24)] = inst_48056__$1);

(statearr_48166[(26)] = inst_48058);

(statearr_48166[(25)] = inst_48060__$1);

return statearr_48166;
})();
if(cljs.core.truth_(inst_48061)){
var statearr_48167_48247 = state_48138__$1;
(statearr_48167_48247[(1)] = (23));

} else {
var statearr_48168_48248 = state_48138__$1;
(statearr_48168_48248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (36))){
var state_48138__$1 = state_48138;
var statearr_48169_48249 = state_48138__$1;
(statearr_48169_48249[(2)] = false);

(statearr_48169_48249[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (41))){
var inst_48113 = (state_48138[(20)]);
var inst_48117 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48118 = cljs.core.map.call(null,inst_48117,inst_48113);
var inst_48119 = cljs.core.pr_str.call(null,inst_48118);
var inst_48120 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_48119)].join('');
var inst_48121 = figwheel.client.utils.log.call(null,inst_48120);
var state_48138__$1 = state_48138;
var statearr_48170_48250 = state_48138__$1;
(statearr_48170_48250[(2)] = inst_48121);

(statearr_48170_48250[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (43))){
var inst_48114 = (state_48138[(21)]);
var inst_48124 = (state_48138[(2)]);
var inst_48125 = cljs.core.not_empty.call(null,inst_48114);
var state_48138__$1 = (function (){var statearr_48171 = state_48138;
(statearr_48171[(27)] = inst_48124);

return statearr_48171;
})();
if(cljs.core.truth_(inst_48125)){
var statearr_48172_48251 = state_48138__$1;
(statearr_48172_48251[(1)] = (44));

} else {
var statearr_48173_48252 = state_48138__$1;
(statearr_48173_48252[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (29))){
var inst_48055 = (state_48138[(23)]);
var inst_48092 = (state_48138[(16)]);
var inst_48052 = (state_48138[(19)]);
var inst_48056 = (state_48138[(24)]);
var inst_48058 = (state_48138[(26)]);
var inst_48060 = (state_48138[(25)]);
var inst_48088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48091 = (function (){var all_files = inst_48052;
var res_SINGLEQUOTE_ = inst_48055;
var res = inst_48056;
var files_not_loaded = inst_48058;
var dependencies_that_loaded = inst_48060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48092,inst_48052,inst_48056,inst_48058,inst_48060,inst_48088,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48090){
var map__48174 = p__48090;
var map__48174__$1 = ((((!((map__48174 == null)))?((((map__48174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48174):map__48174);
var namespace = cljs.core.get.call(null,map__48174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48092,inst_48052,inst_48056,inst_48058,inst_48060,inst_48088,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48092__$1 = cljs.core.group_by.call(null,inst_48091,inst_48058);
var inst_48094 = (inst_48092__$1 == null);
var inst_48095 = cljs.core.not.call(null,inst_48094);
var state_48138__$1 = (function (){var statearr_48176 = state_48138;
(statearr_48176[(16)] = inst_48092__$1);

(statearr_48176[(28)] = inst_48088);

return statearr_48176;
})();
if(inst_48095){
var statearr_48177_48253 = state_48138__$1;
(statearr_48177_48253[(1)] = (32));

} else {
var statearr_48178_48254 = state_48138__$1;
(statearr_48178_48254[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (44))){
var inst_48114 = (state_48138[(21)]);
var inst_48127 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48114);
var inst_48128 = cljs.core.pr_str.call(null,inst_48127);
var inst_48129 = [cljs.core.str("not required: "),cljs.core.str(inst_48128)].join('');
var inst_48130 = figwheel.client.utils.log.call(null,inst_48129);
var state_48138__$1 = state_48138;
var statearr_48179_48255 = state_48138__$1;
(statearr_48179_48255[(2)] = inst_48130);

(statearr_48179_48255[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (6))){
var inst_48033 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48180_48256 = state_48138__$1;
(statearr_48180_48256[(2)] = inst_48033);

(statearr_48180_48256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (28))){
var inst_48058 = (state_48138[(26)]);
var inst_48085 = (state_48138[(2)]);
var inst_48086 = cljs.core.not_empty.call(null,inst_48058);
var state_48138__$1 = (function (){var statearr_48181 = state_48138;
(statearr_48181[(29)] = inst_48085);

return statearr_48181;
})();
if(cljs.core.truth_(inst_48086)){
var statearr_48182_48257 = state_48138__$1;
(statearr_48182_48257[(1)] = (29));

} else {
var statearr_48183_48258 = state_48138__$1;
(statearr_48183_48258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (25))){
var inst_48056 = (state_48138[(24)]);
var inst_48072 = (state_48138[(2)]);
var inst_48073 = cljs.core.not_empty.call(null,inst_48056);
var state_48138__$1 = (function (){var statearr_48184 = state_48138;
(statearr_48184[(30)] = inst_48072);

return statearr_48184;
})();
if(cljs.core.truth_(inst_48073)){
var statearr_48185_48259 = state_48138__$1;
(statearr_48185_48259[(1)] = (26));

} else {
var statearr_48186_48260 = state_48138__$1;
(statearr_48186_48260[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (34))){
var inst_48107 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
if(cljs.core.truth_(inst_48107)){
var statearr_48187_48261 = state_48138__$1;
(statearr_48187_48261[(1)] = (38));

} else {
var statearr_48188_48262 = state_48138__$1;
(statearr_48188_48262[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (17))){
var state_48138__$1 = state_48138;
var statearr_48189_48263 = state_48138__$1;
(statearr_48189_48263[(2)] = recompile_dependents);

(statearr_48189_48263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (3))){
var state_48138__$1 = state_48138;
var statearr_48190_48264 = state_48138__$1;
(statearr_48190_48264[(2)] = null);

(statearr_48190_48264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (12))){
var inst_48029 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48191_48265 = state_48138__$1;
(statearr_48191_48265[(2)] = inst_48029);

(statearr_48191_48265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (2))){
var inst_47991 = (state_48138[(13)]);
var inst_47998 = cljs.core.seq.call(null,inst_47991);
var inst_47999 = inst_47998;
var inst_48000 = null;
var inst_48001 = (0);
var inst_48002 = (0);
var state_48138__$1 = (function (){var statearr_48192 = state_48138;
(statearr_48192[(7)] = inst_47999);

(statearr_48192[(8)] = inst_48001);

(statearr_48192[(9)] = inst_48000);

(statearr_48192[(10)] = inst_48002);

return statearr_48192;
})();
var statearr_48193_48266 = state_48138__$1;
(statearr_48193_48266[(2)] = null);

(statearr_48193_48266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (23))){
var inst_48055 = (state_48138[(23)]);
var inst_48052 = (state_48138[(19)]);
var inst_48056 = (state_48138[(24)]);
var inst_48058 = (state_48138[(26)]);
var inst_48060 = (state_48138[(25)]);
var inst_48063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48065 = (function (){var all_files = inst_48052;
var res_SINGLEQUOTE_ = inst_48055;
var res = inst_48056;
var files_not_loaded = inst_48058;
var dependencies_that_loaded = inst_48060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48052,inst_48056,inst_48058,inst_48060,inst_48063,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48064){
var map__48194 = p__48064;
var map__48194__$1 = ((((!((map__48194 == null)))?((((map__48194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48194):map__48194);
var request_url = cljs.core.get.call(null,map__48194__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48052,inst_48056,inst_48058,inst_48060,inst_48063,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48066 = cljs.core.reverse.call(null,inst_48060);
var inst_48067 = cljs.core.map.call(null,inst_48065,inst_48066);
var inst_48068 = cljs.core.pr_str.call(null,inst_48067);
var inst_48069 = figwheel.client.utils.log.call(null,inst_48068);
var state_48138__$1 = (function (){var statearr_48196 = state_48138;
(statearr_48196[(31)] = inst_48063);

return statearr_48196;
})();
var statearr_48197_48267 = state_48138__$1;
(statearr_48197_48267[(2)] = inst_48069);

(statearr_48197_48267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (35))){
var state_48138__$1 = state_48138;
var statearr_48198_48268 = state_48138__$1;
(statearr_48198_48268[(2)] = true);

(statearr_48198_48268[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (19))){
var inst_48042 = (state_48138[(12)]);
var inst_48048 = figwheel.client.file_reloading.expand_files.call(null,inst_48042);
var state_48138__$1 = state_48138;
var statearr_48199_48269 = state_48138__$1;
(statearr_48199_48269[(2)] = inst_48048);

(statearr_48199_48269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (11))){
var state_48138__$1 = state_48138;
var statearr_48200_48270 = state_48138__$1;
(statearr_48200_48270[(2)] = null);

(statearr_48200_48270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (9))){
var inst_48031 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48201_48271 = state_48138__$1;
(statearr_48201_48271[(2)] = inst_48031);

(statearr_48201_48271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (5))){
var inst_48001 = (state_48138[(8)]);
var inst_48002 = (state_48138[(10)]);
var inst_48004 = (inst_48002 < inst_48001);
var inst_48005 = inst_48004;
var state_48138__$1 = state_48138;
if(cljs.core.truth_(inst_48005)){
var statearr_48202_48272 = state_48138__$1;
(statearr_48202_48272[(1)] = (7));

} else {
var statearr_48203_48273 = state_48138__$1;
(statearr_48203_48273[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (14))){
var inst_48012 = (state_48138[(22)]);
var inst_48021 = cljs.core.first.call(null,inst_48012);
var inst_48022 = figwheel.client.file_reloading.eval_body.call(null,inst_48021,opts);
var inst_48023 = cljs.core.next.call(null,inst_48012);
var inst_47999 = inst_48023;
var inst_48000 = null;
var inst_48001 = (0);
var inst_48002 = (0);
var state_48138__$1 = (function (){var statearr_48204 = state_48138;
(statearr_48204[(7)] = inst_47999);

(statearr_48204[(8)] = inst_48001);

(statearr_48204[(9)] = inst_48000);

(statearr_48204[(32)] = inst_48022);

(statearr_48204[(10)] = inst_48002);

return statearr_48204;
})();
var statearr_48205_48274 = state_48138__$1;
(statearr_48205_48274[(2)] = null);

(statearr_48205_48274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (45))){
var state_48138__$1 = state_48138;
var statearr_48206_48275 = state_48138__$1;
(statearr_48206_48275[(2)] = null);

(statearr_48206_48275[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (26))){
var inst_48055 = (state_48138[(23)]);
var inst_48052 = (state_48138[(19)]);
var inst_48056 = (state_48138[(24)]);
var inst_48058 = (state_48138[(26)]);
var inst_48060 = (state_48138[(25)]);
var inst_48075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48077 = (function (){var all_files = inst_48052;
var res_SINGLEQUOTE_ = inst_48055;
var res = inst_48056;
var files_not_loaded = inst_48058;
var dependencies_that_loaded = inst_48060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48052,inst_48056,inst_48058,inst_48060,inst_48075,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__48076){
var map__48207 = p__48076;
var map__48207__$1 = ((((!((map__48207 == null)))?((((map__48207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48207):map__48207);
var namespace = cljs.core.get.call(null,map__48207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48207__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48052,inst_48056,inst_48058,inst_48060,inst_48075,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48078 = cljs.core.map.call(null,inst_48077,inst_48056);
var inst_48079 = cljs.core.pr_str.call(null,inst_48078);
var inst_48080 = figwheel.client.utils.log.call(null,inst_48079);
var inst_48081 = (function (){var all_files = inst_48052;
var res_SINGLEQUOTE_ = inst_48055;
var res = inst_48056;
var files_not_loaded = inst_48058;
var dependencies_that_loaded = inst_48060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48052,inst_48056,inst_48058,inst_48060,inst_48075,inst_48077,inst_48078,inst_48079,inst_48080,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_48055,inst_48052,inst_48056,inst_48058,inst_48060,inst_48075,inst_48077,inst_48078,inst_48079,inst_48080,state_val_48139,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_48082 = setTimeout(inst_48081,(10));
var state_48138__$1 = (function (){var statearr_48209 = state_48138;
(statearr_48209[(33)] = inst_48080);

(statearr_48209[(34)] = inst_48075);

return statearr_48209;
})();
var statearr_48210_48276 = state_48138__$1;
(statearr_48210_48276[(2)] = inst_48082);

(statearr_48210_48276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (16))){
var state_48138__$1 = state_48138;
var statearr_48211_48277 = state_48138__$1;
(statearr_48211_48277[(2)] = reload_dependents);

(statearr_48211_48277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (38))){
var inst_48092 = (state_48138[(16)]);
var inst_48109 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48092);
var state_48138__$1 = state_48138;
var statearr_48212_48278 = state_48138__$1;
(statearr_48212_48278[(2)] = inst_48109);

(statearr_48212_48278[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (30))){
var state_48138__$1 = state_48138;
var statearr_48213_48279 = state_48138__$1;
(statearr_48213_48279[(2)] = null);

(statearr_48213_48279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (10))){
var inst_48012 = (state_48138[(22)]);
var inst_48014 = cljs.core.chunked_seq_QMARK_.call(null,inst_48012);
var state_48138__$1 = state_48138;
if(inst_48014){
var statearr_48214_48280 = state_48138__$1;
(statearr_48214_48280[(1)] = (13));

} else {
var statearr_48215_48281 = state_48138__$1;
(statearr_48215_48281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (18))){
var inst_48046 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
if(cljs.core.truth_(inst_48046)){
var statearr_48216_48282 = state_48138__$1;
(statearr_48216_48282[(1)] = (19));

} else {
var statearr_48217_48283 = state_48138__$1;
(statearr_48217_48283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (42))){
var state_48138__$1 = state_48138;
var statearr_48218_48284 = state_48138__$1;
(statearr_48218_48284[(2)] = null);

(statearr_48218_48284[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (37))){
var inst_48104 = (state_48138[(2)]);
var state_48138__$1 = state_48138;
var statearr_48219_48285 = state_48138__$1;
(statearr_48219_48285[(2)] = inst_48104);

(statearr_48219_48285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48139 === (8))){
var inst_48012 = (state_48138[(22)]);
var inst_47999 = (state_48138[(7)]);
var inst_48012__$1 = cljs.core.seq.call(null,inst_47999);
var state_48138__$1 = (function (){var statearr_48220 = state_48138;
(statearr_48220[(22)] = inst_48012__$1);

return statearr_48220;
})();
if(inst_48012__$1){
var statearr_48221_48286 = state_48138__$1;
(statearr_48221_48286[(1)] = (10));

} else {
var statearr_48222_48287 = state_48138__$1;
(statearr_48222_48287[(1)] = (11));

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
});})(c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37611__auto__,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____0 = (function (){
var statearr_48226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48226[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__);

(statearr_48226[(1)] = (1));

return statearr_48226;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____1 = (function (state_48138){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_48138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e48227){if((e48227 instanceof Object)){
var ex__37615__auto__ = e48227;
var statearr_48228_48288 = state_48138;
(statearr_48228_48288[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48289 = state_48138;
state_48138 = G__48289;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__ = function(state_48138){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____1.call(this,state_48138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37634__auto__ = (function (){var statearr_48229 = f__37633__auto__.call(null);
(statearr_48229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_48229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__,map__47984,map__47984__$1,opts,before_jsload,on_jsload,reload_dependents,map__47985,map__47985__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37632__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48292,link){
var map__48295 = p__48292;
var map__48295__$1 = ((((!((map__48295 == null)))?((((map__48295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48295):map__48295);
var file = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__48295,map__48295__$1,file){
return (function (p1__48290_SHARP_,p2__48291_SHARP_){
if(cljs.core._EQ_.call(null,p1__48290_SHARP_,p2__48291_SHARP_)){
return p1__48290_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__48295,map__48295__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48301){
var map__48302 = p__48301;
var map__48302__$1 = ((((!((map__48302 == null)))?((((map__48302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48302):map__48302);
var match_length = cljs.core.get.call(null,map__48302__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48302__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48297_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48297_SHARP_);
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
var args48304 = [];
var len__36574__auto___48307 = arguments.length;
var i__36575__auto___48308 = (0);
while(true){
if((i__36575__auto___48308 < len__36574__auto___48307)){
args48304.push((arguments[i__36575__auto___48308]));

var G__48309 = (i__36575__auto___48308 + (1));
i__36575__auto___48308 = G__48309;
continue;
} else {
}
break;
}

var G__48306 = args48304.length;
switch (G__48306) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48304.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48311_SHARP_,p2__48312_SHARP_){
return cljs.core.assoc.call(null,p1__48311_SHARP_,cljs.core.get.call(null,p2__48312_SHARP_,key),p2__48312_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48313){
var map__48316 = p__48313;
var map__48316__$1 = ((((!((map__48316 == null)))?((((map__48316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48316):map__48316);
var f_data = map__48316__$1;
var file = cljs.core.get.call(null,map__48316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48318,files_msg){
var map__48325 = p__48318;
var map__48325__$1 = ((((!((map__48325 == null)))?((((map__48325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48325):map__48325);
var opts = map__48325__$1;
var on_cssload = cljs.core.get.call(null,map__48325__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48327_48331 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__48328_48332 = null;
var count__48329_48333 = (0);
var i__48330_48334 = (0);
while(true){
if((i__48330_48334 < count__48329_48333)){
var f_48335 = cljs.core._nth.call(null,chunk__48328_48332,i__48330_48334);
figwheel.client.file_reloading.reload_css_file.call(null,f_48335);

var G__48336 = seq__48327_48331;
var G__48337 = chunk__48328_48332;
var G__48338 = count__48329_48333;
var G__48339 = (i__48330_48334 + (1));
seq__48327_48331 = G__48336;
chunk__48328_48332 = G__48337;
count__48329_48333 = G__48338;
i__48330_48334 = G__48339;
continue;
} else {
var temp__4425__auto___48340 = cljs.core.seq.call(null,seq__48327_48331);
if(temp__4425__auto___48340){
var seq__48327_48341__$1 = temp__4425__auto___48340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48327_48341__$1)){
var c__36319__auto___48342 = cljs.core.chunk_first.call(null,seq__48327_48341__$1);
var G__48343 = cljs.core.chunk_rest.call(null,seq__48327_48341__$1);
var G__48344 = c__36319__auto___48342;
var G__48345 = cljs.core.count.call(null,c__36319__auto___48342);
var G__48346 = (0);
seq__48327_48331 = G__48343;
chunk__48328_48332 = G__48344;
count__48329_48333 = G__48345;
i__48330_48334 = G__48346;
continue;
} else {
var f_48347 = cljs.core.first.call(null,seq__48327_48341__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48347);

var G__48348 = cljs.core.next.call(null,seq__48327_48341__$1);
var G__48349 = null;
var G__48350 = (0);
var G__48351 = (0);
seq__48327_48331 = G__48348;
chunk__48328_48332 = G__48349;
count__48329_48333 = G__48350;
i__48330_48334 = G__48351;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48325,map__48325__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__48325,map__48325__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456711312298