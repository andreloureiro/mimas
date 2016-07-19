(ns cards.projects.handlers
  (:require-macros [devcards.core :as dc :refer [defcard deftest defcard-rg]]
                   )
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [mimas.db :refer [initial-state]]
            [mimas.subs :as subs]
            [mimas.projects.handlers :as h]
            [schema.core :as s]
            [cljs.test :as t :refer-macros [is testing]]))


(def project-mock {:project/id 1 :project/title "Project#1"})

(defcard handlers
  "## Projects handlers"
  nil
  {:heading false})

(deftest project-handlers
  (testing "[:project/add project]"
    (let [expected (update initial-state :project/list conj project-mock)
          result (h/add-project initial-state [nil project-mock])
          _ (println expected)]
      (is (= result expected) "Add a new project")))

  (testing "[:project/update project]"
    (let [updated-project (assoc project-mock :project/title "Project#123")
          list-before (update initial-state :project/list conj project-mock)
          expected (update initial-state :project/list conj updated-project)
          result (h/update-project list-before [nil updated-project])]
      (is (= result expected) "Update a project")))

  (testing "[:project/delete id]"
    (let [expected (assoc initial-state :project/list [])
          {:keys [project/id]} (first (:project/list initial-state))
          result (h/delete-project initial-state [nil id])]
      (is (= result expected) "Delete a project")))

  )

