(ns mimas.server
  (:require [bidi.ring :as br :refer [make-handler]]
            [bidi.bidi :as b]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [hiccup.page :refer [html5 include-css include-js]]
            [com.stuartsierra.component :as component]
            (system.components
             [jetty :refer [new-web-server]])
            [reloaded.repl :refer [system init start stop go reset]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [response content-type]]
            [ring.adapter.jetty :as jetty]))


(defn index
  []
  (let [font "https://fonts.googleapis.com/css?family=Work+Sans:400,700"
        material-icons "https://fonts.googleapis.com/icon?family=Material+Icons"
        app-style "/css/mimas_style.css"
        app-js "/js/compiled/mimas.js"]
    (html5
     [:head
      [:title "mimas"]
      (include-css font material-icons app-style)]
     [:body
      [:div#app]
      (include-js app-js)])))

(defn index-handler
  [req]
  (-> (index)
      (response)
      (content-type "text/html; charset=UTF-8")))

;; (def routes ["/" {"" {:get index-handler}}])

(defroutes app-routes
  (route/resources "/")
  (GET "/" [] index-handler)
  (route/not-found ":("))

(def handler
  (-> app-routes
      (wrap-resource "/")
      ))

(defn dev-system []
  (component/system-map
   :server (new-web-server 3000 handler)))


(defn init-server []
  (reloaded.repl/set-init! dev-system))
