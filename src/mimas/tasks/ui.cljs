(ns mimas.tasks.ui
  (:require [mimas.components.util :refer [icon]]
            [mimas.tasks.subs]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]))


(defn task-form []
  (let [local (r/atom {:title "" :project "0"})]
    (fn []
      (let [form-data (subscribe [:task/form])
            item-list (subscribe [:project/list])]
        [:div.create-task-panel
         [:form.create-task-panel__input-container
          [:input.input-container__input
           {:type "text"
            :value (:title @local)
            :placeholder "Task title"
            :on-input #(swap! local assoc :title (.. % -target -value))}]]
         [:div.create-task-panel__dropdown-container
          [:div.dropdown
           [:select.dropdown__list
            {:value (:project @local)
             :on-change #(swap! local assoc :project (.. % -target -value))}
            (for [item @item-list]
              (let [{:keys [project/id project/title]} item]
                [:option.list__item {:key id :value id} title]))]]]
         [:div.create-task-panel__submit-container
          [:button.submit-container__submit-btn
           {:on-click #(dispatch [:task/add @local])} "create"]]]))))

(defn task-item [task]
  (let [
        local (r/atom {:editing? false :form {:task/title (:task/title task) :task/project (:task/project task)}})]
    (fn [{:keys [task/id task/title task/project task/done?] :as task}]
      (let [task-done (if (:task/done? task) "task-item--done" "task-item--active")]
        (if-not (:editing? @local)
          [:li.task-item {:key id :className task-done}
           [:div.task-item__first-column
            [:input.task-item__checkbox-done
             {:type "checkbox" :checked done? :on-change #(dispatch [:task/toggle-done task])}]]
           [:div.task-item__second-column
            [:p.task-item__title {:on-click #(swap! local assoc :editing? true)} title]]
           [:div.task-item__third-column
            [icon "edit" #(swap! local assoc :editing? true)]
            [icon "delete" #(dispatch [:task/remove id]) "delete"]]]

          [:li.task-item {:key id :className "task-item--active"}
           [:div.task-item__first-column
            [:input.task-item__checkbox-done
             {:type "checkbox" :checked done? :on-change #(dispatch [:task/toggle-done task])}]]
           [:div.task-item__second-column
            [:input {:type "text" :value (:task/title (:form @local)) :on-change #(swap! local assoc-in [:form :task/title] (.. % -target -value))}]
            ]
           [:div.task-item__third-column
            [:button {:on-click (fn [e]
                                  (dispatch [:task/update (merge task (:form @local))])
                                  (swap! local assoc :editing? false))} "Save"]]
           ])))))


(defn task-list [item-list]
  [:ul.task-list (if-not (empty? item-list)
                   (for [item (sort-by :task/done? item-list)]
                     ^{:key (:task/id item)}[task-item item])
                   [:p "You've no tasks!"]) ])
