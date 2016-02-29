(ns mimas.util
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn simple-sub [db [k]]
  (reaction
   (get @db k)))

(defn str->edn [s] (cljs.reader/read-string s))
