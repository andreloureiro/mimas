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


(defn task-edit [db [_ task]]
  (assoc db :task/editing task))

(register-handler
 :task/edit
 task-edit)


(defn task-update [db _]
  (let [{:keys [task/editing]} db]
    (-> db
        (update :task/list merge editing)
        (assoc :task/editing nil))))

(register-handler
 :task/update
 task-update)


(defn task-remove [db [_ id]]
  (let [new-list (remove #(= id (:task/id %)) (:task/list db))]
    (-> db
        (assoc :task/list new-list))))

(register-handler
 :task/remove
 task-remove)
