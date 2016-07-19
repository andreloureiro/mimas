(ns mimas.components.common.handlers
  (:require [re-frame.core :refer [register-handler debug]]
            [mimas.handlers :refer [persist-mw]]))


(defn toggle-modal-add-task [db _]
  (let [modal-state-path [:app/ui :ui/modal-add-task :open?]
        new-modal-state (get-in db modal-state-path)]
    (assoc-in db modal-state-path (not new-modal-state))))

(register-handler
 :ui/toggle-modal-add-task
 [debug persist-mw]
 toggle-modal-add-task)


(defn toggle-sidebar [db _]
  (let [db-path [:app/ui :ui/sidebar-open?]
        sidebar-state (get-in db db-path)]
    (assoc-in db db-path (not sidebar-state))))

(register-handler
 :ui/toggle-sidebar
 [debug]
 toggle-sidebar)
