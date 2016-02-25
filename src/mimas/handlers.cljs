(ns mimas.handlers
  (:require [mimas.db :refer [state]]
            [re-frame.core :refer [register-handler]]))


(register-handler
 :initialize
 (fn [db _]
   (merge db state)))


(defn form-update-value [db [_ k v]]
  (assoc-in db [:task/form k] v))

(register-handler
 :form/update-value
 form-update-value)


(defn task-add [db [_ task]]
  (update db :task/list conj task))

(register-handler
 :task/add
 task-add)


(defn task-edit [db [_ task]])
