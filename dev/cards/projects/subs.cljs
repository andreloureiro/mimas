(ns cards.projects.subs
  (:require-macros [devcards.core :as dc :refer [defcard]])
  (:require [re-frame.core :refer [subscribe]]))

(defcard subscriptions
  "## Projects subscriptions
   `[:project/list]`"
  @(subscribe [:project/list]))

