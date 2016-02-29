(ns cards.tasks.ui
  (:require-macros [devcards.core :refer [defcard deftest defcard-rg]])
  (:require [mimas.tasks.ui :refer [task-form task-list task-item]]
            [mimas.tasks.subs]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [cljs.test :as t :refer-macros [is testing]]
            [cards.projects.handlers]))


(defcard-rg task-item
  (fn [data _]
    [task-item @data])
  {:task/id 0 :task/title "Task #1" :task/project 0 :task/done? false}
  {:inspect-data true})

(defcard-rg done-task
  (fn [data _]
    [task-item @data])
  {:task/id 0 :task/title "Task #1" :task/project 0 :task/done? true}
  {:inspect-data true})

(defcard-rg task-list
  (fn [data _]
    [task-list])
  (subscribe [:task/list])
  {:inspect-data true})

(defcard-rg empty-task-list
  (fn [data _]
    [task-list])
  []
  {:inspect-data true})
