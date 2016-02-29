(ns cards.core
  (:require-macros [devcards.core :as dc :refer [defcard deftest defcard-rg]]
                   )
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync dispatch]]
            [mimas.db :refer [initial-state State]]
            [mimas.core :refer [title]]
            [mimas.subs :as subs]
            [mimas.handlers :as h]
            [mimas.util :refer [simple-sub]]
            [schema.core :as s]
            [cljs.test :as t :refer-macros [is testing]]
            [cards.projects.handlers]
            [cards.projects.subs]
            [cards.projects.ui]
            [cards.tasks.ui]
            ))

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

    (is (= (s/check State initial-state) nil) "Validate state schema")

    (is (= @(simple-sub db query) :ok) "Simple subscription")

    (is (= @(subscribe [:app/title]) (get initial-state :app/title)) "Assert subscription path")
    (is (= (type @(subscribe [:app/title])) js/String) "Title is a string")

    (is (= @(subscribe [:dropdown/list]) (keys (group-by :task/project (get initial-state :task/list)))) "Assert subscription path")
    (is (= (type @(subscribe [:dropdown/list])) KeySeq) "Dropdown list is a Vector")

    (is (= @(subscribe [:task/list]) (get initial-state :task/list)) "Assert subscription path")
    (is (= (type @(subscribe [:task/list])) PersistentVector) "Task list is a Vector")

    (is (= @(subscribe [:task/form]) (get initial-state :task/form)) "Assert subscription path")
    (is (= (type @(subscribe [:task/form])) PersistentArrayMap) "Task form is a Map")))


(def state-mock
  {:app/title ""
   :dropdown/list []
   :task/list []
   :task/form
   {:form/title ""
    :form/project ""}
   :task/editing nil})

(def task-mock {:task/id 0 :task/title "task" :task/project "project" :task/done? false})

(defcard subscription-header
  (str "## Handlers ")
  {}
  {:heading false})

(deftest handlers
  "Tests form re-frame handlers"
  ;; (testing "form update value"
  ;;   (let [new-form (h/form-update-value state-mock [nil :form/title "andre"])]
  ;;     (is (= new-form (assoc-in state-mock [:task/form :form/title] "andre")))))

  ;; (testing "add task"
  ;;   (let [new-task-list (h/task-add state-mock [nil task-mock])]
  ;;     (is (= new-task-list (update state-mock :task/list conj task-mock)))))

  ;; (testing "edit task"
  ;;   (let [new-edit-task (h/task-edit state-mock [nil task-mock])]
  ;;     (is (= new-edit-task (assoc state-mock :task/editing task-mock)))))

  ;; (testing "update task"
  ;;   (let [new-task (assoc task-mock :task/id 1 :task/title "another task")
  ;;         updated-task (assoc new-task :task/title "updated task")
  ;;         task-list (update state-mock :task/list conj task-mock new-task)
  ;;         updated-task-list (h/task-update task-list [nil updated-task])
  ;;         expected-result (update state-mock :task/list conj task-mock updated-task)]
  ;;     (is (= updated-task-list expected-result))))

  ;; (testing "remove task"
  ;;   (let [new-task-list (update state-mock :task/list conj task-mock)]
  ;;     (is (= state-mock (h/task-remove new-task-list [nil (:task/id task-mock)])))))

  ;; (testing "finish task"
  ;;   (let [state-before-task-finish (update state-mock :task/list conj task-mock)
  ;;         state-after-task-finish (update state-mock :task/list conj (assoc task-mock :task/done? true))]
  ;;     (is (= state-after-task-finish (h/toggle-done state-before-task-finish [nil task-mock])))))

  )



(defcard components-header
  (str "## Components")
  {}
  {:heading false})

;; --- Title ---

(def title-subs (subscribe [:app/title]))

(defcard-rg title
  [title @title-subs]
  title-subs
  {:inspect-data true})

(deftest title-tests
  (is (= "mimas" @title-subs) "title is Mimas")
  (is (= js/String (type @title-subs)) "title is a string"))



;; --- Create Task Panel ---

;; (defonce form-data (atom @(subscribe [:task/form])))

;; (defcard-rg task-form
;;   (fn [data _]
;;     [task-form @data @dropdown-list])
;;   form-data
;;   {:inspect-data true})


;; --- Task Item ---

;; (defcard-rg task-item
;;   (fn [data _]
;;     [task-item @data])
;;   (first @(subscribe [:task/list]))
;;   {:inspect-data true})

;; (defcard-rg task-item-done
;;   (fn [data _]
;;     [task-item @data])
;;   (second @(subscribe [:task/list]))
;;   {:inspect-data true})

;; (defcard-rg task-item-without-project
;;   (fn [data _]
;;     [task-item @data])
;;   (dissoc (first @(subscribe [:task/list])) :task/project)
;;   {:inspect-data true})


;; --- Task List ---

;; (defcard-rg task-list
;;   (fn [data _]
;;     [task-list @data])
;;   @(subscribe [:task/list]))

;; (defcard-rg empty-task-list
;;   (fn [data _]
;;     [task-list @data])
;;   [])
