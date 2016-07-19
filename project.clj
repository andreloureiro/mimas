(defproject mimas "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [devcards "0.2.1-6"]
                 [sablono "0.6.2"]
                 [cljsjs/react "15.0.0-rc.1-0"]
                 [cljsjs/react-dom "15.0.0-rc.1-0"]
                 [cljsjs/react-dom-server "15.0.0-rc.1-0"]
                 [reagent "0.6.0-alpha" :exclude [cljsjs/react]]
                 [figwheel-sidecar "0.5.0"]
                 [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                 [re-frame "0.7.0-alpha-3"]
                 [prismatic/schema "1.0.5"]
                 [bidi "2.0.3"]
                 [venantius/accountant "0.1.7"]
                 [kibu/pushy "0.3.6"]
                 [ring "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [reloaded.repl "0.2.1"]
                 [org.danielsz/system "0.3.0-SNAPSHOT"]
                 [com.stuartsierra/component "0.3.1"]
                 [hiccup "1.0.5"]
                 [compojure "1.5.0"]
                 [secretary "1.2.3"]
                 [binaryage/devtools "0.5.2"]
                 [com.andrewmcveigh/cljs-time "0.3.15"]
                 [cljsjs/react-motion "0.4.1-1"]
                 [cljsjs/react-with-addons "15.0.0-rc.2-0"]
                 [mozgas "0.1.0"]
                 ]

  :plugins [[lein-figwheel "0.5.0-6"]
            [lein-cljsbuild "1.1.2" :exclusions [org.clojure/clojure]]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src"]

  :profiles {:dev {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       mimas.core
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/mimas.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "devcards"
                        :source-paths ["dev" "src"]
                        :figwheel { :devcards true }
                        :compiler { :main       "cards.core"
                                   :asset-path "js/compiled/devcards_out"
                                   :output-to  "resources/public/js/compiled/mimas_devcards.js"
                                   :output-dir "resources/public/js/compiled/devcards_out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "mimas.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/mimas.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] })
