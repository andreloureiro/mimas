(ns mimas.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [mimas.db :refer [state]]))


(defn simple-sub [db [k]]
  (reaction
   (get @db k)))

(register-sub
 :app/title
 simple-sub)

(register-sub
 :dropdown/list
 simple-sub)

(register-sub
 :task/list
 simple-sub)

(register-sub
 :task/form
 simple-sub)


(register-sub
 :get-db
 (fn [db _]
   @db))
