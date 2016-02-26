(ns mimas.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [goog.dom :as gdom]
            [mimas.handlers]
            [mimas.subs]))


(defn title [t]
  [:div.title [:h1.title__text t]])


(defn select-dd-item [local item]
  (swap! local assoc :active item :open? false)
  (dispatch [:form/update-value :form/project item]))

(defn active-dd-item [item-id active-id]
  (if (= item-id active-id) "list__item--active" ""))

(defn close-dd-list [local]
  (swap! local assoc :open? false))

(defn dropdown [item-list]
  (let [local (r/atom {:open? false :active nil})]
    (fn [item-list]
      (let [{:keys [open? active]} @local]
        [:div.dropdown
         [:select.dropdown__list
          (for [item item-list]
            [:option.list__item {:key item} item])]]))))


(defn task-form [data item-list]
  [:div.create-task-panel
   [:form.create-task-panel__input-container
    [:input.input-container__input
     {:type "text"
      :placeholder "Task title"
      :on-change #(dispatch [:form/update-value :form/title (.. % -target -value)])}]]
   [:div.create-task-panel__dropdown-container
    [:div.dropdown
     [:select.dropdown__list
      {:on-change #(dispatch [:form/update-value :form/project (.. % -target -value)])}
      (for [item item-list]
        [:option.list__item {:key item} item])]]]
   [:div.create-task-panel__submit-container
    [:button.submit-container__submit-btn
     {:on-click #(dispatch [:task/add])} "create"]]])

(defn task-item [{:keys [task/id task/title task/project task/done?] :as task}]
  (let [task-done (if done? "task-item--done" "task-item--active")]
    [:li.task-item {:key id :className task-done}
     [:div.task-item__first-column
      [:input.task-item__checkbox-done
       {:type "checkbox" :checked done? :on-change #(dispatch [:task/toggle-done task])}]]
     [:div.task-item__second-column
      [:p.task-item__title title]]
     [:div.task-item__third-column
      [:p.task-item__project project]]
     ]))

(defn task-list [item-list]
  [:ul.task-list (if-not (empty? item-list)
                   (map task-item (sort-by :task/done? item-list))
                   [:p "You've no tasks!"]) ])


(defn project-item [title tasks]
  [:li.project-item {:key title}
   [:p.project-item__title title][:p.project-item__badge (count tasks)]])

(defn project-list [projects]
  [:ul.project-list
   (for [[project tasks] projects]
     [project-item project tasks])])


(defn mimas []
  (let [title-text (subscribe [:app/title])
        tasks (subscribe [:task/list])
        form-data (subscribe [:task/form])
        dropdown-list (subscribe [:dropdown/list])
        projects (subscribe [:project/list])]
    (fn []
      [:div
       [title @title-text]
       [task-form @form-data @dropdown-list]
       [:div {:style {:display "flex"}}
        [:div {:style {:flex 1}}
         [project-list @projects]]
        [:div {:style {:flex 3}}
         [task-list @tasks]]]])))

(defn init []
  (dispatch-sync [:initialize])
  (r/render [mimas] (gdom/getElement "app")))

(init)
