(ns mimas.projects.handlers
  (:require [mimas.db :refer [initial-state]]
            [mimas.handlers :refer [persist-mw]]
            [re-frame.core :refer [register-handler debug]]
            [cljs.reader :refer [read-string]]))


(defn make-new-project [title]
  {:project/id (rand-int 100)
   :project/title title})

(defn add-project [db [_ title]]
  (let [new-project (make-new-project title)]
    (update db :project/list conj new-project)))

(register-handler
 :project/add
 [debug persist-mw]
 add-project)


(defn update-old-project [new]
  (fn [old]
    (if (= (:project/id old) (:project/id new))
      (merge old new)
      old)))

(defn update-project [db [_ project]]
  (let [new-list (map (update-old-project project) (:project/list db))]
    (assoc db :project/list new-list)))

(register-handler
 :project/update
 update-project)


(defn delete-project [db [_ id]]
  (let [new-list (remove #(= (:project/id %) id) (:project/list db))]
    (assoc db :project/list new-list)))
