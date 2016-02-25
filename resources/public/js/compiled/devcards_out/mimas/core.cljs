(ns mimas.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync]]
            [goog.dom :as gdom]
            [mimas.handlers]
            [mimas.subs]
            ))


(defn title [t]
  [:div.title [:h1.title__text t]])

(defn dropdown [item-list]
  (let [local (r/atom {:open? false :active nil})]
    (fn [item-list]
      (let [{:keys [open? active]} @local]
        [:div.dropdown
         (if-not open?
           [:div.dropdown__active {:on-click #(swap! local assoc :open? true)} (or (:item/label active) "none")]
           [:div.dropdown__list
            (for [{:keys [item/id item/label] :as item} item-list]
              [:div.list__item {:key id :on-click #(swap! local assoc :active item :open? false)} label])])]))))

(defn task-form [data item-list]
  [:div.create-task-panel
   [:div.create-task-panel__input-container
    [:input.input-container__input {:type "text"}]]
   [:div.create-task-panel__dropdown-container
    [dropdown item-list]]
   [:div.create-task-panel__submit-container
    [:button.submit-container__submit-btn "create"]]])

(defn task-item [{:keys [task/id task/title task/project]}]
  [:li.task-item {:key id}
   [:input.task-item__done-checkbox {:type "checkbox"}]
   [:p.task-item__title title]
   [:small.task-item__project project]])

(defn task-list [item-list]
  [:ul.task-list (map task-item item-list)])

(defn mimas []
  (let [title-text (subscribe [:app/title])
        item-list (subscribe [:task/list])
        form-data (subscribe [:task/form])
        dropdown-list (subscribe [:dropdown/list])]
    (fn []
      [:div
       [title @title-text]
       [task-form @form-data @dropdown-list]
       [task-list @item-list]])))

(defn init []
  (dispatch-sync [:initialize])
  (r/render [mimas] (gdom/getElement "app")))

(init)
