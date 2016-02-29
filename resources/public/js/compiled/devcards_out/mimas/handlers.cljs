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


(defn form-update-value [db [_ k v]]
  (assoc-in db [:task/form k] v))

(register-handler
 :form/update-value
 [debug]
 form-update-value)


(defn create-new-task [title project]
  (println title project)
  {:task/id (rand-int 100) ;; TODO: implements UUID
   :task/title title
   :task/project (cljs.reader/read-string project)
   :task/done? false})

(defn task-add [db [_ form]]
  (let [{:keys [title project]} form]
    (-> db
        (update :task/list conj (create-new-task title project)))))

(register-handler
 :task/add
 [debug persist-mw]
 task-add)


(defn task-edit [db [_ task]]
  (assoc db :task/editing task))

(register-handler
 :task/edit
 task-edit)


(defn update-task [new]
  (fn [old]
    (if (= (:task/id old) (:task/id new))
      (merge old new)
      old)))

(defn task-update [db [_ task]]
  (let [task-list (:task/list db)
        _ (println task-list)
        new-task-list (into [] (map (update-task task) task-list))]
    (assoc db :task/list new-task-list)))

(register-handler
 :task/update
 [persist-mw]
 task-update)


(defn task-remove [db [_ id]]
  (let [new-list (remove #(= id (:task/id %)) (:task/list db))]
    (-> db
        (assoc :task/list new-list))))

(register-handler
 :task/remove
 [persist-mw]
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
