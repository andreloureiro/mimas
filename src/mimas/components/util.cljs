(ns mimas.components.util)

(defn icon [type action]
  [:i.material-icons {:on-click (or action nil)} type])
