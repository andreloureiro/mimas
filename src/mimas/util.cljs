(ns mimas.util
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [cljs-time.core :as t]
            [cljsjs.react-motion]
            [clojure.string :as string]
            [reagent.core :as r]))


(def ENTER_KEY 13)
(def ESC_KEY 27)

(def animation
  {:default {:duration 2000
             :enter {:opacity [1 0]}
             :leave {:opacity [0 1]}}})

(def transition-group (r/adapt-react-class js/React.addons.TransitionGroup))

(def velocity js/Velocity)

(defn transition [type]
  (condp = type
    :default (get animation :default)
    (get animation :default)))

(defn velocity-component
  [props children]
  (let [dom-node (r/atom nil)]
    (r/create-class
     {:display-name "velocity-component"
      :component-will-enter
      (fn [done]
        (let [{:keys [enter duration]} (transition (:transition-name props))]
          (velocity @dom-node enter {:duration duration :complete done})))
      :component-did-mount
      (fn [this]
        (println "velocity-component mounted")
        (reset! dom-node (r/dom-node this))
        (js/console.dir @dom-node))
      :component-will-leave
      (fn [done]
        (let [{:keys [leave duration]} (transition (:transition-name props))]
          (velocity @dom-node leave {:duration duration :complete done})))
      :reagent-render
      (fn [props children]
        (js/console.dir props)
        (js/console.dir children)
        children)})))

(defn velocity-animation
  [props children]
  (r/create-class
   {:display-name "velocity-animation"
    :component-did-mount
    (fn []
      (println "velocity-animation mounted"))
    :reagent-render
    (fn [props children]
      [transition-group
       (merge props {:child-factory (fn [] [velocity-component props children])})]
      )}))


(defn simple-sub [db [k]]
  (reaction
   (get @db k)))

(defn str->edn [s] (cljs.reader/read-string s))

(defn humanize-interval [d]
  (let [interval (t/interval (t/date-time (t/now)) d)
        in-minutes (t/in-minutes interval)
        in-hours (t/in-hours interval)
        in-days (t/in-days interval)]
    (condp > 0
      in-days (str in-days " days")
      in-hours (str in-hours " hours")
      in-minutes (str in-minutes " minutes")
      nil)))

(defn upcase [w]
  (string/upper-case w))

(defn clean-input [e]
  (set! (.. e -target -value) ""))


(def css-transition-group (r/adapt-react-class js/React.addons.CSSTransitionGroup))

(def zoom-in-animation
  {:transition-name "animation-zoom-in"
   :transition-enter-timeout 0
   :transition-leave-timeout 0})

(def fade-in-animation
  {:transition-name "animation-fade-in"
   :transition-enter-timeout 0
   :transition-leave-timeout 0})

(def from-bottom-animation
  {:transition-name "animation-from-bottom"
   :transition-enter-timeout 0
   :transition-leave-timeout 0})

(def from-left-animation
  {:transition-name "animation-from-left"
   :transition-enter-timeout 0
   :transition-leave-timeout 0})

(defn animate-component
  [animation-type children]
  (let [animation-props (condp = animation-type
                          :zoom-in zoom-in-animation
                          :fade-in fade-in-animation
                          :from-left from-left-animation
                          :from-bottom from-bottom-animation
                          fade-in-animation)]
    [css-transition-group animation-props children]))



(defn window-height! []
  (.-innerHeight js/window))

(def Motion (r/adapt-react-class js/ReactMotion.Motion))
(def TransitionMotion (r/adapt-react-class js/ReactMotion.TransitionMotion))

(def spring js/ReactMotion.spring)
