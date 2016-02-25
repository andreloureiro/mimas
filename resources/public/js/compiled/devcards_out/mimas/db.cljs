(ns mimas.db
  (:require [reagent.core :as r]))

(def state
  {:app/title "mimas"
   :dropdown/list
   [{:item/id 0 :item/value :item-1 :item/label "item#1"}
    {:item/id 1 :item/value :item-2 :item/label "item#2"}
    {:item/id 2 :item/value :item-3 :item/label "item#3"}]
   :task/list
   [{:task/id (rand-int 100) :task/title "task#1" :task/project "project#1"}
    {:task/id (rand-int 100) :task/title "task#2" :task/project "project#2"}
    {:task/id (rand-int 100) :task/title "task#3" :task/project "project#1"}]
   :task/form
   {:form/title ""
    :form/project ""}})
