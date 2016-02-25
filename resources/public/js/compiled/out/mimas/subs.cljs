(ns mimas.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [mimas.db :refer [state]]))


(register-sub
 :app/title
 (fn [db _]
   (reaction
    (get @db :app/title))))

(register-sub
 :dropdown/list
 (fn [db _]
   (reaction
    (get @db :dropdown/list))))

(register-sub
 :task/list
 (fn [db _]
   (reaction
    (get @db :task/list))))

(register-sub
 :task/form
 (fn [db _]
   (reaction
    (get @db :task/form))))
