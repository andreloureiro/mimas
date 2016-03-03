(ns mimas.routes
  (:require [accountant.core :as a]
            [bidi.bidi :as b]))

(def routes ["/" [[:filter] :filter-tasks]])

(defn router-handler [path]
  (b/match-route routes path))

(a/configure-navigation! {:nav-handler router-handler})
