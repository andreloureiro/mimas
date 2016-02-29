(ns mimas.handlers
  (:require [mimas.db :refer [initial-state]]
            [re-frame.core :refer [register-handler debug]]
            [cljs.reader :refer [read-string]]))


(defn edn->ls! [edn]
  (.setItem js/localStorage "mimas" (str edn)))

(defn ls->edn! []
  (let [ls-data (.getItem js/localStorage "mimas")]
    (if (string? ls-data) (read-string ls-data) {})))

(defn persist-mw [handler]
  (fn [db v]
    (let [state (handler db v)]
      (edn->ls! state)
      state)))


(register-handler
 :initialize
 (fn [_ _]
   (let [ls-data (ls->edn!)]
     (merge initial-state ls-data))))


