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


(defn create-new-task [title project]
  {:task/id (rand-int 100) ;; TODO: implements UUID
   :task/title title
   :task/project project
   :task/done? false})

(defn task-add [db _]
  (let [{:keys [form/title form/project]} (:task/form db)]
    (update db :task/list conj (create-new-task title project))))

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


(defn toggle-task-done [list-task handler-task]
  (let [handler-task-id (:task/id handler-task)
        list-task-id (:task/id list-task)]
    (if (= handler-task-id list-task-id) (update list-task :task/done? not) list-task)))

(defn toggle-done [db [_ task]]
  (let [new-task-list (mapv #(toggle-task-done % task) (:task/list db))]
    (assoc db :task/list new-task-list)))

(register-handler
 :task/toggle-done
 toggle-done)
