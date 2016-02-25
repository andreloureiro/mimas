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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54288_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54288_SHARP_));
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
var seq__54293 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54294 = null;
var count__54295 = (0);
var i__54296 = (0);
while(true){
if((i__54296 < count__54295)){
var n = cljs.core._nth.call(null,chunk__54294,i__54296);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54297 = seq__54293;
var G__54298 = chunk__54294;
var G__54299 = count__54295;
var G__54300 = (i__54296 + (1));
seq__54293 = G__54297;
chunk__54294 = G__54298;
count__54295 = G__54299;
i__54296 = G__54300;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__54293);
if(temp__4425__auto__){
var seq__54293__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54293__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__54293__$1);
var G__54301 = cljs.core.chunk_rest.call(null,seq__54293__$1);
var G__54302 = c__36317__auto__;
var G__54303 = cljs.core.count.call(null,c__36317__auto__);
var G__54304 = (0);
seq__54293 = G__54301;
chunk__54294 = G__54302;
count__54295 = G__54303;
i__54296 = G__54304;
continue;
} else {
var n = cljs.core.first.call(null,seq__54293__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54305 = cljs.core.next.call(null,seq__54293__$1);
var G__54306 = null;
var G__54307 = (0);
var G__54308 = (0);
seq__54293 = G__54305;
chunk__54294 = G__54306;
count__54295 = G__54307;
i__54296 = G__54308;
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

var seq__54347_54354 = cljs.core.seq.call(null,deps);
var chunk__54348_54355 = null;
var count__54349_54356 = (0);
var i__54350_54357 = (0);
while(true){
if((i__54350_54357 < count__54349_54356)){
var dep_54358 = cljs.core._nth.call(null,chunk__54348_54355,i__54350_54357);
topo_sort_helper_STAR_.call(null,dep_54358,(depth + (1)),state);

var G__54359 = seq__54347_54354;
var G__54360 = chunk__54348_54355;
var G__54361 = count__54349_54356;
var G__54362 = (i__54350_54357 + (1));
seq__54347_54354 = G__54359;
chunk__54348_54355 = G__54360;
count__54349_54356 = G__54361;
i__54350_54357 = G__54362;
continue;
} else {
var temp__4425__auto___54363 = cljs.core.seq.call(null,seq__54347_54354);
if(temp__4425__auto___54363){
var seq__54347_54364__$1 = temp__4425__auto___54363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54347_54364__$1)){
var c__36317__auto___54365 = cljs.core.chunk_first.call(null,seq__54347_54364__$1);
var G__54366 = cljs.core.chunk_rest.call(null,seq__54347_54364__$1);
var G__54367 = c__36317__auto___54365;
var G__54368 = cljs.core.count.call(null,c__36317__auto___54365);
var G__54369 = (0);
seq__54347_54354 = G__54366;
chunk__54348_54355 = G__54367;
count__54349_54356 = G__54368;
i__54350_54357 = G__54369;
continue;
} else {
var dep_54370 = cljs.core.first.call(null,seq__54347_54364__$1);
topo_sort_helper_STAR_.call(null,dep_54370,(depth + (1)),state);

var G__54371 = cljs.core.next.call(null,seq__54347_54364__$1);
var G__54372 = null;
var G__54373 = (0);
var G__54374 = (0);
seq__54347_54354 = G__54371;
chunk__54348_54355 = G__54372;
count__54349_54356 = G__54373;
i__54350_54357 = G__54374;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54351){
var vec__54353 = p__54351;
var x = cljs.core.nth.call(null,vec__54353,(0),null);
var xs = cljs.core.nthnext.call(null,vec__54353,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54353,x,xs,get_deps__$1){
return (function (p1__54309_SHARP_){
return clojure.set.difference.call(null,p1__54309_SHARP_,x);
});})(vec__54353,x,xs,get_deps__$1))
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
var seq__54387 = cljs.core.seq.call(null,provides);
var chunk__54388 = null;
var count__54389 = (0);
var i__54390 = (0);
while(true){
if((i__54390 < count__54389)){
var prov = cljs.core._nth.call(null,chunk__54388,i__54390);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54391_54399 = cljs.core.seq.call(null,requires);
var chunk__54392_54400 = null;
var count__54393_54401 = (0);
var i__54394_54402 = (0);
while(true){
if((i__54394_54402 < count__54393_54401)){
var req_54403 = cljs.core._nth.call(null,chunk__54392_54400,i__54394_54402);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54403,prov);

var G__54404 = seq__54391_54399;
var G__54405 = chunk__54392_54400;
var G__54406 = count__54393_54401;
var G__54407 = (i__54394_54402 + (1));
seq__54391_54399 = G__54404;
chunk__54392_54400 = G__54405;
count__54393_54401 = G__54406;
i__54394_54402 = G__54407;
continue;
} else {
var temp__4425__auto___54408 = cljs.core.seq.call(null,seq__54391_54399);
if(temp__4425__auto___54408){
var seq__54391_54409__$1 = temp__4425__auto___54408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54391_54409__$1)){
var c__36317__auto___54410 = cljs.core.chunk_first.call(null,seq__54391_54409__$1);
var G__54411 = cljs.core.chunk_rest.call(null,seq__54391_54409__$1);
var G__54412 = c__36317__auto___54410;
var G__54413 = cljs.core.count.call(null,c__36317__auto___54410);
var G__54414 = (0);
seq__54391_54399 = G__54411;
chunk__54392_54400 = G__54412;
count__54393_54401 = G__54413;
i__54394_54402 = G__54414;
continue;
} else {
var req_54415 = cljs.core.first.call(null,seq__54391_54409__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54415,prov);

var G__54416 = cljs.core.next.call(null,seq__54391_54409__$1);
var G__54417 = null;
var G__54418 = (0);
var G__54419 = (0);
seq__54391_54399 = G__54416;
chunk__54392_54400 = G__54417;
count__54393_54401 = G__54418;
i__54394_54402 = G__54419;
continue;
}
} else {
}
}
break;
}

var G__54420 = seq__54387;
var G__54421 = chunk__54388;
var G__54422 = count__54389;
var G__54423 = (i__54390 + (1));
seq__54387 = G__54420;
chunk__54388 = G__54421;
count__54389 = G__54422;
i__54390 = G__54423;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__54387);
if(temp__4425__auto__){
var seq__54387__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54387__$1)){
var c__36317__auto__ = cljs.core.chunk_first.call(null,seq__54387__$1);
var G__54424 = cljs.core.chunk_rest.call(null,seq__54387__$1);
var G__54425 = c__36317__auto__;
var G__54426 = cljs.core.count.call(null,c__36317__auto__);
var G__54427 = (0);
seq__54387 = G__54424;
chunk__54388 = G__54425;
count__54389 = G__54426;
i__54390 = G__54427;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54387__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54395_54428 = cljs.core.seq.call(null,requires);
var chunk__54396_54429 = null;
var count__54397_54430 = (0);
var i__54398_54431 = (0);
while(true){
if((i__54398_54431 < count__54397_54430)){
var req_54432 = cljs.core._nth.call(null,chunk__54396_54429,i__54398_54431);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54432,prov);

var G__54433 = seq__54395_54428;
var G__54434 = chunk__54396_54429;
var G__54435 = count__54397_54430;
var G__54436 = (i__54398_54431 + (1));
seq__54395_54428 = G__54433;
chunk__54396_54429 = G__54434;
count__54397_54430 = G__54435;
i__54398_54431 = G__54436;
continue;
} else {
var temp__4425__auto___54437__$1 = cljs.core.seq.call(null,seq__54395_54428);
if(temp__4425__auto___54437__$1){
var seq__54395_54438__$1 = temp__4425__auto___54437__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54395_54438__$1)){
var c__36317__auto___54439 = cljs.core.chunk_first.call(null,seq__54395_54438__$1);
var G__54440 = cljs.core.chunk_rest.call(null,seq__54395_54438__$1);
var G__54441 = c__36317__auto___54439;
var G__54442 = cljs.core.count.call(null,c__36317__auto___54439);
var G__54443 = (0);
seq__54395_54428 = G__54440;
chunk__54396_54429 = G__54441;
count__54397_54430 = G__54442;
i__54398_54431 = G__54443;
continue;
} else {
var req_54444 = cljs.core.first.call(null,seq__54395_54438__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54444,prov);

var G__54445 = cljs.core.next.call(null,seq__54395_54438__$1);
var G__54446 = null;
var G__54447 = (0);
var G__54448 = (0);
seq__54395_54428 = G__54445;
chunk__54396_54429 = G__54446;
count__54397_54430 = G__54447;
i__54398_54431 = G__54448;
continue;
}
} else {
}
}
break;
}

var G__54449 = cljs.core.next.call(null,seq__54387__$1);
var G__54450 = null;
var G__54451 = (0);
var G__54452 = (0);
seq__54387 = G__54449;
chunk__54388 = G__54450;
count__54389 = G__54451;
i__54390 = G__54452;
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
var seq__54457_54461 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54458_54462 = null;
var count__54459_54463 = (0);
var i__54460_54464 = (0);
while(true){
if((i__54460_54464 < count__54459_54463)){
var ns_54465 = cljs.core._nth.call(null,chunk__54458_54462,i__54460_54464);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54465);

var G__54466 = seq__54457_54461;
var G__54467 = chunk__54458_54462;
var G__54468 = count__54459_54463;
var G__54469 = (i__54460_54464 + (1));
seq__54457_54461 = G__54466;
chunk__54458_54462 = G__54467;
count__54459_54463 = G__54468;
i__54460_54464 = G__54469;
continue;
} else {
var temp__4425__auto___54470 = cljs.core.seq.call(null,seq__54457_54461);
if(temp__4425__auto___54470){
var seq__54457_54471__$1 = temp__4425__auto___54470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54457_54471__$1)){
var c__36317__auto___54472 = cljs.core.chunk_first.call(null,seq__54457_54471__$1);
var G__54473 = cljs.core.chunk_rest.call(null,seq__54457_54471__$1);
var G__54474 = c__36317__auto___54472;
var G__54475 = cljs.core.count.call(null,c__36317__auto___54472);
var G__54476 = (0);
seq__54457_54461 = G__54473;
chunk__54458_54462 = G__54474;
count__54459_54463 = G__54475;
i__54460_54464 = G__54476;
continue;
} else {
var ns_54477 = cljs.core.first.call(null,seq__54457_54471__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54477);

var G__54478 = cljs.core.next.call(null,seq__54457_54471__$1);
var G__54479 = null;
var G__54480 = (0);
var G__54481 = (0);
seq__54457_54461 = G__54478;
chunk__54458_54462 = G__54479;
count__54459_54463 = G__54480;
i__54460_54464 = G__54481;
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
var G__54482__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54483__i = 0, G__54483__a = new Array(arguments.length -  0);
while (G__54483__i < G__54483__a.length) {G__54483__a[G__54483__i] = arguments[G__54483__i + 0]; ++G__54483__i;}
  args = new cljs.core.IndexedSeq(G__54483__a,0);
} 
return G__54482__delegate.call(this,args);};
G__54482.cljs$lang$maxFixedArity = 0;
G__54482.cljs$lang$applyTo = (function (arglist__54484){
var args = cljs.core.seq(arglist__54484);
return G__54482__delegate(args);
});
G__54482.cljs$core$IFn$_invoke$arity$variadic = G__54482__delegate;
return G__54482;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54486 = cljs.core._EQ_;
var expr__54487 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54486.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__54487))){
var path_parts = ((function (pred__54486,expr__54487){
return (function (p1__54485_SHARP_){
return clojure.string.split.call(null,p1__54485_SHARP_,/[\/\\]/);
});})(pred__54486,expr__54487))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__54486,expr__54487){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54489){if((e54489 instanceof Error)){
var e = e54489;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54489;

}
}})());
});
;})(path_parts,sep,root,pred__54486,expr__54487))
} else {
if(cljs.core.truth_(pred__54486.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__54487))){
return ((function (pred__54486,expr__54487){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__54486,expr__54487){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__54486,expr__54487))
);

return deferred.addErrback(((function (deferred,pred__54486,expr__54487){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__54486,expr__54487))
);
});
;})(pred__54486,expr__54487))
} else {
return ((function (pred__54486,expr__54487){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54486,expr__54487))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54490,callback){
var map__54493 = p__54490;
var map__54493__$1 = ((((!((map__54493 == null)))?((((map__54493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54493):map__54493);
var file_msg = map__54493__$1;
var request_url = cljs.core.get.call(null,map__54493__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__54493,map__54493__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54493,map__54493__$1,file_msg,request_url))
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
return (function (state_54517){
var state_val_54518 = (state_54517[(1)]);
if((state_val_54518 === (7))){
var inst_54513 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
var statearr_54519_54539 = state_54517__$1;
(statearr_54519_54539[(2)] = inst_54513);

(statearr_54519_54539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (1))){
var state_54517__$1 = state_54517;
var statearr_54520_54540 = state_54517__$1;
(statearr_54520_54540[(2)] = null);

(statearr_54520_54540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (4))){
var inst_54497 = (state_54517[(7)]);
var inst_54497__$1 = (state_54517[(2)]);
var state_54517__$1 = (function (){var statearr_54521 = state_54517;
(statearr_54521[(7)] = inst_54497__$1);

return statearr_54521;
})();
if(cljs.core.truth_(inst_54497__$1)){
var statearr_54522_54541 = state_54517__$1;
(statearr_54522_54541[(1)] = (5));

} else {
var statearr_54523_54542 = state_54517__$1;
(statearr_54523_54542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (6))){
var state_54517__$1 = state_54517;
var statearr_54524_54543 = state_54517__$1;
(statearr_54524_54543[(2)] = null);

(statearr_54524_54543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (3))){
var inst_54515 = (state_54517[(2)]);
var state_54517__$1 = state_54517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54517__$1,inst_54515);
} else {
if((state_val_54518 === (2))){
var state_54517__$1 = state_54517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54517__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54518 === (11))){
var inst_54509 = (state_54517[(2)]);
var state_54517__$1 = (function (){var statearr_54525 = state_54517;
(statearr_54525[(8)] = inst_54509);

return statearr_54525;
})();
var statearr_54526_54544 = state_54517__$1;
(statearr_54526_54544[(2)] = null);

(statearr_54526_54544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (9))){
var inst_54503 = (state_54517[(9)]);
var inst_54501 = (state_54517[(10)]);
var inst_54505 = inst_54503.call(null,inst_54501);
var state_54517__$1 = state_54517;
var statearr_54527_54545 = state_54517__$1;
(statearr_54527_54545[(2)] = inst_54505);

(statearr_54527_54545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (5))){
var inst_54497 = (state_54517[(7)]);
var inst_54499 = figwheel.client.file_reloading.blocking_load.call(null,inst_54497);
var state_54517__$1 = state_54517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54517__$1,(8),inst_54499);
} else {
if((state_val_54518 === (10))){
var inst_54501 = (state_54517[(10)]);
var inst_54507 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54501);
var state_54517__$1 = state_54517;
var statearr_54528_54546 = state_54517__$1;
(statearr_54528_54546[(2)] = inst_54507);

(statearr_54528_54546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54518 === (8))){
var inst_54497 = (state_54517[(7)]);
var inst_54503 = (state_54517[(9)]);
var inst_54501 = (state_54517[(2)]);
var inst_54502 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54503__$1 = cljs.core.get.call(null,inst_54502,inst_54497);
var state_54517__$1 = (function (){var statearr_54529 = state_54517;
(statearr_54529[(9)] = inst_54503__$1);

(statearr_54529[(10)] = inst_54501);

return statearr_54529;
})();
if(cljs.core.truth_(inst_54503__$1)){
var statearr_54530_54547 = state_54517__$1;
(statearr_54530_54547[(1)] = (9));

} else {
var statearr_54531_54548 = state_54517__$1;
(statearr_54531_54548[(1)] = (10));

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
var statearr_54535 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54535[(0)] = figwheel$client$file_reloading$state_machine__37570__auto__);

(statearr_54535[(1)] = (1));

return statearr_54535;
});
var figwheel$client$file_reloading$state_machine__37570__auto____1 = (function (state_54517){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_54517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e54536){if((e54536 instanceof Object)){
var ex__37573__auto__ = e54536;
var statearr_54537_54549 = state_54517;
(statearr_54537_54549[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54550 = state_54517;
state_54517 = G__54550;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37570__auto__ = function(state_54517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37570__auto____1.call(this,state_54517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37570__auto____0;
figwheel$client$file_reloading$state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37570__auto____1;
return figwheel$client$file_reloading$state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__))
})();
var state__37683__auto__ = (function (){var statearr_54538 = f__37682__auto__.call(null);
(statearr_54538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_54538;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54551,callback){
var map__54554 = p__54551;
var map__54554__$1 = ((((!((map__54554 == null)))?((((map__54554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54554):map__54554);
var file_msg = map__54554__$1;
var namespace = cljs.core.get.call(null,map__54554__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54554,map__54554__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__54554,map__54554__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54556){
var map__54559 = p__54556;
var map__54559__$1 = ((((!((map__54559 == null)))?((((map__54559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54559):map__54559);
var file_msg = map__54559__$1;
var namespace = cljs.core.get.call(null,map__54559__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54561,callback){
var map__54564 = p__54561;
var map__54564__$1 = ((((!((map__54564 == null)))?((((map__54564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54564):map__54564);
var file_msg = map__54564__$1;
var request_url = cljs.core.get.call(null,map__54564__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__54564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37681__auto___54652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto___54652,out){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto___54652,out){
return (function (state_54634){
var state_val_54635 = (state_54634[(1)]);
if((state_val_54635 === (1))){
var inst_54612 = cljs.core.nth.call(null,files,(0),null);
var inst_54613 = cljs.core.nthnext.call(null,files,(1));
var inst_54614 = files;
var state_54634__$1 = (function (){var statearr_54636 = state_54634;
(statearr_54636[(7)] = inst_54614);

(statearr_54636[(8)] = inst_54612);

(statearr_54636[(9)] = inst_54613);

return statearr_54636;
})();
var statearr_54637_54653 = state_54634__$1;
(statearr_54637_54653[(2)] = null);

(statearr_54637_54653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54635 === (2))){
var inst_54614 = (state_54634[(7)]);
var inst_54617 = (state_54634[(10)]);
var inst_54617__$1 = cljs.core.nth.call(null,inst_54614,(0),null);
var inst_54618 = cljs.core.nthnext.call(null,inst_54614,(1));
var inst_54619 = (inst_54617__$1 == null);
var inst_54620 = cljs.core.not.call(null,inst_54619);
var state_54634__$1 = (function (){var statearr_54638 = state_54634;
(statearr_54638[(11)] = inst_54618);

(statearr_54638[(10)] = inst_54617__$1);

return statearr_54638;
})();
if(inst_54620){
var statearr_54639_54654 = state_54634__$1;
(statearr_54639_54654[(1)] = (4));

} else {
var statearr_54640_54655 = state_54634__$1;
(statearr_54640_54655[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54635 === (3))){
var inst_54632 = (state_54634[(2)]);
var state_54634__$1 = state_54634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54634__$1,inst_54632);
} else {
if((state_val_54635 === (4))){
var inst_54617 = (state_54634[(10)]);
var inst_54622 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54617);
var state_54634__$1 = state_54634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54634__$1,(7),inst_54622);
} else {
if((state_val_54635 === (5))){
var inst_54628 = cljs.core.async.close_BANG_.call(null,out);
var state_54634__$1 = state_54634;
var statearr_54641_54656 = state_54634__$1;
(statearr_54641_54656[(2)] = inst_54628);

(statearr_54641_54656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54635 === (6))){
var inst_54630 = (state_54634[(2)]);
var state_54634__$1 = state_54634;
var statearr_54642_54657 = state_54634__$1;
(statearr_54642_54657[(2)] = inst_54630);

(statearr_54642_54657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54635 === (7))){
var inst_54618 = (state_54634[(11)]);
var inst_54624 = (state_54634[(2)]);
var inst_54625 = cljs.core.async.put_BANG_.call(null,out,inst_54624);
var inst_54614 = inst_54618;
var state_54634__$1 = (function (){var statearr_54643 = state_54634;
(statearr_54643[(7)] = inst_54614);

(statearr_54643[(12)] = inst_54625);

return statearr_54643;
})();
var statearr_54644_54658 = state_54634__$1;
(statearr_54644_54658[(2)] = null);

(statearr_54644_54658[(1)] = (2));


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
});})(c__37681__auto___54652,out))
;
return ((function (switch__37569__auto__,c__37681__auto___54652,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____0 = (function (){
var statearr_54648 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54648[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__);

(statearr_54648[(1)] = (1));

return statearr_54648;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____1 = (function (state_54634){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_54634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e54649){if((e54649 instanceof Object)){
var ex__37573__auto__ = e54649;
var statearr_54650_54659 = state_54634;
(statearr_54650_54659[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54660 = state_54634;
state_54634 = G__54660;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__ = function(state_54634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____1.call(this,state_54634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto___54652,out))
})();
var state__37683__auto__ = (function (){var statearr_54651 = f__37682__auto__.call(null);
(statearr_54651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto___54652);

return statearr_54651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto___54652,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__54661,opts){
var map__54665 = p__54661;
var map__54665__$1 = ((((!((map__54665 == null)))?((((map__54665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54665):map__54665);
var eval_body__$1 = cljs.core.get.call(null,map__54665__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__54665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e54667){var e = e54667;
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
return (function (p1__54668_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54668_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__54673){
var vec__54674 = p__54673;
var k = cljs.core.nth.call(null,vec__54674,(0),null);
var v = cljs.core.nth.call(null,vec__54674,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__54675){
var vec__54676 = p__54675;
var k = cljs.core.nth.call(null,vec__54676,(0),null);
var v = cljs.core.nth.call(null,vec__54676,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__54680,p__54681){
var map__54928 = p__54680;
var map__54928__$1 = ((((!((map__54928 == null)))?((((map__54928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54928):map__54928);
var opts = map__54928__$1;
var before_jsload = cljs.core.get.call(null,map__54928__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__54928__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__54928__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__54929 = p__54681;
var map__54929__$1 = ((((!((map__54929 == null)))?((((map__54929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54929):map__54929);
var msg = map__54929__$1;
var files = cljs.core.get.call(null,map__54929__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__54929__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__54929__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37682__auto__ = (function (){var switch__37569__auto__ = ((function (c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55082){
var state_val_55083 = (state_55082[(1)]);
if((state_val_55083 === (7))){
var inst_54945 = (state_55082[(7)]);
var inst_54944 = (state_55082[(8)]);
var inst_54943 = (state_55082[(9)]);
var inst_54946 = (state_55082[(10)]);
var inst_54951 = cljs.core._nth.call(null,inst_54944,inst_54946);
var inst_54952 = figwheel.client.file_reloading.eval_body.call(null,inst_54951,opts);
var inst_54953 = (inst_54946 + (1));
var tmp55084 = inst_54945;
var tmp55085 = inst_54944;
var tmp55086 = inst_54943;
var inst_54943__$1 = tmp55086;
var inst_54944__$1 = tmp55085;
var inst_54945__$1 = tmp55084;
var inst_54946__$1 = inst_54953;
var state_55082__$1 = (function (){var statearr_55087 = state_55082;
(statearr_55087[(7)] = inst_54945__$1);

(statearr_55087[(8)] = inst_54944__$1);

(statearr_55087[(9)] = inst_54943__$1);

(statearr_55087[(10)] = inst_54946__$1);

(statearr_55087[(11)] = inst_54952);

return statearr_55087;
})();
var statearr_55088_55174 = state_55082__$1;
(statearr_55088_55174[(2)] = null);

(statearr_55088_55174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (20))){
var inst_54986 = (state_55082[(12)]);
var inst_54994 = figwheel.client.file_reloading.sort_files.call(null,inst_54986);
var state_55082__$1 = state_55082;
var statearr_55089_55175 = state_55082__$1;
(statearr_55089_55175[(2)] = inst_54994);

(statearr_55089_55175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (27))){
var state_55082__$1 = state_55082;
var statearr_55090_55176 = state_55082__$1;
(statearr_55090_55176[(2)] = null);

(statearr_55090_55176[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (1))){
var inst_54935 = (state_55082[(13)]);
var inst_54932 = before_jsload.call(null,files);
var inst_54933 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_54934 = (function (){return ((function (inst_54935,inst_54932,inst_54933,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54677_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54677_SHARP_);
});
;})(inst_54935,inst_54932,inst_54933,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54935__$1 = cljs.core.filter.call(null,inst_54934,files);
var inst_54936 = cljs.core.not_empty.call(null,inst_54935__$1);
var state_55082__$1 = (function (){var statearr_55091 = state_55082;
(statearr_55091[(14)] = inst_54933);

(statearr_55091[(15)] = inst_54932);

(statearr_55091[(13)] = inst_54935__$1);

return statearr_55091;
})();
if(cljs.core.truth_(inst_54936)){
var statearr_55092_55177 = state_55082__$1;
(statearr_55092_55177[(1)] = (2));

} else {
var statearr_55093_55178 = state_55082__$1;
(statearr_55093_55178[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (24))){
var state_55082__$1 = state_55082;
var statearr_55094_55179 = state_55082__$1;
(statearr_55094_55179[(2)] = null);

(statearr_55094_55179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (39))){
var inst_55036 = (state_55082[(16)]);
var state_55082__$1 = state_55082;
var statearr_55095_55180 = state_55082__$1;
(statearr_55095_55180[(2)] = inst_55036);

(statearr_55095_55180[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (46))){
var inst_55077 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55096_55181 = state_55082__$1;
(statearr_55096_55181[(2)] = inst_55077);

(statearr_55096_55181[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (4))){
var inst_54980 = (state_55082[(2)]);
var inst_54981 = cljs.core.List.EMPTY;
var inst_54982 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_54981);
var inst_54983 = (function (){return ((function (inst_54980,inst_54981,inst_54982,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54678_SHARP_){
var and__35502__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54678_SHARP_);
if(cljs.core.truth_(and__35502__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54678_SHARP_));
} else {
return and__35502__auto__;
}
});
;})(inst_54980,inst_54981,inst_54982,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_54984 = cljs.core.filter.call(null,inst_54983,files);
var inst_54985 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_54986 = cljs.core.concat.call(null,inst_54984,inst_54985);
var state_55082__$1 = (function (){var statearr_55097 = state_55082;
(statearr_55097[(17)] = inst_54982);

(statearr_55097[(12)] = inst_54986);

(statearr_55097[(18)] = inst_54980);

return statearr_55097;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55098_55182 = state_55082__$1;
(statearr_55098_55182[(1)] = (16));

} else {
var statearr_55099_55183 = state_55082__$1;
(statearr_55099_55183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (15))){
var inst_54970 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55100_55184 = state_55082__$1;
(statearr_55100_55184[(2)] = inst_54970);

(statearr_55100_55184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (21))){
var inst_54996 = (state_55082[(19)]);
var inst_54996__$1 = (state_55082[(2)]);
var inst_54997 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_54996__$1);
var state_55082__$1 = (function (){var statearr_55101 = state_55082;
(statearr_55101[(19)] = inst_54996__$1);

return statearr_55101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55082__$1,(22),inst_54997);
} else {
if((state_val_55083 === (31))){
var inst_55080 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55082__$1,inst_55080);
} else {
if((state_val_55083 === (32))){
var inst_55036 = (state_55082[(16)]);
var inst_55041 = inst_55036.cljs$lang$protocol_mask$partition0$;
var inst_55042 = (inst_55041 & (64));
var inst_55043 = inst_55036.cljs$core$ISeq$;
var inst_55044 = (inst_55042) || (inst_55043);
var state_55082__$1 = state_55082;
if(cljs.core.truth_(inst_55044)){
var statearr_55102_55185 = state_55082__$1;
(statearr_55102_55185[(1)] = (35));

} else {
var statearr_55103_55186 = state_55082__$1;
(statearr_55103_55186[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (40))){
var inst_55057 = (state_55082[(20)]);
var inst_55056 = (state_55082[(2)]);
var inst_55057__$1 = cljs.core.get.call(null,inst_55056,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55058 = cljs.core.get.call(null,inst_55056,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55059 = cljs.core.not_empty.call(null,inst_55057__$1);
var state_55082__$1 = (function (){var statearr_55104 = state_55082;
(statearr_55104[(20)] = inst_55057__$1);

(statearr_55104[(21)] = inst_55058);

return statearr_55104;
})();
if(cljs.core.truth_(inst_55059)){
var statearr_55105_55187 = state_55082__$1;
(statearr_55105_55187[(1)] = (41));

} else {
var statearr_55106_55188 = state_55082__$1;
(statearr_55106_55188[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (33))){
var state_55082__$1 = state_55082;
var statearr_55107_55189 = state_55082__$1;
(statearr_55107_55189[(2)] = false);

(statearr_55107_55189[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (13))){
var inst_54956 = (state_55082[(22)]);
var inst_54960 = cljs.core.chunk_first.call(null,inst_54956);
var inst_54961 = cljs.core.chunk_rest.call(null,inst_54956);
var inst_54962 = cljs.core.count.call(null,inst_54960);
var inst_54943 = inst_54961;
var inst_54944 = inst_54960;
var inst_54945 = inst_54962;
var inst_54946 = (0);
var state_55082__$1 = (function (){var statearr_55108 = state_55082;
(statearr_55108[(7)] = inst_54945);

(statearr_55108[(8)] = inst_54944);

(statearr_55108[(9)] = inst_54943);

(statearr_55108[(10)] = inst_54946);

return statearr_55108;
})();
var statearr_55109_55190 = state_55082__$1;
(statearr_55109_55190[(2)] = null);

(statearr_55109_55190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (22))){
var inst_54996 = (state_55082[(19)]);
var inst_54999 = (state_55082[(23)]);
var inst_55000 = (state_55082[(24)]);
var inst_55004 = (state_55082[(25)]);
var inst_54999__$1 = (state_55082[(2)]);
var inst_55000__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_54999__$1);
var inst_55001 = (function (){var all_files = inst_54996;
var res_SINGLEQUOTE_ = inst_54999__$1;
var res = inst_55000__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_54996,inst_54999,inst_55000,inst_55004,inst_54999__$1,inst_55000__$1,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54679_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__54679_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_54996,inst_54999,inst_55000,inst_55004,inst_54999__$1,inst_55000__$1,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55002 = cljs.core.filter.call(null,inst_55001,inst_54999__$1);
var inst_55003 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55004__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55003);
var inst_55005 = cljs.core.not_empty.call(null,inst_55004__$1);
var state_55082__$1 = (function (){var statearr_55110 = state_55082;
(statearr_55110[(23)] = inst_54999__$1);

(statearr_55110[(26)] = inst_55002);

(statearr_55110[(24)] = inst_55000__$1);

(statearr_55110[(25)] = inst_55004__$1);

return statearr_55110;
})();
if(cljs.core.truth_(inst_55005)){
var statearr_55111_55191 = state_55082__$1;
(statearr_55111_55191[(1)] = (23));

} else {
var statearr_55112_55192 = state_55082__$1;
(statearr_55112_55192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (36))){
var state_55082__$1 = state_55082;
var statearr_55113_55193 = state_55082__$1;
(statearr_55113_55193[(2)] = false);

(statearr_55113_55193[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (41))){
var inst_55057 = (state_55082[(20)]);
var inst_55061 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55062 = cljs.core.map.call(null,inst_55061,inst_55057);
var inst_55063 = cljs.core.pr_str.call(null,inst_55062);
var inst_55064 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_55063)].join('');
var inst_55065 = figwheel.client.utils.log.call(null,inst_55064);
var state_55082__$1 = state_55082;
var statearr_55114_55194 = state_55082__$1;
(statearr_55114_55194[(2)] = inst_55065);

(statearr_55114_55194[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (43))){
var inst_55058 = (state_55082[(21)]);
var inst_55068 = (state_55082[(2)]);
var inst_55069 = cljs.core.not_empty.call(null,inst_55058);
var state_55082__$1 = (function (){var statearr_55115 = state_55082;
(statearr_55115[(27)] = inst_55068);

return statearr_55115;
})();
if(cljs.core.truth_(inst_55069)){
var statearr_55116_55195 = state_55082__$1;
(statearr_55116_55195[(1)] = (44));

} else {
var statearr_55117_55196 = state_55082__$1;
(statearr_55117_55196[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (29))){
var inst_54996 = (state_55082[(19)]);
var inst_54999 = (state_55082[(23)]);
var inst_55036 = (state_55082[(16)]);
var inst_55002 = (state_55082[(26)]);
var inst_55000 = (state_55082[(24)]);
var inst_55004 = (state_55082[(25)]);
var inst_55032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55035 = (function (){var all_files = inst_54996;
var res_SINGLEQUOTE_ = inst_54999;
var res = inst_55000;
var files_not_loaded = inst_55002;
var dependencies_that_loaded = inst_55004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55036,inst_55002,inst_55000,inst_55004,inst_55032,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55034){
var map__55118 = p__55034;
var map__55118__$1 = ((((!((map__55118 == null)))?((((map__55118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55118):map__55118);
var namespace = cljs.core.get.call(null,map__55118__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55036,inst_55002,inst_55000,inst_55004,inst_55032,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55036__$1 = cljs.core.group_by.call(null,inst_55035,inst_55002);
var inst_55038 = (inst_55036__$1 == null);
var inst_55039 = cljs.core.not.call(null,inst_55038);
var state_55082__$1 = (function (){var statearr_55120 = state_55082;
(statearr_55120[(16)] = inst_55036__$1);

(statearr_55120[(28)] = inst_55032);

return statearr_55120;
})();
if(inst_55039){
var statearr_55121_55197 = state_55082__$1;
(statearr_55121_55197[(1)] = (32));

} else {
var statearr_55122_55198 = state_55082__$1;
(statearr_55122_55198[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (44))){
var inst_55058 = (state_55082[(21)]);
var inst_55071 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55058);
var inst_55072 = cljs.core.pr_str.call(null,inst_55071);
var inst_55073 = [cljs.core.str("not required: "),cljs.core.str(inst_55072)].join('');
var inst_55074 = figwheel.client.utils.log.call(null,inst_55073);
var state_55082__$1 = state_55082;
var statearr_55123_55199 = state_55082__$1;
(statearr_55123_55199[(2)] = inst_55074);

(statearr_55123_55199[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (6))){
var inst_54977 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55124_55200 = state_55082__$1;
(statearr_55124_55200[(2)] = inst_54977);

(statearr_55124_55200[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (28))){
var inst_55002 = (state_55082[(26)]);
var inst_55029 = (state_55082[(2)]);
var inst_55030 = cljs.core.not_empty.call(null,inst_55002);
var state_55082__$1 = (function (){var statearr_55125 = state_55082;
(statearr_55125[(29)] = inst_55029);

return statearr_55125;
})();
if(cljs.core.truth_(inst_55030)){
var statearr_55126_55201 = state_55082__$1;
(statearr_55126_55201[(1)] = (29));

} else {
var statearr_55127_55202 = state_55082__$1;
(statearr_55127_55202[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (25))){
var inst_55000 = (state_55082[(24)]);
var inst_55016 = (state_55082[(2)]);
var inst_55017 = cljs.core.not_empty.call(null,inst_55000);
var state_55082__$1 = (function (){var statearr_55128 = state_55082;
(statearr_55128[(30)] = inst_55016);

return statearr_55128;
})();
if(cljs.core.truth_(inst_55017)){
var statearr_55129_55203 = state_55082__$1;
(statearr_55129_55203[(1)] = (26));

} else {
var statearr_55130_55204 = state_55082__$1;
(statearr_55130_55204[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (34))){
var inst_55051 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
if(cljs.core.truth_(inst_55051)){
var statearr_55131_55205 = state_55082__$1;
(statearr_55131_55205[(1)] = (38));

} else {
var statearr_55132_55206 = state_55082__$1;
(statearr_55132_55206[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (17))){
var state_55082__$1 = state_55082;
var statearr_55133_55207 = state_55082__$1;
(statearr_55133_55207[(2)] = recompile_dependents);

(statearr_55133_55207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (3))){
var state_55082__$1 = state_55082;
var statearr_55134_55208 = state_55082__$1;
(statearr_55134_55208[(2)] = null);

(statearr_55134_55208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (12))){
var inst_54973 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55135_55209 = state_55082__$1;
(statearr_55135_55209[(2)] = inst_54973);

(statearr_55135_55209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (2))){
var inst_54935 = (state_55082[(13)]);
var inst_54942 = cljs.core.seq.call(null,inst_54935);
var inst_54943 = inst_54942;
var inst_54944 = null;
var inst_54945 = (0);
var inst_54946 = (0);
var state_55082__$1 = (function (){var statearr_55136 = state_55082;
(statearr_55136[(7)] = inst_54945);

(statearr_55136[(8)] = inst_54944);

(statearr_55136[(9)] = inst_54943);

(statearr_55136[(10)] = inst_54946);

return statearr_55136;
})();
var statearr_55137_55210 = state_55082__$1;
(statearr_55137_55210[(2)] = null);

(statearr_55137_55210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (23))){
var inst_54996 = (state_55082[(19)]);
var inst_54999 = (state_55082[(23)]);
var inst_55002 = (state_55082[(26)]);
var inst_55000 = (state_55082[(24)]);
var inst_55004 = (state_55082[(25)]);
var inst_55007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55009 = (function (){var all_files = inst_54996;
var res_SINGLEQUOTE_ = inst_54999;
var res = inst_55000;
var files_not_loaded = inst_55002;
var dependencies_that_loaded = inst_55004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55002,inst_55000,inst_55004,inst_55007,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55008){
var map__55138 = p__55008;
var map__55138__$1 = ((((!((map__55138 == null)))?((((map__55138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55138):map__55138);
var request_url = cljs.core.get.call(null,map__55138__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55002,inst_55000,inst_55004,inst_55007,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55010 = cljs.core.reverse.call(null,inst_55004);
var inst_55011 = cljs.core.map.call(null,inst_55009,inst_55010);
var inst_55012 = cljs.core.pr_str.call(null,inst_55011);
var inst_55013 = figwheel.client.utils.log.call(null,inst_55012);
var state_55082__$1 = (function (){var statearr_55140 = state_55082;
(statearr_55140[(31)] = inst_55007);

return statearr_55140;
})();
var statearr_55141_55211 = state_55082__$1;
(statearr_55141_55211[(2)] = inst_55013);

(statearr_55141_55211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (35))){
var state_55082__$1 = state_55082;
var statearr_55142_55212 = state_55082__$1;
(statearr_55142_55212[(2)] = true);

(statearr_55142_55212[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (19))){
var inst_54986 = (state_55082[(12)]);
var inst_54992 = figwheel.client.file_reloading.expand_files.call(null,inst_54986);
var state_55082__$1 = state_55082;
var statearr_55143_55213 = state_55082__$1;
(statearr_55143_55213[(2)] = inst_54992);

(statearr_55143_55213[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (11))){
var state_55082__$1 = state_55082;
var statearr_55144_55214 = state_55082__$1;
(statearr_55144_55214[(2)] = null);

(statearr_55144_55214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (9))){
var inst_54975 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55145_55215 = state_55082__$1;
(statearr_55145_55215[(2)] = inst_54975);

(statearr_55145_55215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (5))){
var inst_54945 = (state_55082[(7)]);
var inst_54946 = (state_55082[(10)]);
var inst_54948 = (inst_54946 < inst_54945);
var inst_54949 = inst_54948;
var state_55082__$1 = state_55082;
if(cljs.core.truth_(inst_54949)){
var statearr_55146_55216 = state_55082__$1;
(statearr_55146_55216[(1)] = (7));

} else {
var statearr_55147_55217 = state_55082__$1;
(statearr_55147_55217[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (14))){
var inst_54956 = (state_55082[(22)]);
var inst_54965 = cljs.core.first.call(null,inst_54956);
var inst_54966 = figwheel.client.file_reloading.eval_body.call(null,inst_54965,opts);
var inst_54967 = cljs.core.next.call(null,inst_54956);
var inst_54943 = inst_54967;
var inst_54944 = null;
var inst_54945 = (0);
var inst_54946 = (0);
var state_55082__$1 = (function (){var statearr_55148 = state_55082;
(statearr_55148[(7)] = inst_54945);

(statearr_55148[(8)] = inst_54944);

(statearr_55148[(9)] = inst_54943);

(statearr_55148[(10)] = inst_54946);

(statearr_55148[(32)] = inst_54966);

return statearr_55148;
})();
var statearr_55149_55218 = state_55082__$1;
(statearr_55149_55218[(2)] = null);

(statearr_55149_55218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (45))){
var state_55082__$1 = state_55082;
var statearr_55150_55219 = state_55082__$1;
(statearr_55150_55219[(2)] = null);

(statearr_55150_55219[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (26))){
var inst_54996 = (state_55082[(19)]);
var inst_54999 = (state_55082[(23)]);
var inst_55002 = (state_55082[(26)]);
var inst_55000 = (state_55082[(24)]);
var inst_55004 = (state_55082[(25)]);
var inst_55019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55021 = (function (){var all_files = inst_54996;
var res_SINGLEQUOTE_ = inst_54999;
var res = inst_55000;
var files_not_loaded = inst_55002;
var dependencies_that_loaded = inst_55004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55002,inst_55000,inst_55004,inst_55019,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55020){
var map__55151 = p__55020;
var map__55151__$1 = ((((!((map__55151 == null)))?((((map__55151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55151):map__55151);
var namespace = cljs.core.get.call(null,map__55151__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55151__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55002,inst_55000,inst_55004,inst_55019,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55022 = cljs.core.map.call(null,inst_55021,inst_55000);
var inst_55023 = cljs.core.pr_str.call(null,inst_55022);
var inst_55024 = figwheel.client.utils.log.call(null,inst_55023);
var inst_55025 = (function (){var all_files = inst_54996;
var res_SINGLEQUOTE_ = inst_54999;
var res = inst_55000;
var files_not_loaded = inst_55002;
var dependencies_that_loaded = inst_55004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55002,inst_55000,inst_55004,inst_55019,inst_55021,inst_55022,inst_55023,inst_55024,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_54996,inst_54999,inst_55002,inst_55000,inst_55004,inst_55019,inst_55021,inst_55022,inst_55023,inst_55024,state_val_55083,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55026 = setTimeout(inst_55025,(10));
var state_55082__$1 = (function (){var statearr_55153 = state_55082;
(statearr_55153[(33)] = inst_55019);

(statearr_55153[(34)] = inst_55024);

return statearr_55153;
})();
var statearr_55154_55220 = state_55082__$1;
(statearr_55154_55220[(2)] = inst_55026);

(statearr_55154_55220[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (16))){
var state_55082__$1 = state_55082;
var statearr_55155_55221 = state_55082__$1;
(statearr_55155_55221[(2)] = reload_dependents);

(statearr_55155_55221[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (38))){
var inst_55036 = (state_55082[(16)]);
var inst_55053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55036);
var state_55082__$1 = state_55082;
var statearr_55156_55222 = state_55082__$1;
(statearr_55156_55222[(2)] = inst_55053);

(statearr_55156_55222[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (30))){
var state_55082__$1 = state_55082;
var statearr_55157_55223 = state_55082__$1;
(statearr_55157_55223[(2)] = null);

(statearr_55157_55223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (10))){
var inst_54956 = (state_55082[(22)]);
var inst_54958 = cljs.core.chunked_seq_QMARK_.call(null,inst_54956);
var state_55082__$1 = state_55082;
if(inst_54958){
var statearr_55158_55224 = state_55082__$1;
(statearr_55158_55224[(1)] = (13));

} else {
var statearr_55159_55225 = state_55082__$1;
(statearr_55159_55225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (18))){
var inst_54990 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
if(cljs.core.truth_(inst_54990)){
var statearr_55160_55226 = state_55082__$1;
(statearr_55160_55226[(1)] = (19));

} else {
var statearr_55161_55227 = state_55082__$1;
(statearr_55161_55227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (42))){
var state_55082__$1 = state_55082;
var statearr_55162_55228 = state_55082__$1;
(statearr_55162_55228[(2)] = null);

(statearr_55162_55228[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (37))){
var inst_55048 = (state_55082[(2)]);
var state_55082__$1 = state_55082;
var statearr_55163_55229 = state_55082__$1;
(statearr_55163_55229[(2)] = inst_55048);

(statearr_55163_55229[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55083 === (8))){
var inst_54956 = (state_55082[(22)]);
var inst_54943 = (state_55082[(9)]);
var inst_54956__$1 = cljs.core.seq.call(null,inst_54943);
var state_55082__$1 = (function (){var statearr_55164 = state_55082;
(statearr_55164[(22)] = inst_54956__$1);

return statearr_55164;
})();
if(inst_54956__$1){
var statearr_55165_55230 = state_55082__$1;
(statearr_55165_55230[(1)] = (10));

} else {
var statearr_55166_55231 = state_55082__$1;
(statearr_55166_55231[(1)] = (11));

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
});})(c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37569__auto__,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____0 = (function (){
var statearr_55170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55170[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__);

(statearr_55170[(1)] = (1));

return statearr_55170;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____1 = (function (state_55082){
while(true){
var ret_value__37571__auto__ = (function (){try{while(true){
var result__37572__auto__ = switch__37569__auto__.call(null,state_55082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37572__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37572__auto__;
}
break;
}
}catch (e55171){if((e55171 instanceof Object)){
var ex__37573__auto__ = e55171;
var statearr_55172_55232 = state_55082;
(statearr_55172_55232[(5)] = ex__37573__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37571__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55233 = state_55082;
state_55082 = G__55233;
continue;
} else {
return ret_value__37571__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__ = function(state_55082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____1.call(this,state_55082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37570__auto__;
})()
;})(switch__37569__auto__,c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37683__auto__ = (function (){var statearr_55173 = f__37682__auto__.call(null);
(statearr_55173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37681__auto__);

return statearr_55173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37683__auto__);
});})(c__37681__auto__,map__54928,map__54928__$1,opts,before_jsload,on_jsload,reload_dependents,map__54929,map__54929__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37681__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55236,link){
var map__55239 = p__55236;
var map__55239__$1 = ((((!((map__55239 == null)))?((((map__55239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55239):map__55239);
var file = cljs.core.get.call(null,map__55239__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__55239,map__55239__$1,file){
return (function (p1__55234_SHARP_,p2__55235_SHARP_){
if(cljs.core._EQ_.call(null,p1__55234_SHARP_,p2__55235_SHARP_)){
return p1__55234_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__55239,map__55239__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55245){
var map__55246 = p__55245;
var map__55246__$1 = ((((!((map__55246 == null)))?((((map__55246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55246):map__55246);
var match_length = cljs.core.get.call(null,map__55246__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55246__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55241_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55241_SHARP_);
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
var args55248 = [];
var len__36572__auto___55251 = arguments.length;
var i__36573__auto___55252 = (0);
while(true){
if((i__36573__auto___55252 < len__36572__auto___55251)){
args55248.push((arguments[i__36573__auto___55252]));

var G__55253 = (i__36573__auto___55252 + (1));
i__36573__auto___55252 = G__55253;
continue;
} else {
}
break;
}

var G__55250 = args55248.length;
switch (G__55250) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55248.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55255_SHARP_,p2__55256_SHARP_){
return cljs.core.assoc.call(null,p1__55255_SHARP_,cljs.core.get.call(null,p2__55256_SHARP_,key),p2__55256_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__55257){
var map__55260 = p__55257;
var map__55260__$1 = ((((!((map__55260 == null)))?((((map__55260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55260):map__55260);
var f_data = map__55260__$1;
var file = cljs.core.get.call(null,map__55260__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55262,files_msg){
var map__55269 = p__55262;
var map__55269__$1 = ((((!((map__55269 == null)))?((((map__55269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55269):map__55269);
var opts = map__55269__$1;
var on_cssload = cljs.core.get.call(null,map__55269__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__55271_55275 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__55272_55276 = null;
var count__55273_55277 = (0);
var i__55274_55278 = (0);
while(true){
if((i__55274_55278 < count__55273_55277)){
var f_55279 = cljs.core._nth.call(null,chunk__55272_55276,i__55274_55278);
figwheel.client.file_reloading.reload_css_file.call(null,f_55279);

var G__55280 = seq__55271_55275;
var G__55281 = chunk__55272_55276;
var G__55282 = count__55273_55277;
var G__55283 = (i__55274_55278 + (1));
seq__55271_55275 = G__55280;
chunk__55272_55276 = G__55281;
count__55273_55277 = G__55282;
i__55274_55278 = G__55283;
continue;
} else {
var temp__4425__auto___55284 = cljs.core.seq.call(null,seq__55271_55275);
if(temp__4425__auto___55284){
var seq__55271_55285__$1 = temp__4425__auto___55284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55271_55285__$1)){
var c__36317__auto___55286 = cljs.core.chunk_first.call(null,seq__55271_55285__$1);
var G__55287 = cljs.core.chunk_rest.call(null,seq__55271_55285__$1);
var G__55288 = c__36317__auto___55286;
var G__55289 = cljs.core.count.call(null,c__36317__auto___55286);
var G__55290 = (0);
seq__55271_55275 = G__55287;
chunk__55272_55276 = G__55288;
count__55273_55277 = G__55289;
i__55274_55278 = G__55290;
continue;
} else {
var f_55291 = cljs.core.first.call(null,seq__55271_55285__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_55291);

var G__55292 = cljs.core.next.call(null,seq__55271_55285__$1);
var G__55293 = null;
var G__55294 = (0);
var G__55295 = (0);
seq__55271_55275 = G__55292;
chunk__55272_55276 = G__55293;
count__55273_55277 = G__55294;
i__55274_55278 = G__55295;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__55269,map__55269__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__55269,map__55269__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456364844545