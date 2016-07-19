(ns mimas.tasks.ui
  (:require [mimas.components.common.ui :refer [icon modal btn text-field dropdown-field date-field]]
            [mimas.tasks.handlers]
            [mimas.tasks.subs]
            [mimas.util :as util]
            [mozgas.core :as m]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [clojure.string :as string]
            ))

(def css-transition-group (r/adapt-react-class js/React.addons.CSSTransitionGroup))


(defn- valid-form? [form]
  (let [{:keys [title]} form]
    (not (clojure.string/blank? title))))

(defn task-form []
  (let [local (r/atom {:title "" :project "0" :priority "1" :due-date nil})
        form-data (subscribe [:task/form])
        item-list (subscribe [:project/list])]
    (r/create-class
     {:component-did-mount
      (fn [this])
      :reagent-render
      (fn []
        [:div.create-task-panel
         [:form.create-task-panel__input-container
          {:on-submit #(.preventDefault %)}
          [:div.create-task-panel__header
           [:div.header__close-btn-container
            [:div.close-btn-container__btn [icon "close" {:size :medium :color :light} #(dispatch [:ui/toggle-modal-add-task])]]]
           [:div.header__content
            [:span.content__title ""]
            [:label.label.label--dark-bg "Task"]
            [:input.text-field.text-field--dark-bg
             {:type "text"
              :value (:title @local)
              :on-input #(swap! local assoc :title (.. % -target -value))}]
            [:label.label.label--dark-bg "Project"]
            [:div.create-task-panel__dropdown-container
             [:div.dropdown
              [:select.select-field.select-field--dark-bg
               {:value (:project @local)
                :on-change #(swap! local assoc :project (.. % -target -value))}
               (for [item @item-list]
                 (let [{:keys [project/id project/title]} item]
                   [:option.list__item {:key id :value id} title]))]]]]
           [:button.btn-fab.header__fab
            {:style {:width "4em"
                     :height "4em"
                     :backgroundColor "#cddc39"}
             :on-click (fn [_]
                         (when (valid-form? @local)
                           (dispatch [:task/add @local])
                           (dispatch [:ui/toggle-modal-add-task])))}
            [icon "add" {:size :big :color :dark}]]]
          [:div.create-task-panel__content
           [:label.label "Due date"]
           [:input.text-field
            {:type "date"
             :on-change #(swap! local assoc :due-date (js/Date. (.. % -target -value)))}]
           [:label.label "Priority"]
           [:select.select-field
            {:value (:priority @local)
             :on-change #(swap! local assoc :project (.. % -target -value))}
            (for [item '[1 2 3 4]]
              [:option.list__item {:key item :value item} item])]]]])})))


(defn modal-task-form []
  [modal {:toolbar? false} [task-form]])


(defn update-local-form [state key e]
  (swap! state assoc-in [:form key] (.. e -target -value)))

(defn task-item-local-state [task]
  {:editing? false
   :form {:task/due-date (:task/due-date task)
          :task/project (:task/project task)
          :task/priority (:task/priority task)
          :task/title (:task/title task)}})

(defn task-item [task]
  (let [local (r/atom (task-item-local-state task))]
    (fn [{:keys [task/id task/done? task/due-date task/priority task/project task/title] :as task}]
      (let [task-done? (if (:task/done? task)
                        "task-item--done"
                        "task-item--active")
            projects (subscribe [:project/list])
            task-project (first (filter #(= project (:project/id %)) @projects))]
        (if-not (:editing? @local)
          [:li.task-item {:key id :className task-done?}
           [:div.task-item__first-column
            [:input.task-item__checkbox-done
             {:type "checkbox" :checked done? :on-change #(dispatch [:task/toggle-done task])}]]
           [:div.task-item__second-column
            [:p.task-item__title  title]
            [:p.task-item__subtitle (:project/title task-project)]]
           [:div.task-item__third-column
            [icon "edit" {:size :small :color :dark} #(swap! local assoc :editing? true)]]
           ]

          [:li.task-item.task-item--editing {:key id}
           [:div.task-item__done
            [:input.task-item__checkbox-done
             {:type "checkbox" :checked done? :on-change #(dispatch [:task/toggle-done task])}]]
           [:div.task-item__title
            [text-field
             {:value (:task/title (:form @local))
              :on-change #(update-local-form local :task/title %)}
             "Title"]]
           [:div.task-item__project
            [dropdown-field
             {:value (:task/project (:form @local))
              :on-change #(update-local-form local :task/project %)}
             {:key :project/id
              :label :project/title
              :coll @projects}
             "Project"]]
           [:div.task-item__due-date
            [date-field
             {:value (:task/due-date (:form @local))
              :on-change #(update-local-form local :task/due-date %)}]]
           [:div.task-item__priority
            [dropdown-field
             {:value (:task/priority (:form @local))
              :on-change #(update-local-form local :task/priority %)}
             {:key :key
              :label :label
              :coll (mapv #(assoc {} :key % :label %) (range 1 5))}
             "Priority"]]
           [:div.row {:style {:justifyContent "flex-end"}}
            [btn "DELETE" (fn [e]
                            (dispatch [:task/remove id])
                            (swap! local assoc :editing? false))]
            [btn "SAVE" (fn [e]
                          (dispatch [:task/update (merge task (:form @local))])
                          (swap! local assoc :editing? false))]
            ]

           ])))))


(defn filter-tasks-by-project [project-id tasks]
  (if-not (nil? project-id)
    (filterv
     (fn [task]
       (= (:task/project task) project-id)) tasks)
    tasks))


(defn empty-task-list []
  [:p "You've no tasks!"])


(defn filter-tasks-by-query [tasks]
  (let [query (subscribe [:task/query])]
    (println @query)
    (if (not (string/blank? @query))
      (filterv
       #(string/includes?
         (util/upcase (:task/title %))
         (util/upcase @query))
       tasks)
      tasks)))


(defn render-task-list [tasks]
  (let [task-list (filter-tasks-by-query tasks)]
    (for [item (sort-by :task/done? task-list)]
      ^{:key (:task/id item)}[task-item item])
    ))


(defn task-list []
  (let [tasks (subscribe [:task/list])
        route (subscribe [:app/active-route])]
    (fn []
      (let [project-id (get-in @route [:active-route/params :by-id])
            project-tasks (filter-tasks-by-project project-id @tasks)]
        [m/motion-group
         {:component "ul"
          :class-name "task-list"
          :enter {:animation "transition.slideLeftIn"}}
         (if-not (empty? project-tasks)
           (render-task-list project-tasks)
           [empty-task-list]
           )
         ]
        ))))

(defn task-card [task])
