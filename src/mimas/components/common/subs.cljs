(ns mimas.components.common.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))


(defn modal-add-task [db _]
  (reaction (get-in @db [:app/ui :ui/modal-add-task :open?])))

(register-sub
 :ui/modal-add-task
 modal-add-task)


(defn sidebar-open? [db _]
  (reaction (get-in @db [:app/ui :ui/sidebar-open?])))

(register-sub
 :ui/sidebar-open?
 sidebar-open?)
