(ns mimas.projects.ui
  (:require [mimas.components.common.ui :refer [badge icon]]
            [mimas.projects.handlers]
            [mimas.projects.subs]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]))


(defn project-item [{:keys [project/id project/title project/tasks]} {:keys [active-route/page active-route/params]}]
  (let [class (if (and (= :project page)
                       (= id (:by-id params)))
                "project-item project-item--active"
                "project-item")]
    (println id params)
    [:li {:className class}
     [:a.project-item__title
      {:href (str "/#/projects/" (js/encodeURIComponent id))}
      [icon "bookmark" {:size :medium :color :dark} nil {:paddingRight "1em"}]
      [:p title]]]))

(defn project-form []
  (let [local (r/atom {:adding? false :project-title ""})]
    (fn []
      (let [{:keys [adding? project-title]} @local]
        [:div.sidebar__item
         (if adding?
           [:div.project-form
            [:div.project-form__input-container
             [:input.text-field.project-form__text-field
              {:type "text"
               :placeholder "New project"
               :value project-title
               :on-input #(swap! local assoc :project-title (.. % -target -value))}]]
            [:div.project-form__btn-container
             [:button.btn.project-form__btn {:on-click (fn [e]
                                                         (swap! local assoc :adding? false)
                                                         (dispatch [:project/add project-title]))} "save"]]]

           [:div.item__title {:on-click #(swap! local assoc :adding? true)}
            [icon "add" {:size :medium :color :dark} nil {:paddingRight "1em"}]
            [:p "Add project"]])
         ]
        )))
  )

(defn project-list []
  (let [local (r/atom {:adding? false :project-title ""})]
    (fn []
      (let [projects (subscribe [:project/list])
            active-route (subscribe [:app/active-route])
            {:keys [adding? project-title]} @local]
        [:div.project-list
         [:ul.project-list
          [:li {:className (if (= (:active-route/page @active-route)
                                  :tasks)
                             "project-item project-item--active"
                             "project-item")}
           [:a.project-item__title
            {:href (str "/#/tasks")}
            [icon "bookmark" {:size :medium :color :dark} nil {:paddingRight "1em"}]
            [:p "All"]]]
          (doall
           (for [item @projects]
             ^{:key (:project/id item)} [project-item item @active-route]))]]))))
