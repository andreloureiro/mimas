(ns mimas.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [goog.dom :as gdom]
            [mimas.routes]
            [mimas.components.util :as ui-util]
            [mimas.projects.ui :refer [project-list]]
            [mimas.tasks.ui :refer [task-form task-list]]
            [mimas.projects.handlers]
            [mimas.handlers]
            [mimas.subs]))

(enable-console-print!)

(defn title [t]
  [:div.title
   [:h1.title__text t]])

(defn user-header []
  [:div.user-header
   [:div.user-header__avatar-container
    [:img.avatar-container__avatar
     {:src "https://randomuser.me/api/portraits/med/men/0.jpg" :width 50 :height 50}]]
   [:div.user-header__user-info
    [:p.user-info__name "Landon"]
    [:p.user-info__email "landon.hunter34@gmail.com"]]])

(defn sidebar []
  [:div.sidebar
   [user-header]
   [project-list]])

(defn mimas []
  (let [title-text (subscribe [:app/title])
        completed-tasks (subscribe [:task/total-completed])
        incompleted-tasks (subscribe [:task/total-incompleted])]
    (fn []
      (let [height (.-innerHeight js/window)]
        [:div {:style {:display "flex" :height height}}
         [sidebar]
         [:div {:style {:flex 3}}
          [task-form]
          [task-list]]]))))

(defn init []
  (dispatch-sync [:initialize])
  (r/render [mimas] (gdom/getElement "app")))

(init)
