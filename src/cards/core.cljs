(ns cards.core
  (:require-macros [devcards.core :as dc :refer [defcard deftest defcard-rg]]
                   [clojure.set :as s])
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch-sync]]
            [mimas.db :refer [state]]
            [mimas.core :refer [dropdown title]]
            [mimas.subs :as subs]
            [mimas.handlers]
            [cljs.test :as t :refer-macros [is testing]]))

(enable-console-print!)


(dispatch-sync [:initialize])


(deftest subscriptions
  "Tests for re-frame subscriptions
```clojure
db (reagent/atom {:a :ok})
query [:a]"
  (let [db (r/atom {:a :ok})
        query [:a]]
    (is (= @(subs/simple-sub db query) :ok) "Simple subscription")))


;; --- Title ---

(def title-subs (subscribe [:app/title]))

(defcard-rg title
  [title @title-subs]
  title-subs)

(deftest title-tests
  (is (= "mimas" @title-subs) "title is Mimas")
  (is (= js/String (type @title-subs)) "title is a string"))



;; --- Dropdown ---

(def dropdown-subs (subscribe [:dropdown/list]))

(defcard-rg dropdown
  [dropdown @dropdown-subs]
  dropdown-subs)

(println dropdown)

(deftest dropdown-tests
  (is (= PersistentVector (type @dropdown-subs)) "dropdown options is a vector")) 
