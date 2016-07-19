(ns mimas.components.common.ui
  (:require [re-frame.core :refer [dispatch subscribe]]
            [mimas.components.common.subs]
            [mimas.components.common.handlers]
            [mimas.util :as util]
            [mimas.tasks.handlers]
            [reagent.core :as r]))


(def css-transition-group (r/adapt-react-class js/React.addons.CSSTransitionGroup))

(def icon-style
  {:margin ".2em"
   :font-size "14px"
   :color "#444"
   :border-radius "50%"
   :box-sizing "border-box"
   :cursor "pointer"})

(defn- color-clauses [exp]
  (condp = exp
    :primary "#cddc39"
    :dark "#444"
    :light "white"
    "transparent"))

(defn icon [type {:keys [size color background]} action more-style]
  (let [icon-size (condp = size
                    :small 14
                    :medium 20
                    :big 30)
        icon-color (color-clauses color)
        icon-bg (color-clauses background)]
    [:i.material-icons.icon
     {:style (merge icon-style
                    {:fontSize icon-size
                     :color icon-color
                     :backgroundColor icon-bg}
                    more-style)
      :on-click #(action)} type]))

(defn text-field
  ([label] (text-field {} label))
  ([props label]
   [:div.text-field-t
    [:label.text-field__label label]
    [:input.text-field__input (merge {:type "text"} props)]]))

(defn textarea-field
  ([label] (textarea-field {} label))
  ([props label]
   [:div.textarea-field
    [:label.textarea-field__label label]
    [:textarea.textarea-field__input (merge {:type "text"} props)]]))

(defn dropdown-field
  ([label] (dropdown-field {} {:key nil :label nil :coll []} label))
  ([options label] (dropdown-field {} options label))
  ([props options label]
   [:div.dropdown-field
    [:label.dropdown-field__label label]
    [:select.dropdown-field__select (merge {} props)
     [:option.select__option {:key nil :value nil} "Choose..."]
     (for [item (:coll options)]
       (let [opt-key ((:key options) item)
             opt-label ((:label options) item)]
         [:option.select__option {:key opt-key :value opt-key} opt-label]))]]))

(defn date-field
  ([label] (date-field {} label))
  ([props label]
   [:div.date-field
    [:label.date-field__label label]
    [:input.date-field__input (merge {:type "date"} props)]]))


(defn badge [template data]
  [:div.badge
   template
   [:span.badge__content data]])


(defn btn [label action]
  [:button.btn {:on-click #(action)}
   label])


(defn btn-fab [icon-type action]
  [:button.btn-fab {:on-click #(action)
                    :style {:width "3.5em"
                            :height "3.5em"
                            :right "2em"
                            :bottom "2em"}}
   [icon icon-type {:size :medium :color :dark}]])

(defn btn-flat [label action]
  [:button.btn-flat {:on-click #(action)}
   label])

(defn avatar [image avatar-size]
  (let [size (condp = avatar-size
               :small "1.6em"
               :medium "2.4em"
               :big "3.2em"
               "2em")]
    [:div.avatar
     [:div.avatar__container
      {:style {:width size
               :height size}}
      [:img.container__image
       {:src image
        :style {:maxWidth "100%"}}]]]))

(defn modal [{:keys [toolbar?]} content]
  [:div.modal-overlay
   {:key key
    :on-click #(dispatch [:ui/toggle-modal-add-task])}
   [:div.modal
    {:on-click #(.stopPropagation %)}
    (when toolbar?
      [:div.modal__toolbar
       [:div.toolbar__close-btn
        {:on-click #(dispatch [:ui/toggle-modal-add-task])} "x"]])
    [:div.modal__content content ]]])

(defn search-box []
  [:div.search-box
   [:input.text-field.search-box__input
    {:type "text"
     :placeholder "Search"
     :on-input #(dispatch [:task/search (.. % -target -value)])}]
   [:div.search-box__icon
    [icon "search" {:size :small :color :dark}]]])


(defn app-bar []
  (let [user (subscribe [:app/user])]
    (fn []
      (let [{:keys [user/name user/email]} @user]
        [:div.app-bar
         [:div.app-bar__first-slot
          [icon "menu" {:size :medium :color :dark} #(dispatch [:ui/toggle-sidebar]) {:paddingRight "0.7em"}]
          [:span.app-bar__title "Mimas"]]
         [:div.app-bar__second-slot
          [search-box]]
         [:div.app-bar__third-slot
          [avatar (:user/avatar @user) :small]]]))))

