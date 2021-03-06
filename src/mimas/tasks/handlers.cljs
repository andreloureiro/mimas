(ns mimas.tasks.handlers
  (:require [mimas.db :refer [initial-state]]
            [mimas.handlers :refer [persist-mw]]
            [mimas.util :refer [str->edn]]
            [re-frame.core :refer [register-handler debug]]
            [cljs.reader :refer [read-string]]
            [cljs-time.core :as t]
            [clojure.string :as string]))


(defn form-update-value [db [_ k v]]
  (assoc-in db [:task/form k] v))

(register-handler
 :form/update-value
 [debug]
 form-update-value)


(defn task [{:keys [title project priority due-date]}]
  {:task/id (rand-int 100) ;; TODO: implements UUID
   :task/title title
   :task/project (str->edn project)
   :task/priority (or priority "1")
   :task/due-date (or due-date nil)
   :task/done? false})

(defn add-task [db [_ form]]
  (-> db
      (update :task/list conj (task form))))

(register-handler
 :task/add
 [debug persist-mw]
 add-task)


(defn edit-task [db [_ task]]
  (assoc db :task/editing task))

(register-handler
 :task/edit
 edit-task)


(defn updated-task [task]
  (let [project-id (get task :task/project)]
    (if (= (type project-id) js/String)
      (assoc task :task/project (read-string (get task :task/project)))
      (assoc task :task/project project-id))))

(defn update-task [new]
  (fn [old]
    (if (= (:task/id old) (:task/id new))
      (merge old (updated-task new))
      old)))

(defn task-update [db [_ task]]
  (let [task-list (:task/list db)
        new-task-list (into [] (map (update-task task) task-list))]
    (assoc db :task/list new-task-list)))

(register-handler
 :task/update
 [debug persist-mw]
 task-update)


(defn remove-task [db [_ id]]
  (let [new-list (remove #(= id (:task/id %)) (:task/list db))]
    (-> db
        (assoc :task/list new-list))))

(register-handler
 :task/remove
 [persist-mw]
 remove-task)


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




(defn query-tasks [db [_ query]]
  (assoc db :task/query query))

(register-handler
 :task/search
 [debug]
 query-tasks)

