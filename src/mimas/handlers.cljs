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

(defn listen-keystrikes [e]
  (js/console.log (.-keyCode e)))

(defn add-keypress-listener! []
  (.addEventListener js/document "keyup" listen-keystrikes))

(register-handler
 :initialize
 [debug]
 (fn [_ _]
   (let [ls-data (ls->edn!)]
     (add-keypress-listener!)
     (merge initial-state ls-data))))


