(ns mimas.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [goog.dom :as gdom]
            [mimas.components.util :as ui-util]
            [mimas.projects.ui :refer [project-list]]
            [mimas.tasks.ui :refer [task-form task-list]]
            [mimas.projects.handlers]
            [mimas.handlers]
            [mimas.subs]))

(enable-console-print!)

(defn title [t]
  [:div.title
   [:i.material-icons "face"]
   [:h1.title__text t]])

(defn mimas []
  (let [title-text (subscribe [:app/title])
        completed-tasks (subscribe [:task/total-completed])
        incompleted-tasks (subscribe [:task/total-incompleted])]
    (fn []
      (let [height (.-innerHeight js/window)]
        [:div {:style {:display "flex" :height height}}
         [:div {:style {:flex 1 :border-right "1px solid #eee"}}
          [title @title-text]
          [project-list]]
         [:div {:style {:flex 3}}
          [task-form]
          [task-list]]]))))

(defn init []
  (dispatch-sync [:initialize])
  (r/render [mimas] (gdom/getElement "app")))

(init)
