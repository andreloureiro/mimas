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


(def task-mock {:task/id 0 :task/title "task" :task/project "project"})

(deftest handlers
  "Tests form re-frame handlers"
  (testing "form update value"
    (let [form-mock {:task/form {:form/title "" :form/project ""}}
          new-form (h/form-update-value form-mock [nil :form/title "andre"])]
      (is (= new-form (assoc-in form-mock [:task/form :form/title] "andre")))))

  (testing "add task"
    (let [task-list-mock {:task/list []}
          new-task-list (h/task-add task-list-mock [nil task-mock])]
      (is (= new-task-list (update task-list-mock :task/list conj task-mock)))))

  (testing "edit task"))



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
