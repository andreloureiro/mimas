(ns mimas.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [mimas.db :refer [state]]))


(defn simple-sub [db [k]]
  (reaction
   (get @db k)))

(register-sub
 :app/title
 simple-sub)


(register-sub
 :task/list
 simple-sub)

(register-sub
 :task/form
 simple-sub)


(defn project-list [db]
  (let [{:keys [task/list]} @db]
    (reaction
     (group-by :task/project list))))

(register-sub
 :project/list
 project-list)


(defn dropdown-list [db]
  (let [{:keys [task/list]} @db]
    (reaction
     (keys (group-by :task/project list)))))

(register-sub
 :dropdown/list
 dropdown-list)


(defn total-completed [db _]
  (reaction (count (filter :task/done? (get @db :task/list)))))

(defn total-incompleted [db _]
  (reaction (count (filter #(not (:task/done? %)) (get @db :task/list)))))

(register-sub
 :task/total-completed
 total-completed)

(register-sub
 :task/total-incompleted
 total-incompleted)

(register-sub
 :get-db
 (fn [db _]
   @db))
