(ns mimas.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [goog.dom :as gdom]
            [devtools.core :as devtools]
            [mimas.routes :refer [init-router!]]
            [mimas.views :refer [task-view tasks-view not-found-view]]
            [mimas.handlers]
            [mimas.subs]
            [cljsjs.react-motion]
            [cljsjs.react]))


(enable-console-print!)

(devtools/install!)

(defn title [t]
  [:div.title
   [:h1.title__text t]])


(defn current-view []
  (let [route (subscribe [:app/active-route])]
    (fn []
      (let [{:keys [active-route/page active-route/params]} @route]
        (condp = page
          :tasks [tasks-view]
          :task [task-view (:by-id params)]
          :project [tasks-view]
          [not-found-view])))))

(defn mimas []
  (fn []
    [current-view]))

(defn init []
  (dispatch-sync [:initialize])
  (init-router!)
  (r/render [mimas] (gdom/getElement "app")))

(init)
