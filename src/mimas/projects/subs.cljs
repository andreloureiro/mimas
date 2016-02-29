(ns mimas.projects.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))


(defn projects-with-tasks [tasks]
  (fn [project]
    (let [project-tasks (filterv #(= (:task/project %) (:project/id project)) tasks)]
      (assoc project :project/tasks project-tasks))))

(defn projects [db]
  (let [project-list (:project/list @db)
        task-list (:task/list @db)]
    (reaction (map (projects-with-tasks task-list) project-list))))

(register-sub
 :project/list
 projects)
