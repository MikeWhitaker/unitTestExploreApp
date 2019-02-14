"use strict";

/**
 * @ngdoc overview
 * @name unitTestExploreApp
 * @description
 * # unitTestExploreApp
 *
 * Main module of the application.
 */
angular
  .module("unitTestExploreApp", [
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "angular-google-analytics"
  ])
  .config(["$routeProvider", "$locationProvider", "AnalyticsProvider",
    function($routeProvider, $locationProvider, AnalyticsProvider) {


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
