(ns mimas.db
  (:require [reagent.core :as r]
            [schema.core :as s]))

(s/defschema Task
  {:task/id s/Num
   :task/title s/Str
   :task/project s/Num
   :task/done? s/Bool})

(s/defschema Project
  {:project/id s/Num
   :project/title s/Str
   :project/tasks [s/Num]})

(s/def DropdownItem s/Str)

(s/defschema TaskForm
  {:form/title s/Str
   :form/project s/Str})

(s/defschema State
  {:app/title s/Str
   :dropdown/list [DropdownItem]
   :task/list [Task]
   :task/form TaskForm
   :task/editing (s/maybe Task)
   :project/list {s/Str Project}})

(defonce initial-state
  {:app/title "mimas"
   :dropdown/list []
   :task/list
   [{:task/id (rand-int 100) :task/title "task#1" :task/project 0 :task/done? false}
    {:task/id (rand-int 100) :task/title "task#2" :task/project 0 :task/done? true}
    {:task/id (rand-int 100) :task/title "task#3" :task/project 0 :task/done? false}]
   :task/form
   {:form/title ""
    :form/project ""}
   :task/editing nil
   :project/list
   [{:project/id 0 :project/title "Inbox" :project/tasks []}]})

(defn valid? [db]
  (s/validate State db))
