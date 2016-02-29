(ns mimas.tasks.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [mimas.db :refer [initial-state]]
            [mimas.util :refer [simple-sub]]))


(defn task-list [db _]
  (reaction (into [] (get @db :task/list))))

(register-sub
 :task/list
 task-list)

(register-sub
 :task/form
 simple-sub)

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
