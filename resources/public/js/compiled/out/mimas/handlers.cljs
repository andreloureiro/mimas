(ns mimas.handlers
  (:require [mimas.db :refer [state]]
            [re-frame.core :refer [register-handler]]))


(register-handler
 :initialize
 (fn [db _]
   (merge db state)))

