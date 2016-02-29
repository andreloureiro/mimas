(ns cards.projects.ui
  (:require-macros [devcards.core :as dc :refer [defcard deftest defcard-rg]]
                   )
  (:require [mimas.projects.ui :refer [project-item project-list]]
            [mimas.projects.handlers]
   [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [cljs.test :as t :refer-macros [is testing]]
            [cards.projects.handlers]))


(defcard-rg project-item
  (fn [data _]
    [project-item @data])
  (first @(subscribe [:project/list])))

(defcard-rg project-list
  [project-list]
  (r/atom {}))
