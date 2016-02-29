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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40964_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40964_SHARP_));
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
var seq__40969 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40970 = null;
var count__40971 = (0);
var i__40972 = (0);
while(true){
if((i__40972 < count__40971)){
var n = cljs.core._nth.call(null,chunk__40970,i__40972);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40973 = seq__40969;
var G__40974 = chunk__40970;
var G__40975 = count__40971;
var G__40976 = (i__40972 + (1));
seq__40969 = G__40973;
chunk__40970 = G__40974;
count__40971 = G__40975;
i__40972 = G__40976;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__40969);
if(temp__4425__auto__){
var seq__40969__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40969__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__40969__$1);
var G__40977 = cljs.core.chunk_rest.call(null,seq__40969__$1);
var G__40978 = c__36319__auto__;
var G__40979 = cljs.core.count.call(null,c__36319__auto__);
var G__40980 = (0);
seq__40969 = G__40977;
chunk__40970 = G__40978;
count__40971 = G__40979;
i__40972 = G__40980;
continue;
} else {
var n = cljs.core.first.call(null,seq__40969__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40981 = cljs.core.next.call(null,seq__40969__$1);
var G__40982 = null;
var G__40983 = (0);
var G__40984 = (0);
seq__40969 = G__40981;
chunk__40970 = G__40982;
count__40971 = G__40983;
i__40972 = G__40984;
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

var seq__41023_41030 = cljs.core.seq.call(null,deps);
var chunk__41024_41031 = null;
var count__41025_41032 = (0);
var i__41026_41033 = (0);
while(true){
if((i__41026_41033 < count__41025_41032)){
var dep_41034 = cljs.core._nth.call(null,chunk__41024_41031,i__41026_41033);
topo_sort_helper_STAR_.call(null,dep_41034,(depth + (1)),state);

var G__41035 = seq__41023_41030;
var G__41036 = chunk__41024_41031;
var G__41037 = count__41025_41032;
var G__41038 = (i__41026_41033 + (1));
seq__41023_41030 = G__41035;
chunk__41024_41031 = G__41036;
count__41025_41032 = G__41037;
i__41026_41033 = G__41038;
continue;
} else {
var temp__4425__auto___41039 = cljs.core.seq.call(null,seq__41023_41030);
if(temp__4425__auto___41039){
var seq__41023_41040__$1 = temp__4425__auto___41039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41023_41040__$1)){
var c__36319__auto___41041 = cljs.core.chunk_first.call(null,seq__41023_41040__$1);
var G__41042 = cljs.core.chunk_rest.call(null,seq__41023_41040__$1);
var G__41043 = c__36319__auto___41041;
var G__41044 = cljs.core.count.call(null,c__36319__auto___41041);
var G__41045 = (0);
seq__41023_41030 = G__41042;
chunk__41024_41031 = G__41043;
count__41025_41032 = G__41044;
i__41026_41033 = G__41045;
continue;
} else {
var dep_41046 = cljs.core.first.call(null,seq__41023_41040__$1);
topo_sort_helper_STAR_.call(null,dep_41046,(depth + (1)),state);

var G__41047 = cljs.core.next.call(null,seq__41023_41040__$1);
var G__41048 = null;
var G__41049 = (0);
var G__41050 = (0);
seq__41023_41030 = G__41047;
chunk__41024_41031 = G__41048;
count__41025_41032 = G__41049;
i__41026_41033 = G__41050;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41027){
var vec__41029 = p__41027;
var x = cljs.core.nth.call(null,vec__41029,(0),null);
var xs = cljs.core.nthnext.call(null,vec__41029,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41029,x,xs,get_deps__$1){
return (function (p1__40985_SHARP_){
return clojure.set.difference.call(null,p1__40985_SHARP_,x);
});})(vec__41029,x,xs,get_deps__$1))
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
var seq__41063 = cljs.core.seq.call(null,provides);
var chunk__41064 = null;
var count__41065 = (0);
var i__41066 = (0);
while(true){
if((i__41066 < count__41065)){
var prov = cljs.core._nth.call(null,chunk__41064,i__41066);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41067_41075 = cljs.core.seq.call(null,requires);
var chunk__41068_41076 = null;
var count__41069_41077 = (0);
var i__41070_41078 = (0);
while(true){
if((i__41070_41078 < count__41069_41077)){
var req_41079 = cljs.core._nth.call(null,chunk__41068_41076,i__41070_41078);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41079,prov);

var G__41080 = seq__41067_41075;
var G__41081 = chunk__41068_41076;
var G__41082 = count__41069_41077;
var G__41083 = (i__41070_41078 + (1));
seq__41067_41075 = G__41080;
chunk__41068_41076 = G__41081;
count__41069_41077 = G__41082;
i__41070_41078 = G__41083;
continue;
} else {
var temp__4425__auto___41084 = cljs.core.seq.call(null,seq__41067_41075);
if(temp__4425__auto___41084){
var seq__41067_41085__$1 = temp__4425__auto___41084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41067_41085__$1)){
var c__36319__auto___41086 = cljs.core.chunk_first.call(null,seq__41067_41085__$1);
var G__41087 = cljs.core.chunk_rest.call(null,seq__41067_41085__$1);
var G__41088 = c__36319__auto___41086;
var G__41089 = cljs.core.count.call(null,c__36319__auto___41086);
var G__41090 = (0);
seq__41067_41075 = G__41087;
chunk__41068_41076 = G__41088;
count__41069_41077 = G__41089;
i__41070_41078 = G__41090;
continue;
} else {
var req_41091 = cljs.core.first.call(null,seq__41067_41085__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41091,prov);

var G__41092 = cljs.core.next.call(null,seq__41067_41085__$1);
var G__41093 = null;
var G__41094 = (0);
var G__41095 = (0);
seq__41067_41075 = G__41092;
chunk__41068_41076 = G__41093;
count__41069_41077 = G__41094;
i__41070_41078 = G__41095;
continue;
}
} else {
}
}
break;
}

var G__41096 = seq__41063;
var G__41097 = chunk__41064;
var G__41098 = count__41065;
var G__41099 = (i__41066 + (1));
seq__41063 = G__41096;
chunk__41064 = G__41097;
count__41065 = G__41098;
i__41066 = G__41099;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41063);
if(temp__4425__auto__){
var seq__41063__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41063__$1)){
var c__36319__auto__ = cljs.core.chunk_first.call(null,seq__41063__$1);
var G__41100 = cljs.core.chunk_rest.call(null,seq__41063__$1);
var G__41101 = c__36319__auto__;
var G__41102 = cljs.core.count.call(null,c__36319__auto__);
var G__41103 = (0);
seq__41063 = G__41100;
chunk__41064 = G__41101;
count__41065 = G__41102;
i__41066 = G__41103;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41063__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41071_41104 = cljs.core.seq.call(null,requires);
var chunk__41072_41105 = null;
var count__41073_41106 = (0);
var i__41074_41107 = (0);
while(true){
if((i__41074_41107 < count__41073_41106)){
var req_41108 = cljs.core._nth.call(null,chunk__41072_41105,i__41074_41107);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41108,prov);

var G__41109 = seq__41071_41104;
var G__41110 = chunk__41072_41105;
var G__41111 = count__41073_41106;
var G__41112 = (i__41074_41107 + (1));
seq__41071_41104 = G__41109;
chunk__41072_41105 = G__41110;
count__41073_41106 = G__41111;
i__41074_41107 = G__41112;
continue;
} else {
var temp__4425__auto___41113__$1 = cljs.core.seq.call(null,seq__41071_41104);
if(temp__4425__auto___41113__$1){
var seq__41071_41114__$1 = temp__4425__auto___41113__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41071_41114__$1)){
var c__36319__auto___41115 = cljs.core.chunk_first.call(null,seq__41071_41114__$1);
var G__41116 = cljs.core.chunk_rest.call(null,seq__41071_41114__$1);
var G__41117 = c__36319__auto___41115;
var G__41118 = cljs.core.count.call(null,c__36319__auto___41115);
var G__41119 = (0);
seq__41071_41104 = G__41116;
chunk__41072_41105 = G__41117;
count__41073_41106 = G__41118;
i__41074_41107 = G__41119;
continue;
} else {
var req_41120 = cljs.core.first.call(null,seq__41071_41114__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41120,prov);

var G__41121 = cljs.core.next.call(null,seq__41071_41114__$1);
var G__41122 = null;
var G__41123 = (0);
var G__41124 = (0);
seq__41071_41104 = G__41121;
chunk__41072_41105 = G__41122;
count__41073_41106 = G__41123;
i__41074_41107 = G__41124;
continue;
}
} else {
}
}
break;
}

var G__41125 = cljs.core.next.call(null,seq__41063__$1);
var G__41126 = null;
var G__41127 = (0);
var G__41128 = (0);
seq__41063 = G__41125;
chunk__41064 = G__41126;
count__41065 = G__41127;
i__41066 = G__41128;
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
var seq__41133_41137 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41134_41138 = null;
var count__41135_41139 = (0);
var i__41136_41140 = (0);
while(true){
if((i__41136_41140 < count__41135_41139)){
var ns_41141 = cljs.core._nth.call(null,chunk__41134_41138,i__41136_41140);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41141);

var G__41142 = seq__41133_41137;
var G__41143 = chunk__41134_41138;
var G__41144 = count__41135_41139;
var G__41145 = (i__41136_41140 + (1));
seq__41133_41137 = G__41142;
chunk__41134_41138 = G__41143;
count__41135_41139 = G__41144;
i__41136_41140 = G__41145;
continue;
} else {
var temp__4425__auto___41146 = cljs.core.seq.call(null,seq__41133_41137);
if(temp__4425__auto___41146){
var seq__41133_41147__$1 = temp__4425__auto___41146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41133_41147__$1)){
var c__36319__auto___41148 = cljs.core.chunk_first.call(null,seq__41133_41147__$1);
var G__41149 = cljs.core.chunk_rest.call(null,seq__41133_41147__$1);
var G__41150 = c__36319__auto___41148;
var G__41151 = cljs.core.count.call(null,c__36319__auto___41148);
var G__41152 = (0);
seq__41133_41137 = G__41149;
chunk__41134_41138 = G__41150;
count__41135_41139 = G__41151;
i__41136_41140 = G__41152;
continue;
} else {
var ns_41153 = cljs.core.first.call(null,seq__41133_41147__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41153);

var G__41154 = cljs.core.next.call(null,seq__41133_41147__$1);
var G__41155 = null;
var G__41156 = (0);
var G__41157 = (0);
seq__41133_41137 = G__41154;
chunk__41134_41138 = G__41155;
count__41135_41139 = G__41156;
i__41136_41140 = G__41157;
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
var G__41158__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41159__i = 0, G__41159__a = new Array(arguments.length -  0);
while (G__41159__i < G__41159__a.length) {G__41159__a[G__41159__i] = arguments[G__41159__i + 0]; ++G__41159__i;}
  args = new cljs.core.IndexedSeq(G__41159__a,0);
} 
return G__41158__delegate.call(this,args);};
G__41158.cljs$lang$maxFixedArity = 0;
G__41158.cljs$lang$applyTo = (function (arglist__41160){
var args = cljs.core.seq(arglist__41160);
return G__41158__delegate(args);
});
G__41158.cljs$core$IFn$_invoke$arity$variadic = G__41158__delegate;
return G__41158;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41162 = cljs.core._EQ_;
var expr__41163 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41162.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41163))){
var path_parts = ((function (pred__41162,expr__41163){
return (function (p1__41161_SHARP_){
return clojure.string.split.call(null,p1__41161_SHARP_,/[\/\\]/);
});})(pred__41162,expr__41163))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41162,expr__41163){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41165){if((e41165 instanceof Error)){
var e = e41165;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41165;

}
}})());
});
;})(path_parts,sep,root,pred__41162,expr__41163))
} else {
if(cljs.core.truth_(pred__41162.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41163))){
return ((function (pred__41162,expr__41163){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__41162,expr__41163){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41162,expr__41163))
);

return deferred.addErrback(((function (deferred,pred__41162,expr__41163){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41162,expr__41163))
);
});
;})(pred__41162,expr__41163))
} else {
return ((function (pred__41162,expr__41163){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41162,expr__41163))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41166,callback){
var map__41169 = p__41166;
var map__41169__$1 = ((((!((map__41169 == null)))?((((map__41169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41169):map__41169);
var file_msg = map__41169__$1;
var request_url = cljs.core.get.call(null,map__41169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41169,map__41169__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41169,map__41169__$1,file_msg,request_url))
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
return (function (state_41193){
var state_val_41194 = (state_41193[(1)]);
if((state_val_41194 === (7))){
var inst_41189 = (state_41193[(2)]);
var state_41193__$1 = state_41193;
var statearr_41195_41215 = state_41193__$1;
(statearr_41195_41215[(2)] = inst_41189);

(statearr_41195_41215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (1))){
var state_41193__$1 = state_41193;
var statearr_41196_41216 = state_41193__$1;
(statearr_41196_41216[(2)] = null);

(statearr_41196_41216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (4))){
var inst_41173 = (state_41193[(7)]);
var inst_41173__$1 = (state_41193[(2)]);
var state_41193__$1 = (function (){var statearr_41197 = state_41193;
(statearr_41197[(7)] = inst_41173__$1);

return statearr_41197;
})();
if(cljs.core.truth_(inst_41173__$1)){
var statearr_41198_41217 = state_41193__$1;
(statearr_41198_41217[(1)] = (5));

} else {
var statearr_41199_41218 = state_41193__$1;
(statearr_41199_41218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (6))){
var state_41193__$1 = state_41193;
var statearr_41200_41219 = state_41193__$1;
(statearr_41200_41219[(2)] = null);

(statearr_41200_41219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (3))){
var inst_41191 = (state_41193[(2)]);
var state_41193__$1 = state_41193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41193__$1,inst_41191);
} else {
if((state_val_41194 === (2))){
var state_41193__$1 = state_41193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41193__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41194 === (11))){
var inst_41185 = (state_41193[(2)]);
var state_41193__$1 = (function (){var statearr_41201 = state_41193;
(statearr_41201[(8)] = inst_41185);

return statearr_41201;
})();
var statearr_41202_41220 = state_41193__$1;
(statearr_41202_41220[(2)] = null);

(statearr_41202_41220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (9))){
var inst_41177 = (state_41193[(9)]);
var inst_41179 = (state_41193[(10)]);
var inst_41181 = inst_41179.call(null,inst_41177);
var state_41193__$1 = state_41193;
var statearr_41203_41221 = state_41193__$1;
(statearr_41203_41221[(2)] = inst_41181);

(statearr_41203_41221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (5))){
var inst_41173 = (state_41193[(7)]);
var inst_41175 = figwheel.client.file_reloading.blocking_load.call(null,inst_41173);
var state_41193__$1 = state_41193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41193__$1,(8),inst_41175);
} else {
if((state_val_41194 === (10))){
var inst_41177 = (state_41193[(9)]);
var inst_41183 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41177);
var state_41193__$1 = state_41193;
var statearr_41204_41222 = state_41193__$1;
(statearr_41204_41222[(2)] = inst_41183);

(statearr_41204_41222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41194 === (8))){
var inst_41173 = (state_41193[(7)]);
var inst_41179 = (state_41193[(10)]);
var inst_41177 = (state_41193[(2)]);
var inst_41178 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41179__$1 = cljs.core.get.call(null,inst_41178,inst_41173);
var state_41193__$1 = (function (){var statearr_41205 = state_41193;
(statearr_41205[(9)] = inst_41177);

(statearr_41205[(10)] = inst_41179__$1);

return statearr_41205;
})();
if(cljs.core.truth_(inst_41179__$1)){
var statearr_41206_41223 = state_41193__$1;
(statearr_41206_41223[(1)] = (9));

} else {
var statearr_41207_41224 = state_41193__$1;
(statearr_41207_41224[(1)] = (10));

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
var statearr_41211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41211[(0)] = figwheel$client$file_reloading$state_machine__37612__auto__);

(statearr_41211[(1)] = (1));

return statearr_41211;
});
var figwheel$client$file_reloading$state_machine__37612__auto____1 = (function (state_41193){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_41193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e41212){if((e41212 instanceof Object)){
var ex__37615__auto__ = e41212;
var statearr_41213_41225 = state_41193;
(statearr_41213_41225[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41226 = state_41193;
state_41193 = G__41226;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37612__auto__ = function(state_41193){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37612__auto____1.call(this,state_41193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37612__auto____0;
figwheel$client$file_reloading$state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37612__auto____1;
return figwheel$client$file_reloading$state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__))
})();
var state__37634__auto__ = (function (){var statearr_41214 = f__37633__auto__.call(null);
(statearr_41214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_41214;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41227,callback){
var map__41230 = p__41227;
var map__41230__$1 = ((((!((map__41230 == null)))?((((map__41230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41230):map__41230);
var file_msg = map__41230__$1;
var namespace = cljs.core.get.call(null,map__41230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41230,map__41230__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41230,map__41230__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41232){
var map__41235 = p__41232;
var map__41235__$1 = ((((!((map__41235 == null)))?((((map__41235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41235):map__41235);
var file_msg = map__41235__$1;
var namespace = cljs.core.get.call(null,map__41235__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41237,callback){
var map__41240 = p__41237;
var map__41240__$1 = ((((!((map__41240 == null)))?((((map__41240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41240):map__41240);
var file_msg = map__41240__$1;
var request_url = cljs.core.get.call(null,map__41240__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37632__auto___41328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto___41328,out){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto___41328,out){
return (function (state_41310){
var state_val_41311 = (state_41310[(1)]);
if((state_val_41311 === (1))){
var inst_41288 = cljs.core.nth.call(null,files,(0),null);
var inst_41289 = cljs.core.nthnext.call(null,files,(1));
var inst_41290 = files;
var state_41310__$1 = (function (){var statearr_41312 = state_41310;
(statearr_41312[(7)] = inst_41290);

(statearr_41312[(8)] = inst_41288);

(statearr_41312[(9)] = inst_41289);

return statearr_41312;
})();
var statearr_41313_41329 = state_41310__$1;
(statearr_41313_41329[(2)] = null);

(statearr_41313_41329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (2))){
var inst_41293 = (state_41310[(10)]);
var inst_41290 = (state_41310[(7)]);
var inst_41293__$1 = cljs.core.nth.call(null,inst_41290,(0),null);
var inst_41294 = cljs.core.nthnext.call(null,inst_41290,(1));
var inst_41295 = (inst_41293__$1 == null);
var inst_41296 = cljs.core.not.call(null,inst_41295);
var state_41310__$1 = (function (){var statearr_41314 = state_41310;
(statearr_41314[(10)] = inst_41293__$1);

(statearr_41314[(11)] = inst_41294);

return statearr_41314;
})();
if(inst_41296){
var statearr_41315_41330 = state_41310__$1;
(statearr_41315_41330[(1)] = (4));

} else {
var statearr_41316_41331 = state_41310__$1;
(statearr_41316_41331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (3))){
var inst_41308 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41310__$1,inst_41308);
} else {
if((state_val_41311 === (4))){
var inst_41293 = (state_41310[(10)]);
var inst_41298 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41293);
var state_41310__$1 = state_41310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41310__$1,(7),inst_41298);
} else {
if((state_val_41311 === (5))){
var inst_41304 = cljs.core.async.close_BANG_.call(null,out);
var state_41310__$1 = state_41310;
var statearr_41317_41332 = state_41310__$1;
(statearr_41317_41332[(2)] = inst_41304);

(statearr_41317_41332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (6))){
var inst_41306 = (state_41310[(2)]);
var state_41310__$1 = state_41310;
var statearr_41318_41333 = state_41310__$1;
(statearr_41318_41333[(2)] = inst_41306);

(statearr_41318_41333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41311 === (7))){
var inst_41294 = (state_41310[(11)]);
var inst_41300 = (state_41310[(2)]);
var inst_41301 = cljs.core.async.put_BANG_.call(null,out,inst_41300);
var inst_41290 = inst_41294;
var state_41310__$1 = (function (){var statearr_41319 = state_41310;
(statearr_41319[(7)] = inst_41290);

(statearr_41319[(12)] = inst_41301);

return statearr_41319;
})();
var statearr_41320_41334 = state_41310__$1;
(statearr_41320_41334[(2)] = null);

(statearr_41320_41334[(1)] = (2));


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
});})(c__37632__auto___41328,out))
;
return ((function (switch__37611__auto__,c__37632__auto___41328,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____0 = (function (){
var statearr_41324 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41324[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__);

(statearr_41324[(1)] = (1));

return statearr_41324;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____1 = (function (state_41310){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_41310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e41325){if((e41325 instanceof Object)){
var ex__37615__auto__ = e41325;
var statearr_41326_41335 = state_41310;
(statearr_41326_41335[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41336 = state_41310;
state_41310 = G__41336;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__ = function(state_41310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____1.call(this,state_41310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto___41328,out))
})();
var state__37634__auto__ = (function (){var statearr_41327 = f__37633__auto__.call(null);
(statearr_41327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto___41328);

return statearr_41327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto___41328,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41337,opts){
var map__41341 = p__41337;
var map__41341__$1 = ((((!((map__41341 == null)))?((((map__41341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41341):map__41341);
var eval_body__$1 = cljs.core.get.call(null,map__41341__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41341__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e41343){var e = e41343;
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
return (function (p1__41344_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41344_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__41349){
var vec__41350 = p__41349;
var k = cljs.core.nth.call(null,vec__41350,(0),null);
var v = cljs.core.nth.call(null,vec__41350,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41351){
var vec__41352 = p__41351;
var k = cljs.core.nth.call(null,vec__41352,(0),null);
var v = cljs.core.nth.call(null,vec__41352,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41356,p__41357){
var map__41604 = p__41356;
var map__41604__$1 = ((((!((map__41604 == null)))?((((map__41604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41604):map__41604);
var opts = map__41604__$1;
var before_jsload = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41605 = p__41357;
var map__41605__$1 = ((((!((map__41605 == null)))?((((map__41605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41605):map__41605);
var msg = map__41605__$1;
var files = cljs.core.get.call(null,map__41605__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41605__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41605__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37632__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37633__auto__ = (function (){var switch__37611__auto__ = ((function (c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41758){
var state_val_41759 = (state_41758[(1)]);
if((state_val_41759 === (7))){
var inst_41621 = (state_41758[(7)]);
var inst_41622 = (state_41758[(8)]);
var inst_41620 = (state_41758[(9)]);
var inst_41619 = (state_41758[(10)]);
var inst_41627 = cljs.core._nth.call(null,inst_41620,inst_41622);
var inst_41628 = figwheel.client.file_reloading.eval_body.call(null,inst_41627,opts);
var inst_41629 = (inst_41622 + (1));
var tmp41760 = inst_41621;
var tmp41761 = inst_41620;
var tmp41762 = inst_41619;
var inst_41619__$1 = tmp41762;
var inst_41620__$1 = tmp41761;
var inst_41621__$1 = tmp41760;
var inst_41622__$1 = inst_41629;
var state_41758__$1 = (function (){var statearr_41763 = state_41758;
(statearr_41763[(11)] = inst_41628);

(statearr_41763[(7)] = inst_41621__$1);

(statearr_41763[(8)] = inst_41622__$1);

(statearr_41763[(9)] = inst_41620__$1);

(statearr_41763[(10)] = inst_41619__$1);

return statearr_41763;
})();
var statearr_41764_41850 = state_41758__$1;
(statearr_41764_41850[(2)] = null);

(statearr_41764_41850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (20))){
var inst_41662 = (state_41758[(12)]);
var inst_41670 = figwheel.client.file_reloading.sort_files.call(null,inst_41662);
var state_41758__$1 = state_41758;
var statearr_41765_41851 = state_41758__$1;
(statearr_41765_41851[(2)] = inst_41670);

(statearr_41765_41851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (27))){
var state_41758__$1 = state_41758;
var statearr_41766_41852 = state_41758__$1;
(statearr_41766_41852[(2)] = null);

(statearr_41766_41852[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (1))){
var inst_41611 = (state_41758[(13)]);
var inst_41608 = before_jsload.call(null,files);
var inst_41609 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41610 = (function (){return ((function (inst_41611,inst_41608,inst_41609,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41353_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41353_SHARP_);
});
;})(inst_41611,inst_41608,inst_41609,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41611__$1 = cljs.core.filter.call(null,inst_41610,files);
var inst_41612 = cljs.core.not_empty.call(null,inst_41611__$1);
var state_41758__$1 = (function (){var statearr_41767 = state_41758;
(statearr_41767[(14)] = inst_41609);

(statearr_41767[(15)] = inst_41608);

(statearr_41767[(13)] = inst_41611__$1);

return statearr_41767;
})();
if(cljs.core.truth_(inst_41612)){
var statearr_41768_41853 = state_41758__$1;
(statearr_41768_41853[(1)] = (2));

} else {
var statearr_41769_41854 = state_41758__$1;
(statearr_41769_41854[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (24))){
var state_41758__$1 = state_41758;
var statearr_41770_41855 = state_41758__$1;
(statearr_41770_41855[(2)] = null);

(statearr_41770_41855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (39))){
var inst_41712 = (state_41758[(16)]);
var state_41758__$1 = state_41758;
var statearr_41771_41856 = state_41758__$1;
(statearr_41771_41856[(2)] = inst_41712);

(statearr_41771_41856[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (46))){
var inst_41753 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
var statearr_41772_41857 = state_41758__$1;
(statearr_41772_41857[(2)] = inst_41753);

(statearr_41772_41857[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (4))){
var inst_41656 = (state_41758[(2)]);
var inst_41657 = cljs.core.List.EMPTY;
var inst_41658 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41657);
var inst_41659 = (function (){return ((function (inst_41656,inst_41657,inst_41658,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41354_SHARP_){
var and__35504__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41354_SHARP_);
if(cljs.core.truth_(and__35504__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41354_SHARP_));
} else {
return and__35504__auto__;
}
});
;})(inst_41656,inst_41657,inst_41658,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41660 = cljs.core.filter.call(null,inst_41659,files);
var inst_41661 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41662 = cljs.core.concat.call(null,inst_41660,inst_41661);
var state_41758__$1 = (function (){var statearr_41773 = state_41758;
(statearr_41773[(17)] = inst_41658);

(statearr_41773[(18)] = inst_41656);

(statearr_41773[(12)] = inst_41662);

return statearr_41773;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41774_41858 = state_41758__$1;
(statearr_41774_41858[(1)] = (16));

} else {
var statearr_41775_41859 = state_41758__$1;
(statearr_41775_41859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (15))){
var inst_41646 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
var statearr_41776_41860 = state_41758__$1;
(statearr_41776_41860[(2)] = inst_41646);

(statearr_41776_41860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (21))){
var inst_41672 = (state_41758[(19)]);
var inst_41672__$1 = (state_41758[(2)]);
var inst_41673 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41672__$1);
var state_41758__$1 = (function (){var statearr_41777 = state_41758;
(statearr_41777[(19)] = inst_41672__$1);

return statearr_41777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41758__$1,(22),inst_41673);
} else {
if((state_val_41759 === (31))){
var inst_41756 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41758__$1,inst_41756);
} else {
if((state_val_41759 === (32))){
var inst_41712 = (state_41758[(16)]);
var inst_41717 = inst_41712.cljs$lang$protocol_mask$partition0$;
var inst_41718 = (inst_41717 & (64));
var inst_41719 = inst_41712.cljs$core$ISeq$;
var inst_41720 = (inst_41718) || (inst_41719);
var state_41758__$1 = state_41758;
if(cljs.core.truth_(inst_41720)){
var statearr_41778_41861 = state_41758__$1;
(statearr_41778_41861[(1)] = (35));

} else {
var statearr_41779_41862 = state_41758__$1;
(statearr_41779_41862[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (40))){
var inst_41733 = (state_41758[(20)]);
var inst_41732 = (state_41758[(2)]);
var inst_41733__$1 = cljs.core.get.call(null,inst_41732,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41734 = cljs.core.get.call(null,inst_41732,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41735 = cljs.core.not_empty.call(null,inst_41733__$1);
var state_41758__$1 = (function (){var statearr_41780 = state_41758;
(statearr_41780[(21)] = inst_41734);

(statearr_41780[(20)] = inst_41733__$1);

return statearr_41780;
})();
if(cljs.core.truth_(inst_41735)){
var statearr_41781_41863 = state_41758__$1;
(statearr_41781_41863[(1)] = (41));

} else {
var statearr_41782_41864 = state_41758__$1;
(statearr_41782_41864[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (33))){
var state_41758__$1 = state_41758;
var statearr_41783_41865 = state_41758__$1;
(statearr_41783_41865[(2)] = false);

(statearr_41783_41865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (13))){
var inst_41632 = (state_41758[(22)]);
var inst_41636 = cljs.core.chunk_first.call(null,inst_41632);
var inst_41637 = cljs.core.chunk_rest.call(null,inst_41632);
var inst_41638 = cljs.core.count.call(null,inst_41636);
var inst_41619 = inst_41637;
var inst_41620 = inst_41636;
var inst_41621 = inst_41638;
var inst_41622 = (0);
var state_41758__$1 = (function (){var statearr_41784 = state_41758;
(statearr_41784[(7)] = inst_41621);

(statearr_41784[(8)] = inst_41622);

(statearr_41784[(9)] = inst_41620);

(statearr_41784[(10)] = inst_41619);

return statearr_41784;
})();
var statearr_41785_41866 = state_41758__$1;
(statearr_41785_41866[(2)] = null);

(statearr_41785_41866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (22))){
var inst_41672 = (state_41758[(19)]);
var inst_41680 = (state_41758[(23)]);
var inst_41676 = (state_41758[(24)]);
var inst_41675 = (state_41758[(25)]);
var inst_41675__$1 = (state_41758[(2)]);
var inst_41676__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41675__$1);
var inst_41677 = (function (){var all_files = inst_41672;
var res_SINGLEQUOTE_ = inst_41675__$1;
var res = inst_41676__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41672,inst_41680,inst_41676,inst_41675,inst_41675__$1,inst_41676__$1,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41355_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41355_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41672,inst_41680,inst_41676,inst_41675,inst_41675__$1,inst_41676__$1,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41678 = cljs.core.filter.call(null,inst_41677,inst_41675__$1);
var inst_41679 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41680__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41679);
var inst_41681 = cljs.core.not_empty.call(null,inst_41680__$1);
var state_41758__$1 = (function (){var statearr_41786 = state_41758;
(statearr_41786[(23)] = inst_41680__$1);

(statearr_41786[(24)] = inst_41676__$1);

(statearr_41786[(26)] = inst_41678);

(statearr_41786[(25)] = inst_41675__$1);

return statearr_41786;
})();
if(cljs.core.truth_(inst_41681)){
var statearr_41787_41867 = state_41758__$1;
(statearr_41787_41867[(1)] = (23));

} else {
var statearr_41788_41868 = state_41758__$1;
(statearr_41788_41868[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (36))){
var state_41758__$1 = state_41758;
var statearr_41789_41869 = state_41758__$1;
(statearr_41789_41869[(2)] = false);

(statearr_41789_41869[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (41))){
var inst_41733 = (state_41758[(20)]);
var inst_41737 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41738 = cljs.core.map.call(null,inst_41737,inst_41733);
var inst_41739 = cljs.core.pr_str.call(null,inst_41738);
var inst_41740 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41739)].join('');
var inst_41741 = figwheel.client.utils.log.call(null,inst_41740);
var state_41758__$1 = state_41758;
var statearr_41790_41870 = state_41758__$1;
(statearr_41790_41870[(2)] = inst_41741);

(statearr_41790_41870[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (43))){
var inst_41734 = (state_41758[(21)]);
var inst_41744 = (state_41758[(2)]);
var inst_41745 = cljs.core.not_empty.call(null,inst_41734);
var state_41758__$1 = (function (){var statearr_41791 = state_41758;
(statearr_41791[(27)] = inst_41744);

return statearr_41791;
})();
if(cljs.core.truth_(inst_41745)){
var statearr_41792_41871 = state_41758__$1;
(statearr_41792_41871[(1)] = (44));

} else {
var statearr_41793_41872 = state_41758__$1;
(statearr_41793_41872[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (29))){
var inst_41672 = (state_41758[(19)]);
var inst_41712 = (state_41758[(16)]);
var inst_41680 = (state_41758[(23)]);
var inst_41676 = (state_41758[(24)]);
var inst_41678 = (state_41758[(26)]);
var inst_41675 = (state_41758[(25)]);
var inst_41708 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41711 = (function (){var all_files = inst_41672;
var res_SINGLEQUOTE_ = inst_41675;
var res = inst_41676;
var files_not_loaded = inst_41678;
var dependencies_that_loaded = inst_41680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41712,inst_41680,inst_41676,inst_41678,inst_41675,inst_41708,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41710){
var map__41794 = p__41710;
var map__41794__$1 = ((((!((map__41794 == null)))?((((map__41794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41794):map__41794);
var namespace = cljs.core.get.call(null,map__41794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41712,inst_41680,inst_41676,inst_41678,inst_41675,inst_41708,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41712__$1 = cljs.core.group_by.call(null,inst_41711,inst_41678);
var inst_41714 = (inst_41712__$1 == null);
var inst_41715 = cljs.core.not.call(null,inst_41714);
var state_41758__$1 = (function (){var statearr_41796 = state_41758;
(statearr_41796[(16)] = inst_41712__$1);

(statearr_41796[(28)] = inst_41708);

return statearr_41796;
})();
if(inst_41715){
var statearr_41797_41873 = state_41758__$1;
(statearr_41797_41873[(1)] = (32));

} else {
var statearr_41798_41874 = state_41758__$1;
(statearr_41798_41874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (44))){
var inst_41734 = (state_41758[(21)]);
var inst_41747 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41734);
var inst_41748 = cljs.core.pr_str.call(null,inst_41747);
var inst_41749 = [cljs.core.str("not required: "),cljs.core.str(inst_41748)].join('');
var inst_41750 = figwheel.client.utils.log.call(null,inst_41749);
var state_41758__$1 = state_41758;
var statearr_41799_41875 = state_41758__$1;
(statearr_41799_41875[(2)] = inst_41750);

(statearr_41799_41875[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (6))){
var inst_41653 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
var statearr_41800_41876 = state_41758__$1;
(statearr_41800_41876[(2)] = inst_41653);

(statearr_41800_41876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (28))){
var inst_41678 = (state_41758[(26)]);
var inst_41705 = (state_41758[(2)]);
var inst_41706 = cljs.core.not_empty.call(null,inst_41678);
var state_41758__$1 = (function (){var statearr_41801 = state_41758;
(statearr_41801[(29)] = inst_41705);

return statearr_41801;
})();
if(cljs.core.truth_(inst_41706)){
var statearr_41802_41877 = state_41758__$1;
(statearr_41802_41877[(1)] = (29));

} else {
var statearr_41803_41878 = state_41758__$1;
(statearr_41803_41878[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (25))){
var inst_41676 = (state_41758[(24)]);
var inst_41692 = (state_41758[(2)]);
var inst_41693 = cljs.core.not_empty.call(null,inst_41676);
var state_41758__$1 = (function (){var statearr_41804 = state_41758;
(statearr_41804[(30)] = inst_41692);

return statearr_41804;
})();
if(cljs.core.truth_(inst_41693)){
var statearr_41805_41879 = state_41758__$1;
(statearr_41805_41879[(1)] = (26));

} else {
var statearr_41806_41880 = state_41758__$1;
(statearr_41806_41880[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (34))){
var inst_41727 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
if(cljs.core.truth_(inst_41727)){
var statearr_41807_41881 = state_41758__$1;
(statearr_41807_41881[(1)] = (38));

} else {
var statearr_41808_41882 = state_41758__$1;
(statearr_41808_41882[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (17))){
var state_41758__$1 = state_41758;
var statearr_41809_41883 = state_41758__$1;
(statearr_41809_41883[(2)] = recompile_dependents);

(statearr_41809_41883[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (3))){
var state_41758__$1 = state_41758;
var statearr_41810_41884 = state_41758__$1;
(statearr_41810_41884[(2)] = null);

(statearr_41810_41884[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (12))){
var inst_41649 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
var statearr_41811_41885 = state_41758__$1;
(statearr_41811_41885[(2)] = inst_41649);

(statearr_41811_41885[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (2))){
var inst_41611 = (state_41758[(13)]);
var inst_41618 = cljs.core.seq.call(null,inst_41611);
var inst_41619 = inst_41618;
var inst_41620 = null;
var inst_41621 = (0);
var inst_41622 = (0);
var state_41758__$1 = (function (){var statearr_41812 = state_41758;
(statearr_41812[(7)] = inst_41621);

(statearr_41812[(8)] = inst_41622);

(statearr_41812[(9)] = inst_41620);

(statearr_41812[(10)] = inst_41619);

return statearr_41812;
})();
var statearr_41813_41886 = state_41758__$1;
(statearr_41813_41886[(2)] = null);

(statearr_41813_41886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (23))){
var inst_41672 = (state_41758[(19)]);
var inst_41680 = (state_41758[(23)]);
var inst_41676 = (state_41758[(24)]);
var inst_41678 = (state_41758[(26)]);
var inst_41675 = (state_41758[(25)]);
var inst_41683 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41685 = (function (){var all_files = inst_41672;
var res_SINGLEQUOTE_ = inst_41675;
var res = inst_41676;
var files_not_loaded = inst_41678;
var dependencies_that_loaded = inst_41680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41680,inst_41676,inst_41678,inst_41675,inst_41683,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41684){
var map__41814 = p__41684;
var map__41814__$1 = ((((!((map__41814 == null)))?((((map__41814.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41814.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41814):map__41814);
var request_url = cljs.core.get.call(null,map__41814__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41680,inst_41676,inst_41678,inst_41675,inst_41683,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41686 = cljs.core.reverse.call(null,inst_41680);
var inst_41687 = cljs.core.map.call(null,inst_41685,inst_41686);
var inst_41688 = cljs.core.pr_str.call(null,inst_41687);
var inst_41689 = figwheel.client.utils.log.call(null,inst_41688);
var state_41758__$1 = (function (){var statearr_41816 = state_41758;
(statearr_41816[(31)] = inst_41683);

return statearr_41816;
})();
var statearr_41817_41887 = state_41758__$1;
(statearr_41817_41887[(2)] = inst_41689);

(statearr_41817_41887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (35))){
var state_41758__$1 = state_41758;
var statearr_41818_41888 = state_41758__$1;
(statearr_41818_41888[(2)] = true);

(statearr_41818_41888[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (19))){
var inst_41662 = (state_41758[(12)]);
var inst_41668 = figwheel.client.file_reloading.expand_files.call(null,inst_41662);
var state_41758__$1 = state_41758;
var statearr_41819_41889 = state_41758__$1;
(statearr_41819_41889[(2)] = inst_41668);

(statearr_41819_41889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (11))){
var state_41758__$1 = state_41758;
var statearr_41820_41890 = state_41758__$1;
(statearr_41820_41890[(2)] = null);

(statearr_41820_41890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (9))){
var inst_41651 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
var statearr_41821_41891 = state_41758__$1;
(statearr_41821_41891[(2)] = inst_41651);

(statearr_41821_41891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (5))){
var inst_41621 = (state_41758[(7)]);
var inst_41622 = (state_41758[(8)]);
var inst_41624 = (inst_41622 < inst_41621);
var inst_41625 = inst_41624;
var state_41758__$1 = state_41758;
if(cljs.core.truth_(inst_41625)){
var statearr_41822_41892 = state_41758__$1;
(statearr_41822_41892[(1)] = (7));

} else {
var statearr_41823_41893 = state_41758__$1;
(statearr_41823_41893[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (14))){
var inst_41632 = (state_41758[(22)]);
var inst_41641 = cljs.core.first.call(null,inst_41632);
var inst_41642 = figwheel.client.file_reloading.eval_body.call(null,inst_41641,opts);
var inst_41643 = cljs.core.next.call(null,inst_41632);
var inst_41619 = inst_41643;
var inst_41620 = null;
var inst_41621 = (0);
var inst_41622 = (0);
var state_41758__$1 = (function (){var statearr_41824 = state_41758;
(statearr_41824[(7)] = inst_41621);

(statearr_41824[(32)] = inst_41642);

(statearr_41824[(8)] = inst_41622);

(statearr_41824[(9)] = inst_41620);

(statearr_41824[(10)] = inst_41619);

return statearr_41824;
})();
var statearr_41825_41894 = state_41758__$1;
(statearr_41825_41894[(2)] = null);

(statearr_41825_41894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (45))){
var state_41758__$1 = state_41758;
var statearr_41826_41895 = state_41758__$1;
(statearr_41826_41895[(2)] = null);

(statearr_41826_41895[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (26))){
var inst_41672 = (state_41758[(19)]);
var inst_41680 = (state_41758[(23)]);
var inst_41676 = (state_41758[(24)]);
var inst_41678 = (state_41758[(26)]);
var inst_41675 = (state_41758[(25)]);
var inst_41695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41697 = (function (){var all_files = inst_41672;
var res_SINGLEQUOTE_ = inst_41675;
var res = inst_41676;
var files_not_loaded = inst_41678;
var dependencies_that_loaded = inst_41680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41680,inst_41676,inst_41678,inst_41675,inst_41695,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41696){
var map__41827 = p__41696;
var map__41827__$1 = ((((!((map__41827 == null)))?((((map__41827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41827):map__41827);
var namespace = cljs.core.get.call(null,map__41827__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41827__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41680,inst_41676,inst_41678,inst_41675,inst_41695,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41698 = cljs.core.map.call(null,inst_41697,inst_41676);
var inst_41699 = cljs.core.pr_str.call(null,inst_41698);
var inst_41700 = figwheel.client.utils.log.call(null,inst_41699);
var inst_41701 = (function (){var all_files = inst_41672;
var res_SINGLEQUOTE_ = inst_41675;
var res = inst_41676;
var files_not_loaded = inst_41678;
var dependencies_that_loaded = inst_41680;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41680,inst_41676,inst_41678,inst_41675,inst_41695,inst_41697,inst_41698,inst_41699,inst_41700,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41672,inst_41680,inst_41676,inst_41678,inst_41675,inst_41695,inst_41697,inst_41698,inst_41699,inst_41700,state_val_41759,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41702 = setTimeout(inst_41701,(10));
var state_41758__$1 = (function (){var statearr_41829 = state_41758;
(statearr_41829[(33)] = inst_41700);

(statearr_41829[(34)] = inst_41695);

return statearr_41829;
})();
var statearr_41830_41896 = state_41758__$1;
(statearr_41830_41896[(2)] = inst_41702);

(statearr_41830_41896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (16))){
var state_41758__$1 = state_41758;
var statearr_41831_41897 = state_41758__$1;
(statearr_41831_41897[(2)] = reload_dependents);

(statearr_41831_41897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (38))){
var inst_41712 = (state_41758[(16)]);
var inst_41729 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41712);
var state_41758__$1 = state_41758;
var statearr_41832_41898 = state_41758__$1;
(statearr_41832_41898[(2)] = inst_41729);

(statearr_41832_41898[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (30))){
var state_41758__$1 = state_41758;
var statearr_41833_41899 = state_41758__$1;
(statearr_41833_41899[(2)] = null);

(statearr_41833_41899[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (10))){
var inst_41632 = (state_41758[(22)]);
var inst_41634 = cljs.core.chunked_seq_QMARK_.call(null,inst_41632);
var state_41758__$1 = state_41758;
if(inst_41634){
var statearr_41834_41900 = state_41758__$1;
(statearr_41834_41900[(1)] = (13));

} else {
var statearr_41835_41901 = state_41758__$1;
(statearr_41835_41901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (18))){
var inst_41666 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
if(cljs.core.truth_(inst_41666)){
var statearr_41836_41902 = state_41758__$1;
(statearr_41836_41902[(1)] = (19));

} else {
var statearr_41837_41903 = state_41758__$1;
(statearr_41837_41903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (42))){
var state_41758__$1 = state_41758;
var statearr_41838_41904 = state_41758__$1;
(statearr_41838_41904[(2)] = null);

(statearr_41838_41904[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (37))){
var inst_41724 = (state_41758[(2)]);
var state_41758__$1 = state_41758;
var statearr_41839_41905 = state_41758__$1;
(statearr_41839_41905[(2)] = inst_41724);

(statearr_41839_41905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41759 === (8))){
var inst_41619 = (state_41758[(10)]);
var inst_41632 = (state_41758[(22)]);
var inst_41632__$1 = cljs.core.seq.call(null,inst_41619);
var state_41758__$1 = (function (){var statearr_41840 = state_41758;
(statearr_41840[(22)] = inst_41632__$1);

return statearr_41840;
})();
if(inst_41632__$1){
var statearr_41841_41906 = state_41758__$1;
(statearr_41841_41906[(1)] = (10));

} else {
var statearr_41842_41907 = state_41758__$1;
(statearr_41842_41907[(1)] = (11));

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
});})(c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37611__auto__,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____0 = (function (){
var statearr_41846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41846[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__);

(statearr_41846[(1)] = (1));

return statearr_41846;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____1 = (function (state_41758){
while(true){
var ret_value__37613__auto__ = (function (){try{while(true){
var result__37614__auto__ = switch__37611__auto__.call(null,state_41758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37614__auto__;
}
break;
}
}catch (e41847){if((e41847 instanceof Object)){
var ex__37615__auto__ = e41847;
var statearr_41848_41908 = state_41758;
(statearr_41848_41908[(5)] = ex__37615__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41909 = state_41758;
state_41758 = G__41909;
continue;
} else {
return ret_value__37613__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__ = function(state_41758){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____1.call(this,state_41758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37612__auto__;
})()
;})(switch__37611__auto__,c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37634__auto__ = (function (){var statearr_41849 = f__37633__auto__.call(null);
(statearr_41849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37632__auto__);

return statearr_41849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37634__auto__);
});})(c__37632__auto__,map__41604,map__41604__$1,opts,before_jsload,on_jsload,reload_dependents,map__41605,map__41605__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37632__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41912,link){
var map__41915 = p__41912;
var map__41915__$1 = ((((!((map__41915 == null)))?((((map__41915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41915):map__41915);
var file = cljs.core.get.call(null,map__41915__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__41915,map__41915__$1,file){
return (function (p1__41910_SHARP_,p2__41911_SHARP_){
if(cljs.core._EQ_.call(null,p1__41910_SHARP_,p2__41911_SHARP_)){
return p1__41910_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__41915,map__41915__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41921){
var map__41922 = p__41921;
var map__41922__$1 = ((((!((map__41922 == null)))?((((map__41922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41922):map__41922);
var match_length = cljs.core.get.call(null,map__41922__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41922__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41917_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41917_SHARP_);
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
var args41924 = [];
var len__36574__auto___41927 = arguments.length;
var i__36575__auto___41928 = (0);
while(true){
if((i__36575__auto___41928 < len__36574__auto___41927)){
args41924.push((arguments[i__36575__auto___41928]));

var G__41929 = (i__36575__auto___41928 + (1));
i__36575__auto___41928 = G__41929;
continue;
} else {
}
break;
}

var G__41926 = args41924.length;
switch (G__41926) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41924.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41931_SHARP_,p2__41932_SHARP_){
return cljs.core.assoc.call(null,p1__41931_SHARP_,cljs.core.get.call(null,p2__41932_SHARP_,key),p2__41932_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41933){
var map__41936 = p__41933;
var map__41936__$1 = ((((!((map__41936 == null)))?((((map__41936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41936):map__41936);
var f_data = map__41936__$1;
var file = cljs.core.get.call(null,map__41936__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41938,files_msg){
var map__41945 = p__41938;
var map__41945__$1 = ((((!((map__41945 == null)))?((((map__41945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41945):map__41945);
var opts = map__41945__$1;
var on_cssload = cljs.core.get.call(null,map__41945__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41947_41951 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41948_41952 = null;
var count__41949_41953 = (0);
var i__41950_41954 = (0);
while(true){
if((i__41950_41954 < count__41949_41953)){
var f_41955 = cljs.core._nth.call(null,chunk__41948_41952,i__41950_41954);
figwheel.client.file_reloading.reload_css_file.call(null,f_41955);

var G__41956 = seq__41947_41951;
var G__41957 = chunk__41948_41952;
var G__41958 = count__41949_41953;
var G__41959 = (i__41950_41954 + (1));
seq__41947_41951 = G__41956;
chunk__41948_41952 = G__41957;
count__41949_41953 = G__41958;
i__41950_41954 = G__41959;
continue;
} else {
var temp__4425__auto___41960 = cljs.core.seq.call(null,seq__41947_41951);
if(temp__4425__auto___41960){
var seq__41947_41961__$1 = temp__4425__auto___41960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41947_41961__$1)){
var c__36319__auto___41962 = cljs.core.chunk_first.call(null,seq__41947_41961__$1);
var G__41963 = cljs.core.chunk_rest.call(null,seq__41947_41961__$1);
var G__41964 = c__36319__auto___41962;
var G__41965 = cljs.core.count.call(null,c__36319__auto___41962);
var G__41966 = (0);
seq__41947_41951 = G__41963;
chunk__41948_41952 = G__41964;
count__41949_41953 = G__41965;
i__41950_41954 = G__41966;
continue;
} else {
var f_41967 = cljs.core.first.call(null,seq__41947_41961__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41967);

var G__41968 = cljs.core.next.call(null,seq__41947_41961__$1);
var G__41969 = null;
var G__41970 = (0);
var G__41971 = (0);
seq__41947_41951 = G__41968;
chunk__41948_41952 = G__41969;
count__41949_41953 = G__41970;
i__41950_41954 = G__41971;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41945,map__41945__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41945,map__41945__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456713001965