(ns cards.core
  (:require-macros [devcards.core :as dc :refer [defcard deftest defcard-rg]]
                   [clojure.set :as s])
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync]]
            [mimas.db :refer [state]]
            [mimas.core :refer [dropdown title]]
            [mimas.subs]
            [mimas.handlers]
            [cljs.test :as t :refer-macros [is testing]]))

(enable-console-print!)



(defcard state
  nil
  @state
  {:inspect-data true})

(def title-subs (subscribe [:app/title]))

(println (subscribe [:app/title]))

(defcard-rg title
  [title @title-subs]
  title-subs)

(defcard-rg dropdown
  (fn [item-list _]
    [dropdown @item-list])
  (r/atom (get @state :dropdown/list)))

;; (defcard-rg create-task-panel
;;   (fn [data item-list])
;;   (r/atom nil) (r/atom (get @state :dropdown/list)))

;; (defn task-item [data _]
;;   (let [{:keys [task/id task/title task/project]} @data]
;;     [:li.task-item {:key id}
;;      [:input.task-item__done-checkbox {:type "checkbox"}]
;;      [:p.task-item__title title]
;;      [:small.task-item__project project]]))

;; (defcard-rg task-item
;;   (fn [data _]
;;     [task-item data])
;;   (second (get @state :task/list)))

(defcard-rg task-list
  (fn [data _]
    (let [{:keys [task/list]} @data]
      [:ul.task-list (map task-item list)]))
  state)

(deftest tests
  (testing "foo"
    (is (= 2 2) "bla")))

(dispatch-sync [:initialize])
