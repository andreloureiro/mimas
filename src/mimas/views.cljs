(ns mimas.views
  (:require [re-frame.core :refer [dispatch]]
            [mimas.tasks.ui :refer [modal-task-form task-list]]
            [mimas.projects.ui :refer [project-form project-list]]
            [mimas.components.common.ui :refer [app-bar btn-fab icon search-box]]
            [mimas.components.common.handlers]
            [mimas.tasks.subs]
            [mimas.util :as util]
            [re-frame.core :refer [subscribe]]
            [reagent.core :as r]
            [mozgas.core :as m]
            ))


(defn sidebar-item [icon-type label item-type action-content]
  (let [action-type (condp = item-type
                      :link {:href action-content}
                      :action {:on-click action-content}
                      nil)]
    [:div.sidebar__item {:key (rand-int 100)}
     (if (= item-type :link)
       [:a.item__title
        action-type
        [icon icon-type {:size :medium :color :dark} nil {:paddingRight "1em"}]
        [:p label]]
       [:div.item__title
        action-type
        [icon icon-type {:size :medium :color :dark} nil {:paddingRight "1em"}]
        [:p label]])
     ]))

(defn sidebar []
  (let [open? (subscribe [:ui/sidebar-open?])]
    (fn []
      [:div.sidebar
       [util/animate-component
        :from-left
        (when @open?
          [:div
           [:p.subheading "Projects"]
           [project-list]
           [project-form]
           [:p.subheading "Visualizations"]
           [sidebar-item "pie_chart" "Chart" :link "/#/chart"]
           [sidebar-item "timeline" "Timeline" :link "/#/timeline"]])]
       ])))

(defn- window-height! []
  (.-innerHeight js/window))


(defn default-template [content]
  (let [completed-tasks (subscribe [:task/total-completed])
        incompleted-tasks (subscribe [:task/total-incompleted])
        modal-add-task-open? (subscribe [:ui/modal-add-task])]
    (fn []
      (let [height (window-height!)]
        [:div {:style {:display "flex" :flexDirection "column" :height height}}
         [app-bar]
         [:div {:style {:display "flex" :flex 1}}
          [sidebar]
          [:div {:style {:flex 3}}
           content
           [:div {:style {:flex 1}}]]
          [m/motion-component {:duration 150
                               :animation (if @modal-add-task-open?
                                            "transition.expandIn"
                                            "transition.expandOut")}
           [modal-task-form]]
          [btn-fab "add" #(dispatch [:ui/toggle-modal-add-task])]
          ]]))))

(defn tasks-view [page params]
  (default-template [task-list]))


(defn task-view [id]
  (let [task (subscribe [:task/by-id id])
        modal-add-task-open? (subscribe [:ui/modal-add-task])]
    (fn [id]
      (let [height (window-height!)]
        [:div {:style {:display "flex" :flexDirection "column" :height height}}
         [app-bar]
         [:div {:style {:display "flex" :flex 1}}
          [:div {:style {:flex 1}}]
          [:div {:style {:flex 2}} (str @task)]
          [:div {:style {:flex 1}}]]
         (when @modal-add-task-open?
           [modal-task-form])
         [btn-fab "add" #(dispatch [:ui/toggle-modal-add-task])]
         ]))))


(defn not-found-view []
  [:div {:style {:display "flex"
                 :alignItems "center"
                 :justifyContent "center"
                 :height (window-height!)}}
   [:h1 ":("]]
  )
