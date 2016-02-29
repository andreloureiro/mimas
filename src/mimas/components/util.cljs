(ns mimas.components.util)

(def icon-small
  {:padding ".2em"
   :margin ".2em"
   :font-size "14px"
   :color "#444"
   :border-radius "50%"
   :box-sizing "border-box"
   :cursor "pointer"})

(defn icon [size type action]
  (let [icon-size (condp = size :small icon-small)]
    [:i.material-icons.icon {:style icon-size
                             :on-click (or action nil)} type]))
