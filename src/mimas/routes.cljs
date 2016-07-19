(ns mimas.routes
  (:require-macros [secretary.core :refer [defroute]]
                   [reagent.ratom :refer [reaction]])
  (:require [secretary.core :as s]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [re-frame.core :refer [register-sub register-handler dispatch]]
            [cljs.reader :refer [read-string]])
  (:import goog.History))


(enable-console-print!)

(defn app-navigate [db [_ page params]]
  (assoc db :app/active-route {:active-route/page page
                               :active-route/params params}))

(defn active-route [db _]
  (reaction (get @db :app/active-route)))

(register-sub
 :app/active-route
 active-route)

(register-handler
 :app/navigate
 app-navigate)

(def router-state (atom {:page nil :params nil}))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [e]
       (s/dispatch! (.-token e))))
    (.setEnabled true)))

(defn routes []
  (s/set-config! :prefix "#")

  (defroute "/" []
    (println "@ home")
    (dispatch [:app/navigate :home nil]))

  (defroute "/tasks" []
    (println "@ tasks")
    (dispatch [:app/navigate :tasks nil]))

  (defroute "/tasks/:task-id" [task-id]
    (println "@" task-id)
    (dispatch [:app/navigate :task {:by-id (read-string task-id)}]))

  (defroute "/projects" []
    (println "@ projects")
    (dispatch [:app/navigate :projects nil]))

  (defroute "/projects/:project-id" [project-id]
    (println "@" project-id)
    (dispatch [:app/navigate :project {:by-id (read-string project-id)}]))

  (hook-browser-navigation!))

(defn navigate! [route]
  (s/dispatch! route))

(defn init-router! []
  (routes))
