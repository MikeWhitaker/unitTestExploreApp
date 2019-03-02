"use strict";

/**
 * @ngdoc overview
 * @name unitTestExploreApp
 * @description
 * # unitTestExploreApp
 *
 * Main module of the application.
 */
var bufferAnalyticsCall = [];
var root = this;
angular
  .module("unitTestExploreApp", [
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "angular-google-analytics",
    "ngAnimate",
    "ui.bootstrap"
  ])
  .config(["$routeProvider", "$locationProvider", "AnalyticsProvider", "$provide",
    function($routeProvider, $locationProvider, AnalyticsProvider, $provide) {
      $provide.decorator('Analytics', function ($delegate) {
        var originalFunction = $delegate.trackEvent;
        $delegate.trackEvent = function() {
          if (_(arguments).some(function(argument) {
              return !argument;
            }))
            throw ("invalid argument exception: ", arguments);
    
          if (!root.ga) {
            bufferAnalyticsCall.push(arguments);
          } else {
            if(!_(bufferAnalyticsCall).isEmpty()){
              bufferAnalyticsCall.forEach(function(analyticsCall) {
                $delegate.trackEvent(analyticsCall);
              });
              bufferAnalyticsCall = [];
            }
            originalFunction.apply($delegate, arguments);
          }
        };
        return $delegate;
      });


      $routeProvider
        .when("/", {
          templateUrl: "views/main.html",
          controller: "MainCtrl",
          controllerAs: "main"
        })
        .when("/about", {
          templateUrl: "views/about.html",
          controller: "AboutCtrl",
          controllerAs: "about"
        })
        .when("/results", {
          templateUrl: "views/results.html",
          controller: "ResultsCtrl",
          controllerAs: "results"
        })
        .when("/search", {
          templateUrl: "views/search.html",
          controller: "SearchCtrl",
          controllerAs: "searchCtrl"
        })
        .otherwise({
          redirectTo: "/"
        });
      $locationProvider.html5Mode(false);
      AnalyticsProvider.setAccount("UA-9999999999-99");
    }
  ])
  .run(function(loggingService) {
    loggingService.start();
  });
