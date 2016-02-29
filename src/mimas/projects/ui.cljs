(ns mimas.projects.ui
  (:require [mimas.components.util :refer [icon]]
            [mimas.projects.handlers]
            [mimas.projects.subs]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]))

(defn project-item [{:keys [project/id project/title project/tasks]}]
  [:li.project-item {:key id}
   [:p.project-item__title title][:p.project-item__badge (count tasks)]])

(defn project-list []
  (let [local (r/atom {:adding? false :project-title ""})]
    (fn []
      (let [projects (subscribe [:project/list])
            {:keys [adding? project-title]} @local]
        [:div
         [:small "Projects" [icon "add" #(swap! local assoc :adding? true)]]
         (when adding?
           [:div
            [:input {:type "text" :placeholder "New project" :value project-title :on-input #(swap! local assoc :project-title (.. % -target -value))}]
            [:button {:on-click #(dispatch [:project/add project-title])} "save"]])
         [:ul.project-list
          (map project-item @projects)]]))))
