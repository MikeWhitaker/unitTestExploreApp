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
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
  ])
  .config(function($routeProvider, $locationProvider) {
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
  })
  .run(function(loggingService) {
    loggingService.start();
  });
