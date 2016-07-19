(ns mimas.db
  (:require [reagent.core :as r]
            [schema.core :as s]))

(s/defschema Task
  {:task/id s/Num
   :task/created-at s/Str
   :task/done? s/Bool
   :task/due-date s/Str
   :task/priority s/Str
   :task/project s/Num
   :task/title s/Str
   })

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
   :app/user {:user/name s/Str
              :user/email s/Str
              :user/avatar s/Str}
   :app/active-route {:active-route/page nil
                      :active-route/params nil}
   :app/ui {:ui/modal-add-task {:open? s/Bool}}
   :dropdown/list [DropdownItem]
   :task/list [Task]
   :task/form TaskForm
   :task/query s/Str
   :task/editing (s/maybe Task)
   :project/list {s/Str Project}})

(defonce initial-state
  {:app/title "mimas"
   :app/user {:user/name "Landon"
              :user/email "landon.hunter34@gmail.com"
              :user/avatar "https://randomuser.me/api/portraits/med/men/0.jpg"}
   :app/ui {:ui/modal-add-task {:open? false}
            :ui/sidebar-open? false}
   :dropdown/list []
   :task/list
   [{:task/id (rand-int 100) :task/title "task#1" :task/project 0 :task/done? false}
    {:task/id (rand-int 100) :task/title "task#2" :task/project 0 :task/done? true}
    {:task/id (rand-int 100) :task/title "task#3" :task/project 0 :task/done? false}]
   :task/form
   {:form/title ""
    :form/project ""}
   :task/editing nil
   :task/query ""
   :project/list
   [{:project/id 0 :project/title "Inbox" :project/tasks []}]})

(defn valid? [db]
  (s/validate State db))
