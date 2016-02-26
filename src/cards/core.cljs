(ns cards.core
  (:require-macros [devcards.core :as dc :refer [defcard deftest defcard-rg]]
                   )
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [mimas.db :refer [state State]]
            [mimas.core :refer [dropdown title task-form]]
            [mimas.subs :as subs]
            [mimas.handlers :as h]
            [schema.core :as s]
            [cljs.test :as t :refer-macros [is testing]]))

(enable-console-print!)


(dispatch-sync [:initialize])


;; --- Subscriptions ---

(defcard subscription-header
  (str "## Subscriptions")
  {}
  {:heading false})

(deftest subscriptions
  "Tests for re-frame subscriptions"
  (let [db (r/atom {:a :ok})
        query [:a]]

    (is (= (s/check State state) nil) "Validate state schema")

    (is (= @(subs/simple-sub db query) :ok) "Simple subscription")

    (is (= @(subscribe [:app/title]) (get state :app/title)) "Assert subscription path")
    (is (= (type @(subscribe [:app/title])) js/String) "Title is a string")

    (is (= @(subscribe [:dropdown/list]) (get state :dropdown/list)) "Assert subscription path")
    (is (= (type @(subscribe [:dropdown/list])) PersistentVector) "Dropdown list is a Vector")

    (is (= @(subscribe [:task/list]) (get state :task/list)) "Assert subscription path")
    (is (= (type @(subscribe [:task/list])) PersistentVector) "Task list is a Vector")

    (is (= @(subscribe [:task/form]) (get state :task/form)) "Assert subscription path")
    (is (= (type @(subscribe [:task/form])) PersistentArrayMap) "Task form is a Map")))


(def state-mock
  {:app/title ""
   :dropdown/list []
   :task/list []
   :task/form
   {:form/title ""
    :form/project ""}
   :task/editing nil})

(def task-mock {:task/id 0 :task/title "task" :task/project "project"})

(defcard subscription-header
  (str "## Handlers ")
  {}
  {:heading false})

(deftest handlers
  "Tests form re-frame handlers"
  (testing "form update value"
    (let [new-form (h/form-update-value state-mock [nil :form/title "andre"])]
      (is (= new-form (assoc-in state-mock [:task/form :form/title] "andre")))))

  (testing "add task"
    (let [new-task-list (h/task-add state-mock [nil task-mock])]
      (is (= new-task-list (update state-mock :task/list conj task-mock)))))

  (testing "edit task"
    (let [new-edit-task (h/task-edit state-mock [nil task-mock])]
      (is (= new-edit-task (assoc state-mock :task/editing task-mock)))))

  (testing "update task"
    (let [edit-task (assoc state-mock :task/editing task-mock)
          new-task-list (h/task-update edit-task nil)]
      (is (= new-task-list (update state-mock :task/list conj task-mock)))))

  (testing "remove task"
    (let [new-task-list (update state-mock :task/list conj task-mock)]
      (is (= state-mock (h/task-remove new-task-list [nil (:task/id task-mock)]))))))



;; --- Title ---

(def title-subs (subscribe [:app/title]))

(defcard-rg title
  [title @title-subs]
  title-subs
  {:inspect-data true})

(deftest title-tests
  (is (= "mimas" @title-subs) "title is Mimas")
  (is (= js/String (type @title-subs)) "title is a string"))



;; --- Dropdown ---

(def dropdown-subs (subscribe [:dropdown/list]))

(defcard-rg dropdown
  [dropdown @dropdown-subs]
  dropdown-subs
  {:inspect-data true})

(deftest dropdown-tests
  (is (= PersistentVector (type @dropdown-subs)) "dropdown options list is a vector"))


;; --- Create Task Panel ---

(defonce form-data (atom @(subscribe [:task/form])))
(defonce dropdown-list (atom @(subscribe [:dropdown/list])))

(defcard-rg task-form
  (fn [data _]
    [task-form @data @dropdown-list])
  form-data
  {:inspect-data true})
