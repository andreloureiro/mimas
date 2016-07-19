(ns mimas.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [mimas.db :refer [initial-state]]
            [mimas.util :refer [simple-sub]]))


(register-sub
 :app/title
 simple-sub)

(register-sub
 :app/user
 simple-sub)

(register-sub
 :app/active-route
 simple-sub)
