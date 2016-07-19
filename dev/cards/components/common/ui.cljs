(ns cards.components.common.ui
  (:require-macros [devcards.core :refer [defcard deftest defcard-rg]])
  (:require [mimas.components.common.ui :refer [date-field text-field dropdown-field textarea-field]]
            [mimas.components.common.subs]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [cljs.test :as t :refer-macros [is testing]]))


(defcard-rg text-field-with-label
  [text-field "Title"])

(defcard-rg text-field-with-props-and-label
  [text-field {:on-change #(println (.. % -target -value))} "Title"])

(defcard-rg textarea-field-with-label
  [textarea-field "Description"])

(defcard-rg textarea-field-with-props-and-label
  [textarea-field {:on-change #(println (.. % -target -value))} "Description"])

(def dropdown-mock (r/atom {:key :project/id
                            :label :project/title
                            :coll [{:project/id 0
                                    :project/title "Project #1"}
                                   {:project/id 1
                                    :project/title "Project #2"}]}))

(defcard-rg dropdown-field-with-data-and-label
  (fn [data _]
    [dropdown-field @data "Projects"])
  dropdown-mock
  {:inspect-data true})

(defcard-rg dropdown-field-with-props-data-and-label
  (fn [data _]
    [dropdown-field {:on-change #(println (.. % -target -value))} @data "Projects"])
  dropdown-mock
  {:inspect-data true})

(defcard-rg date-field-with-label
  [date-field "Due date"])

(defcard-rg date-field-with-props-and-label
  [date-field {:on-change #(println (.. % -target -value))} "Due date"])
